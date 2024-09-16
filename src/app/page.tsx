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
} from '@/components';
import { useGetStoreQuery } from '@/store/services/storeApi';
import { Center, Spinner } from '@chakra-ui/react';
import React from 'react';

// const hero = {
// 	image:
// 		'https://nexa-clothing.myshopify.com/cdn/shop/files/main-banner-four.png?v=1722417191&width=3840',
// 	title: 'Welcome to Nexa Clothing',
// 	subTitle:
// 		'Discover our Premium fitness and yoga gears designed for ultimate performance and comfort',
// 	btnText: 'Shop Now',
// 	href: '#',
// };

// const discoverData = {
// 	title: 'Discover The True Essence Of Style With Our Exclusive Premium Fashion Collection',
// 	subTitle: 'Discover your unique style today',
// 	items: [
// 		{
// 			btn: 'Explore',
// 			href: '#',
// 			src: 'https://images.pexels.com/photos/28271086/pexels-photo-28271086/free-photo-of-adidas-shoes-buty-sklep-z-butami-retail-store-shoes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// 		},
// 		{
// 			btn: 'About Us',
// 			href: '#',
// 			src: 'https://images.pexels.com/photos/2294403/pexels-photo-2294403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// 		},
// 	],
// };

type ProductProp = {
	title: string;
	subTitle: string;
	type: string;
	id: string;
};

const ProductList = ({ data }: { data: ProductProp[] }) => {
	const list = sortByPriority(data);

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
				</Column>
			</Column>
		</Layout>
	);
};

export default HomePage;
