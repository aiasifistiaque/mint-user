'use client';
import { Column, Layout, useAppDispatch, useAppSelector, useColors } from '@/components';
import VInput from '@/components/buttons/primary/VInput';
import VTextarea from '@/components/buttons/primary/VTextArea';
import { useGetSelfQuery } from '@/store/services/authApi';
import { Button, Grid, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CheckoutItems from './_components/CheckoutItems';
import { usePostMutation } from '@/store/services/commonApi';
import { resetCart } from '@/store/slices/cartSlice';
import useCustomToast from '@/components/hooks/useCustomToast';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
	const [address, setAddress] = useState<any>({
		name: '',
		email: '',
		phone: '',
		street: '',
		city: '',
		postalCode: '',
	});

	const { cartItems } = useAppSelector(state => state.cart);
	const [trigger, result] = usePostMutation();
	const [triggerCart, resultCart] = usePostMutation();
	const dispatch = useAppDispatch();

	const { data, isLoading } = useGetSelfQuery({});
	const { brand, brandText } = useColors();

	const onChange = (e: React.ChangeEvent<any>) => {
		setAddress({
			...address,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = () => {
		const body = {
			address,
			cart: resultCart.data,
			isPaid: false,
			paymentMethod: 'cash on delivery',
			paymentAmount: 0,
			status: 'pending',
		};
		trigger({ path: 'orders', body });
	};

	useEffect(() => {
		if (!data) return;
		setAddress({
			name: data.name,
			email: data.email,
			phone: data.phone,
		});
	}, [data, isLoading]);

	const router = useRouter();

	useEffect(() => {
		if (result.isSuccess) {
			dispatch(resetCart());
			router.push(`/invoice/${result.data.order._id}`);
		}
	}, [result]);

	useEffect(() => {
		triggerCart({
			body: { items: cartItems, discount: 0, shipping: 0 },
			path: 'orders/cart-total',
		});
	}, [cartItems]);

	const isDisabled =
		!address.name ||
		!address.email ||
		!address.phone ||
		!address.street ||
		!address.city ||
		!address.postalCode;

	useCustomToast({
		isError: result.isError,
		isSuccess: result.isSuccess,
		error: result.error,
		isLoading: result.isLoading,
		successText: 'Order placed successfully',
		successTitle: 'Success',
	});

	return (
		<Layout>
			<Grid
				gap={{ base: 4, md: 12 }}
				gridTemplateColumns={{ base: '1fr', md: '3fr 2fr' }}
				p={{ base: 4, md: 6 }}>
				<Column gap={4}>
					<Heading size='lg'>Address</Heading>
					<Column gap={4}>
						<VInput
							name='name'
							label='Recipient Name'
							value={address.name}
							onChange={onChange}
						/>
						<Grid
							gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
							gap={4}>
							<VInput
								name='email'
								label='Recipient Email'
								value={address.email}
								onChange={onChange}
							/>
							<VInput
								name='phone'
								label='Recipient Phone'
								value={address.phone}
								onChange={onChange}
							/>
						</Grid>

						<VTextarea
							name='street'
							label='Full Address'
							value={address.street}
							onChange={onChange}
						/>
						<Grid
							gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
							gap={4}>
							<VInput
								name='city'
								label='City'
								value={address.city}
								onChange={onChange}
							/>
							<VInput
								name='postalCode'
								label='Postal Code'
								value={address.postalCode}
								onChange={onChange}
							/>
						</Grid>
					</Column>
				</Column>
				<Column>
					<CheckoutItems />
					<Button
						bg={brand}
						border={`1px solid ${brand}`}
						color={brandText}
						_hover={{ bg: brandText, color: brand }}
						isLoading={result.isLoading}
						isDisabled={isDisabled}
						onClick={onSubmit}>
						Confirm Order
					</Button>
				</Column>
			</Grid>
		</Layout>
	);
};

export default CheckoutPage;
