import { Box, Button, ButtonGroup, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { addToCart, deleteOneFromCart, deleteSingleItemFromCart } from '@/store/slices/cartSlice';
import React from 'react';
import { CartItemProps } from '../';
import { Column, currency, useAppDispatch, useColors } from '@/components';

const CartItem = ({ image, id, name, price, qty }: CartItemProps) => {
	const dispatch = useAppDispatch();
	const colors = useColors();
	const handleRemove = () => {
		dispatch(deleteSingleItemFromCart(id));
	};
	const handleAdd = () => {
		dispatch(
			addToCart({
				item: {
					_id: id,
					name,
					price,
					vat: 0,
					image,
				},
			})
		);
	};
	const handleRemoveOne = () => {
		dispatch(deleteOneFromCart(id));
	};
	return (
		<Flex
			w='full'
			gap={4}>
			<Box
				w='100px'
				h='100px'>
				<Image
					src={image}
					h='full'
					w='full'
					objectFit='cover'
				/>
			</Box>
			<Column>
				<Heading
					size='sm'
					color={colors?.primaryText}>
					{name}
				</Heading>
				<Text color={colors?.secondaryText}>
					{currency?.symbol} {price.toLocaleString()}
				</Text>

				<Box>
					<ButtonGroup
						bg='#efefef'
						borderRadius={4}>
						<Button
							onClick={handleRemoveOne}
							variant='ghost'
							size='md'>
							-
						</Button>
						<Button
							variant='ghost'
							size='md'>
							{qty}
						</Button>
						<Button
							onClick={handleAdd}
							variant='ghost'
							size='md'>
							+
						</Button>
					</ButtonGroup>
				</Box>

				<Box>
					<Button
						onClick={handleRemove}
						size='xs'
						variant='link'
						colorScheme='red'>
						Remove
					</Button>
				</Box>
			</Column>
		</Flex>
	);
};

export default CartItem;
