'use client';
import { ColRow, FlexChild, SubHeading, Title, Column, swiper, Button, useIsMobile } from '../..';
import React, { FC } from 'react';
import { ProductCard, ArrowButton } from '.';
import { Flex, Center } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { productData } from '../../demo-data';

const AllProducts = () => {
	const [swiperRef, setSwiperRef] = React.useState<any>(null);

	const isMobile = useIsMobile();

	const renderCategoryCards = productData.map((item: any, i: number) => (
		<SwiperSlide
			key={i}
			virtualIndex={i}>
			<ProductCard {...item} />
		</SwiperSlide>
	));

	const arrowButtons = (
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
	);

	return (
		<Column py={8}>
			<TopContainer>
				<Column
					gap={4}
					textAlign={{ base: 'center', md: 'left' }}>
					<Title type='h4'>Spotlight Collection</Title>
					<SubHeading>
						Showcase standout pieces with stunning imagery, ideal for highlighting new or featured
						items.
					</SubHeading>
				</Column>
				<Flex display={{ base: 'none', md: 'flex' }}> {arrowButtons}</Flex>
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
			<Center
				pb={8}
				w='full'
				display={{ base: 'flex', md: 'none' }}>
				{arrowButtons}
			</Center>

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
