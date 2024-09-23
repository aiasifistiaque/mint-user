'use client';

import { Layout, Column } from '@/components';
import { useGetByIdQuery } from '@/store/services/commonApi';
import { Text, Heading, Grid, Image } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import React from 'react';
import { Align, SpaceBetween } from '@/components/containers';

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
				p={{ base: 4, md: 16 }}>
				<Heading>Order Details</Heading>
				<Column
					gap={4}
					borderBottom='1px dashed'
					pb={4}>
					<Heading size='md'>Invouce ID: {data?._id}</Heading>
				</Column>
				<Column
					gap={4}
					pb={4}>
					<Heading size='md'>Delivery Address</Heading>
					<Text>
						{data?.address?.name}, {data?.address?.street}, {data?.address?.city}, ,{' '}
						{data?.address?.zip}
					</Text>
				</Column>

				<Grid
					gridTemplateColumns='2fr 1fr 1fr'
					borderBottom='1px dashed'
					borderTop='1px dashed'
					py={4}>
					<Heading size='sm'>Item</Heading>
					<Heading size='sm'>qty</Heading>
					<Heading size='sm'>Total</Heading>
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
							<Heading size='sm'>
								BDT. {item.unitPrice} x {item.qty}
							</Heading>
						</Align>
						<Align>
							<Heading size='sm'>BDT. {item?.totalPrice.toLocaleString()}</Heading>
						</Align>
					</Grid>
				))}

				<SpaceBetween
					borderTop='1px dashed'
					pt={4}>
					<Heading size='md'>Subtotal</Heading>
					<Heading size='md'>BDT. {data?.subTotal}</Heading>
				</SpaceBetween>

				<SpaceBetween
					borderTop='1px dashed'
					pt={4}>
					<Heading size='md'>Total</Heading>
					<Heading size='md'>BDT. {data?.subTotal}</Heading>
				</SpaceBetween>
			</Column>
		</Layout>
	);
};

export default Invoice;
