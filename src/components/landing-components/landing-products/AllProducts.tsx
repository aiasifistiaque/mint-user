'use client';
import { ColRow, FlexChild, SubHeading, Title, Column, swiper, Button } from '../../';
import React, { FC } from 'react';
import { ProductCard, ArrowButton } from './';
import { Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { productData } from '../../demo-data';
import { useGetAllQuery } from '@/store/services/commonApi';

type ProductCardProps = {
	name: string;
	price: number | string;
	image: string;
	category: {
		name: string;
	};
};

type AllProductCardProps = {
	title: string;
	subTitle: string;
	type: string;
	id: string;
};

const AllProducts: FC<AllProductCardProps> = ({ title, subTitle, type, id }) => {
	const [swiperRef, setSwiperRef] = React.useState<SwiperType | null>(null);

	const { data, isFetching } = useGetAllQuery({
		path: 'products',
		filters: {
			...(type == 'category' && { category_in: id }),
			...(type == 'collection' && { collection_in: id }),
			limit: 10,
			sort: 'priority',
		},
	});

	const renderCategoryCards =
		!isFetching &&
		data?.doc?.map((item: ProductCardProps, i: number) => (
			<SwiperSlide
				key={i}
				virtualIndex={i}>
				<ProductCard {...item} />
			</SwiperSlide>
		));

	return (
		<Column py={8}>
			<TopContainer>
				<Column
					gap={4}
					textAlign={{ base: 'center', md: 'left' }}>
					<Title type='h4'>{title}</Title>
					<SubHeading>{subTitle}</SubHeading>
				</Column>
				<Flex gap={3}>
					<ArrowButton
						name='arrow-left'
						onClick={() => swiperRef?.slidePrev()}
					/>

					<ArrowButton
						name='arrow-right'
						onClick={() => swiperRef?.slideNext()}
					/>
				</Flex>
			</TopContainer>
			<Flex
				onSwiper={setSwiperRef}
				w='full'
				as={Swiper}
				pagination={{
					clickable: true,
				}}
				scrollbar={{ draggable: true }}
				spaceBetween={20}
				breakpoints={swiper.BREAKPOINTS.PRODUCT}>
				{renderCategoryCards}
			</Flex>
			<Button variant='secondary'>View More</Button>
		</Column>
	);
};

const TopContainer: FC<FlexChild> = ({ children }) => (
	<ColRow
		gap={6}
		justify='center'
		align='center'>
		{children}
	</ColRow>
);

export default AllProducts;
