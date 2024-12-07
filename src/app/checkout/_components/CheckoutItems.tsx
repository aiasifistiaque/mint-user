import React from 'react';

import {
	Align,
	CartItemProps,
	Column,
	SpaceBetween,
	currency,
	useAppSelector,
	useColors,
} from '@/components';
import { Button, Grid, Heading, Image, Input, Radio } from '@chakra-ui/react';

const CheckoutItems = () => {
	const { cartItems, subTotal } = useAppSelector(state => state.cart);
	const { brand, brandText, primaryText, secondaryText } = useColors();

	return (
		<Column
			gap={4}
			color={primaryText}>
			<Heading
				size='lg'
				color={primaryText}>
				Order Summary
			</Heading>
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
					gap={2}
					gridTemplateColumns='2fr 1fr 1fr'
					key={i}>
					<Grid
						gridTemplateColumns='1fr 3fr'
						alignItems='center'
						gap={4}>
						<Image
							src={item.image}
							h='64px'
							w='64px'
							objectFit='cover'
						/>
						<Heading
							size='sm'
							color={primaryText}>
							{item.name}
						</Heading>
					</Grid>
					<Align>
						<Heading
							size='sm'
							color={secondaryText}>
							{currency?.symbol} {item.price.toLocaleString()} x {item.qty}
						</Heading>
					</Align>
					<Align>
						<Heading
							size='sm'
							color={secondaryText}>
							{currency?.symbol} {(item.price * item.qty).toLocaleString()}
						</Heading>
					</Align>
				</Grid>
			))}
			<SpaceBetween
				color={primaryText}
				borderTop='1px dashed'
				pt={4}>
				<Heading size='sm'>Shipping</Heading>
				<Heading size='sm'>{currency?.symbol} 0.00</Heading>
			</SpaceBetween>
			<SpaceBetween color={primaryText}>
				<Heading size='sm'>Subtotal</Heading>
				<Heading size='sm'>
					{currency?.symbol} {subTotal.toLocaleString()}
				</Heading>
			</SpaceBetween>
			<Column color={primaryText}>
				<Heading size='sm'>Payment Method</Heading>

				<Align
					gap={4}
					color={brand}>
					<Radio
						color={brand}
						isDisabled>
						Card
					</Radio>
					<Radio
						color={brand}
						isDisabled>
						Bkash
					</Radio>
					<Radio
						color={brand}
						isChecked>
						Cash On Delivery
					</Radio>
				</Align>
			</Column>
			<SpaceBetween>
				<Input
					placeholder='Apply Coupon Code'
					size='sm'
				/>
				<Button
					color={brandText}
					bg={brand}
					size='sm'>
					Apply
				</Button>
			</SpaceBetween>
			<SpaceBetween
				color={primaryText}
				borderTop='1px dashed'
				pt={4}>
				<Heading size='sm'>Total</Heading>
				<Heading size='sm'>
					{currency?.symbol} {subTotal.toLocaleString()}
				</Heading>
			</SpaceBetween>
		</Column>
	);
};

export default CheckoutItems;
