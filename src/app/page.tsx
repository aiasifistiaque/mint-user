'use client';

import {
	Hero,
	LandingSection,
	Layout,
	AllCategories,
	Discover,
	AllProducts,
	Column,
	About,
	sortByPriority,
	FeaturedCollections,
} from '@/components';
import { useGetStoreQuery } from '@/store/services/storeApi';
import { Center, Spinner } from '@chakra-ui/react';
import React from 'react';

type ProductProp = {
	title: string;
	subTitle: string;
	type: string;
	id: string;
};

const ProductList = ({ data }: { data: ProductProp[] }) => {
	const list = sortByPriority(data as []);

	return list?.map((item: ProductProp, i: number) => (
		<LandingSection key={i}>
			<AllProducts
				title={item?.title}
				subTitle={item?.subTitle}
				type={item?.type}
				id={item?.id}
			/>
		</LandingSection>
	));
};

const HomePage = () => {
	const { data, isLoading } = useGetStoreQuery({});

	if (isLoading)
		return (
			<Center
				flex={1}
				h='100vh'>
				<Spinner size='lg' />
			</Center>
		);

	return (
		<Layout>
			<Column gap={16}>
				<LandingSection>
					<Hero {...data?.content?.hero} />
				</LandingSection>
				<Column px={{ base: 0, md: 4 }}>
					<LandingSection>
						<AllCategories {...data?.content?.collections} />
					</LandingSection>
					<LandingSection>
						<Discover {...data?.content?.discover} />
					</LandingSection>
					{/* {data?.content?.productList?.map((item: any, i: number) => (
						<LandingSection key={i}>
							<AllProducts data={ } />
						</LandingSection>
					))} */}
					<ProductList data={data?.content?.productList || []} />

					<LandingSection>
						<About {...data?.content?.about} />
					</LandingSection>
					<LandingSection>
						<FeaturedCollections items={data?.content?.featuredCollection} />
					</LandingSection>
				</Column>
			</Column>
		</Layout>
	);
};

export default HomePage;
