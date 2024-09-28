'use client';
import {
	Column,
	Layout,
	SpaceBetween,
	SortBy,
	FilterModal,
	useAppSelector,
	ProductContainer,
	LoadMoreButton,
	ProductCard,
	ProductPageTitle,
} from '@/components';
import { useGetAllQuery } from '@/store/services/commonApi';
import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';

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
		<Layout isLoading={false}>
			<Column
				gap={2}
				p={{ base: 4, md: 6 }}>
				<SpaceBetween>
					<ProductPageTitle title='Explore Products'>
						{data?.totalDocs || 0} Products Found
					</ProductPageTitle>
					<Flex
						gap={2}
						flexDir={{ base: 'column-reverse', md: 'row' }}>
						<Box>{filterBy}</Box>
						<Box>{sortBy}</Box>
					</Flex>
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
