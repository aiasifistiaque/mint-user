'use client';
import {
	useAppSelector,
	ProductContainer,
	LoadMoreButton,
	ProfileCard,
	ProductPageTitle,
	Section,
} from '@/components';
import { useGetAllQuery } from '@/store/services/commonApi';
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useGetSelfQuery } from '@/store/services/authApi';

const DashPage = () => {
	const [sort, setSort] = React.useState('-createdAt');
	const [page, setPage] = useState(1);
	const { filters } = useAppSelector(state => state.table);

	const { data, isLoading, isFetching, isUninitialized, isError, refetch } = useGetSelfQuery({});

	return (
		<Section p={{ base: 4, md: 6 }}>
			<ProfileCard />
		</Section>
	);
};

export default DashPage;
