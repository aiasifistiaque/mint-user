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
import { CategoryCard } from '@/components/landing-components/all-categories';

const CategoryPage = () => {
	const { id } = useParams<{ id: string }>();
	const [sort, setSort] = React.useState('-createdAt');

	const { data, isFetching, isUninitialized, isError } = useGetAllQuery(
		{
			path: 'categories',
			sort,
			filters: {
				isActive: true,
			},
		},
		{ skip: !id }
	);

	const { data: colData } = useGetAllQuery(
		{
			path: 'collections',
			sort,
			filters: {
				isActive: true,
			},
		},
		{ skip: !id }
	);

	return (
		<Layout
			p={{ base: 4, md: 6 }}
			isLoading={isFetching || !data}>
			<Column gap={2}>
				<SpaceBetween>
					<Column>
						<Title type='h3'>All Categories</Title>
						<SubHeading>Explore Our Categories</SubHeading>
					</Column>
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
						{data?.totalDocs === 0 && <Center>No categories found</Center>}
						{data?.doc?.map((item: any, i: number) => (
							<CategoryCard
								key={i}
								type='categories'
								id={item._id}
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
