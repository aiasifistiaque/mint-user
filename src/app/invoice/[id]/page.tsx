'use client';

import { Layout, Column, currency, Align, SpaceBetween } from '@/components';
import { useGetByIdQuery } from '@/store/services/commonApi';
import { Text, Heading, Grid, Image } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import React from 'react';

const Item = ({ children, title }: { children: React.ReactNode; title: string }) => (
	<Grid
		gridTemplateColumns='1fr 3fr'
		w='500px'>
		<Heading
			size='md'
			fontSize='14px'>
			{title}:
		</Heading>
		<Text fontSize='14px'>{children}</Text>
	</Grid>
);

const Invoice = () => {
	const { id } = useParams();
	const { data } = useGetByIdQuery(
		{
			path: 'orders',
			id: id,
		},
		{ skip: !id }
	);
	return (
		<Layout isLoading={!data}>
			<Column
				gap={4}
				maxW='1000px'
				mx='auto'
				px={{ base: 4, md: 24 }}
				pb={{ base: 4, md: 16 }}
				pt={6}>
				<Heading>Order Details</Heading>
				<Column
					gap={4}
					borderBottom='1px dashed'
					pb={4}>
					<Heading size='md'>Invoice ID: {data?._id}</Heading>
				</Column>
				<Column
					gap={2}
					pb={2}>
					<Item title='Customer'>
						{data?.address?.name} ({data?.address?.email})
					</Item>
					<Item title='Phone'>{data?.address?.phone}</Item>
					<Item title='Order Date'>{data?.orderDate}</Item>
					<Item title='Order Status'>{data?.status}</Item>
				</Column>

				<Grid
					gridTemplateColumns='2fr 1fr 1fr'
					borderBottom='1px dashed'
					borderTop='1px dashed'
					py={4}>
					<Heading size='sm'>Item</Heading>
					<Heading size='sm'>qty</Heading>
					<Heading
						size='sm'
						textAlign='right'>
						Total
					</Heading>
				</Grid>

				{data?.items.map((item: any, i: number) => (
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
							<Text>
								{currency?.symbol} {item.unitPrice} x {item.qty}
							</Text>
						</Align>
						<Align
							w='full'
							justify='flex-end'>
							<Heading
								size='sm'
								textAlign='right'>
								{currency?.symbol} {item?.totalPrice.toLocaleString()}
							</Heading>
						</Align>
					</Grid>
				))}

				<SpaceBetween
					pt={4}
					borderTop='1px dashed'>
					<Heading size='md'>Subtotal</Heading>
					<Heading size='md'>
						{currency?.symbol} {data?.subTotal?.toLocaleString()}
					</Heading>
				</SpaceBetween>

				<SpaceBetween pt={2}>
					<Heading size='md'>VAT</Heading>
					<Heading size='md'>
						{currency?.symbol} {data?.vat?.toLocaleString()}
					</Heading>
				</SpaceBetween>

				<SpaceBetween
					borderTop='1px dashed'
					pt={4}>
					<Heading size='md'>Total</Heading>
					<Heading size='md'>
						{currency?.symbol} {data?.total?.toLocaleString()}
					</Heading>
				</SpaceBetween>
			</Column>
		</Layout>
	);
};

export default Invoice;
