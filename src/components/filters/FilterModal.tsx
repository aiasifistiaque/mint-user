'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalCloseButton,
	useDisclosure,
	ModalBody,
	Heading,
	HStack,
	useRadioGroup,
	Button,
	Input,
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	Spacer,
	InputProps,
} from '@chakra-ui/react';

import {
	Column,
	SpaceBetween,
	Button as MButton,
	RadioCard,
	currency,
	useAppSelector,
} from '@/components';
import { useAppDispatch, useColors } from '../hooks';
import { applyFilters, clearFilters } from '@/store/slices/tableSlice';

const stockOptions = [
	{ label: 'Show In Stock Products', value: '1' },
	{ label: 'Show All Products', value: '2' },
];

const FilterModal = ({ onApply, onClear }: any) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [inStock, setInStock] = useState<any>('2');
	const dispatch = useAppDispatch();

	const { filters } = useAppSelector((state: any) => state.table);

	const [price, setPrice] = useState({ min: 10, max: filters?.price_btwn?.split('_')[1] || 1000 });
	const [range, setRange] = useState([10, 1000]);

	const [isLoading, setIsLoading] = useState(false);

	const onPriceChange = (e: any) => {
		const { name, value } = e.target;
		setPrice(prev => ({ ...prev, [name]: value }));
		if (name === 'min') setRange([Number(value), range[1]]);
		else setRange([range[0], Number(value)]);
	};

	const onApplyFilters = () => {
		if (inStock === '1') {
			dispatch(applyFilters({ key: 'stock_gt', value: 0 }));
		} else {
			dispatch(applyFilters({ key: 'stock_gt', value: '' }));
		}
		if (range[0] !== 10 || range[1] !== 1000) {
			dispatch(applyFilters({ key: 'price_btwn', value: `${range[0]}_${range[1]}` }));
		}

		onApply();
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
			onClose();
		}, 500);
	};

	const onClearFilters = () => {
		dispatch(clearFilters());
		setInStock('2');
		setRange([10, 1000]);
		onClear();
		onClose();
	};

	const { getRootProps, getRadioProps } = useRadioGroup({
		name: 'inStock',
		defaultValue: '2',
		onChange: setInStock,
	});

	const group = getRootProps();
	const colors = useColors();

	return (
		<>
			<MButton onClick={onOpen}>Filters</MButton>
			<Modal
				isOpen={isOpen}
				size='xl'
				onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					bg={colors?.bg}
					borderRadius='20px'>
					<ModalHeader
						color={colors?.brand}
						borderBottomWidth={1}
						textAlign='center'
						fontWeight='600'>
						Filters
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody py={4}>
						<Column gap={6}>
							<FilterSection title='Stock Options'>
								<HStack {...group}>
									{stockOptions.map((item, i: number) => {
										const radio = getRadioProps({ item });
										return (
											<RadioCard
												key={i}
												value={item?.value}
												isSelected={inStock === item?.value}
												{...radio}>
												{item?.label}
											</RadioCard>
										);
									})}
								</HStack>
							</FilterSection>
							<FilterSection
								title={`Price Range (${currency.symbol}
									${range[0].toLocaleString()} - ${currency.symbol}
									${range[1].toLocaleString()})`}>
								<RangeSlider
									min={price.min}
									max={price.max}
									colorScheme='black'
									onChange={(e: any) => setRange(e)}
									defaultValue={[10, 1000]}>
									<RangeSliderTrack>
										<RangeSliderFilledTrack bg={colors?.brand} />
									</RangeSliderTrack>
									<RangeSliderThumb
										index={0}
										boxSize={6}
										borderColor={colors?.brand}
									/>
									<RangeSliderThumb
										index={1}
										boxSize={6}
										borderColor={colors?.brand}
									/>
								</RangeSlider>
								<SpaceBetween>
									<RangeInput
										isReadOnly
										title='Min'
										value={price.min}
									/>
									<Spacer />
									<RangeInput
										title='Max'
										name='max'
										value={price.max}
										onChange={onPriceChange}
									/>
								</SpaceBetween>
							</FilterSection>
						</Column>
					</ModalBody>

					<ModalFooter borderTopWidth={1}>
						<SpaceBetween>
							<Button
								fontWeight='600'
								variant='link'
								onClick={onClearFilters}>
								Clear All
							</Button>
							<MButton
								isLoading={isLoading}
								borderRadius='full'
								onClick={onApplyFilters}>
								Apply Filters
							</MButton>
						</SpaceBetween>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

const FilterSection = ({ children, title }: { children: ReactNode; title: string }) => {
	return (
		<Column gap={4}>
			<Heading size='sm'>{title}</Heading>
			{children}
		</Column>
	);
};

const RangeInput = ({ title, ...props }: InputProps & { title: string }) => (
	<Column flex={0}>
		<Heading size='sm'>{title}</Heading>
		<Input
			borderRadius='full'
			w='100px'
			type='number'
			{...props}
		/>
	</Column>
);

export default FilterModal;
