'use client';
import {
	Column,
	Layout,
	Title,
	SubHeading,
	SpaceBetween,
	SortBy,
	FilterModal,
	useAppSelector,
	ProductContainer,
	LoadMoreButton,
	ProductCard,
} from '@/components';
import { useGetAllQuery } from '@/store/services/commonApi';
import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

const CategoryPage = () => {
	const [sort, setSort] = React.useState('-createdAt');
	const [page, setPage] = useState(1);
	const { filters } = useAppSelector(state => state.table);

	const { data, isLoading, isFetching, isUninitialized, isError, refetch } = useGetAllQuery({
		path: 'products',
		sort,
		limit: 16 * page,
		filters,
	});

	const [display, setDisplay] = useState<any[]>([]);

	const loadMore = () => setPage(page + 1);

	const showLoadMoreButton = () => {
		if (!data) return false;
		return data?.totalDocs > data?.doc?.length;
	};

	// useEffect(() => {
	// 	if (!data) return;
	// 	const newArr = [
	// 		...display,
	// 		...data?.doc.filter(
	// 			(newItem: any) => !display.some((existingItem: any) => existingItem.id === newItem.id)
	// 		),
	// 	];
	// 	setDisplay(newArr);
	// }, [isFetching, data, isLoading, refetch]);

	const reset = () => {
		setDisplay([]);
		setPage(1);
	};

	const handleSort = (e: any) => {
		reset();
		setSort(e.target.value);
	};

	const onApplyFilters = () => {
		reset();
		refetch();
	};

	const onClearFilters = () => {
		reset();
		refetch();
	};

	const sortBy = (
		<SortBy
			value={sort}
			onChange={handleSort}
		/>
	);

	const filterBy = (
		<FilterModal
			onApply={onApplyFilters}
			onClear={onClearFilters}
		/>
	);

	return (
		<Layout isLoading={isLoading}>
			<Column
				gap={2}
				p={{ base: 4, md: 6 }}>
				<SpaceBetween>
					<Column>
						<Title type='h3'>Explore Products</Title>
						<SubHeading>{data?.totalDocs || 0} Products Found</SubHeading>
					</Column>

					<Box>{filterBy}</Box>
					<Box>{sortBy}</Box>
				</SpaceBetween>
			</Column>

			<ProductContainer
				notFound={data?.totalDocs === 0}
				isLoading={isLoading || !data}
				isError={isError}>
				{data?.doc?.length > 0 &&
					data?.doc?.map((item: any, i: number) => (
						<ProductCard
							key={i}
							{...item}
						/>
					))}
			</ProductContainer>

			<LoadMoreButton
				show={showLoadMoreButton()}
				onClick={loadMore}
				isLoading={isFetching}
			/>
		</Layout>
	);
};

export default CategoryPage;
