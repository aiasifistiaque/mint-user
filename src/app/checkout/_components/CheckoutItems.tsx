import React from 'react';
import { useAppSelector } from '@/components/hooks';
import { Align, CartItemProps, Column, SpaceBetween } from '@/components';
import { Button, Grid, Heading, Image, Input, Radio } from '@chakra-ui/react';

const CheckoutItems = () => {
	const { cartItems, subTotal } = useAppSelector(state => state.cart);

	return (
		<Column gap={4}>
			<Heading size='lg'>Order Summary</Heading>
			<Grid
				gridTemplateColumns='2fr 1fr 1fr'
				borderBottom='1px dashed'
				pb={4}>
				<Heading size='sm'>Item</Heading>
				<Heading size='sm'>qty</Heading>
				<Heading size='sm'>Total</Heading>
			</Grid>

			{cartItems.map((item: CartItemProps, i: number) => (
				<Grid
					gridTemplateColumns='2fr 1fr 1fr'
					key={i}>
					<Align gap={4}>
						<Image
							src={item.image}
							h='64px'
							w='64px'
							objectFit='cover'
						/>
						<Heading size='sm'>{item.name}</Heading>
					</Align>
					<Align>
						<Heading size='sm'>
							BDT. {item.price.toLocaleString()} x {item.qty}
						</Heading>
					</Align>
					<Align>
						<Heading size='sm'>BDT. {(item.price * item.qty).toLocaleString()}</Heading>
					</Align>
				</Grid>
			))}
			<SpaceBetween
				borderTop='1px dashed'
				pt={4}>
				<Heading size='sm'>Shipping</Heading>
				<Heading size='sm'>BDT. 0.00</Heading>
			</SpaceBetween>
			<SpaceBetween>
				<Heading size='sm'>Subtotal</Heading>
				<Heading size='sm'>BDT. {subTotal.toLocaleString()}</Heading>
			</SpaceBetween>
			<Column>
				<Heading size='sm'>Payment Method</Heading>

				<Align gap={4}>
					<Radio isDisabled>Card</Radio>
					<Radio isDisabled>Bkash</Radio>
					<Radio isChecked>Cash On Delivery</Radio>
				</Align>
			</Column>
			<SpaceBetween>
				<Input
					placeholder='Apply Coupon Code'
					size='sm'
				/>
				<Button size='sm'>Apply</Button>
			</SpaceBetween>
			<SpaceBetween
				borderTop='1px dashed'
				pt={4}>
				<Heading size='sm'>Total</Heading>
				<Heading size='sm'>BDT. {subTotal.toLocaleString()}</Heading>
			</SpaceBetween>
		</Column>
	);
};

export default CheckoutItems;
