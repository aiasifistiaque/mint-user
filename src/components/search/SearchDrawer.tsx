import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Button,
	Input,
	Flex,
} from '@chakra-ui/react';
import React from 'react';
import Flexx from '../containers/flex/Flexx';
import { useGetAllQuery, useGetByIdQuery } from '@/store/services/commonApi';
import { ProductCard } from '../landing-components/landing-products';
import { Text } from '../text';

export default function SearchDrawer({ children }: { children: React.ReactNode }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	const [search, setSearch] = React.useState('');
	const { data, isLoading, isFetching } = useGetAllQuery(
		{
			path: 'products',
			search: search,
		},
		{
			skip: !search || search == '',
		}
	);

	return (
		<>
			<Flex onClick={onOpen}>{children}</Flex>
			<Drawer
				isOpen={isOpen}
				placement='top'
				onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent
					bg='white'
					maxH='80vh'>
					<DrawerCloseButton />
					<DrawerHeader>
						<Input
							value={search}
							onChange={e => setSearch(e.target.value)}
							placeholder='Search for products'
							borderRadius='full'
						/>
					</DrawerHeader>

					<DrawerBody>
						<Flex
							w='full'
							gap={4}
							flexWrap='wrap'>
							{isFetching && <Text textAlign='center'>Searching</Text>}
							{!isFetching && (
								<>
									{data && data?.totalDocs == 0 && (
										<Text textAlign='center'>No Products Found</Text>
									)}
									{data &&
										data?.totalDocs > 0 &&
										data?.doc?.map((item: any, i: number) => (
											<ProductCard
												w='200px'
												key={i}
												{...item}
											/>
										))}
								</>
							)}
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
