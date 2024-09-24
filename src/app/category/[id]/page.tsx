'use client';
import {
	Column,
	Layout,
	Align,
	Button,
	AllProducts,
	Title,
	SubHeading,
	SpaceBetween,
} from '@/components';
import { useGetAllQuery, useGetByIdQuery } from '@/store/services/commonApi';
import { useParams } from 'next/navigation';
import React, { ReactNode } from 'react';
import { Box, Center, Grid, Select, Spinner } from '@chakra-ui/react';
import { ProductCard } from '@/components/landing-components/landing-products';

const CategoryPage = () => {
	const { id } = useParams<{ id: string }>();
	const [sort, setSort] = React.useState('-createdAt');

	const { data: catData, isFetching: catFetching } = useGetByIdQuery(
		{
			path: 'categories',
			id: id,
		},
		{ skip: !id }
	);

	const { data, isFetching, isUninitialized, isError } = useGetAllQuery(
		{
			path: 'products',
			sort,
			filters: {
				category_in: id,
			},
		},
		{ skip: !id }
	);

	return (
		<Layout
			p={{ base: 4, md: 6 }}
			isLoading={catFetching}>
			<Column gap={2}>
				<SpaceBetween>
					<Column>
						<Title type='h3'>{catData?.name}</Title>
						<SubHeading>
							{catData?.description || `Explore products from category ${catData?.name}`}
						</SubHeading>
					</Column>

					<Box>
						<Select
							value='sort'
							placeholder='Sort by'
							onChange={e => {
								setSort(e.target.value);
							}}>
							<option value='-price'>Price (High-Low)</option>
							<option value='price'>Price (Low-High)</option>
							<option value='name'>Name (A-Z)</option>
							<option value='-name'>Price (Z-A)</option>
							<option value='-createdAt'>Newest</option>
						</Select>
					</Box>
				</SpaceBetween>
			</Column>

			<Grid
				pb={32}
				gap={4}
				gridTemplateColumns={{
					base: '1fr',
					md: '1fr 1fr 1fr 1fr',
					lg: '1fr 1fr 1fr 1fr 1fr',
				}}>
				{isFetching || !data ? (
					<Center>
						<Spinner />
					</Center>
				) : (
					<>
						{data?.totalDocs === 0 && <Center>No products found</Center>}
						{data?.doc?.map((item: any, i: number) => (
							<ProductCard
								key={i}
								{...item}
							/>
						))}
					</>
				)}
			</Grid>
		</Layout>
	);
};

const TopGrid = ({ children }: { children: ReactNode }) => (
	<Grid
		pb={16}
		borderBottom='1px solid'
		borderBottomColor='eborder.600'
		gap={8}
		gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}>
		{children}
	</Grid>
);

export default CategoryPage;