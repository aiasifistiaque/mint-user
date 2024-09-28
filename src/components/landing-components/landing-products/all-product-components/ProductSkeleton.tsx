'use client';

import React, { FC } from 'react';
import { Column, sizes, Text, FlexChild, currency } from '../../..';
import { Skeleton } from '@chakra-ui/react';

// const IMAGE_SIZE = { base: '100%', md: '100%', lg: '100%' };

const ProductSkeleton: FC<{}> = () => {
	return (
		<Container>
			<CardImage />
			<Column gap={2}>
				<Skeleton
					isLoaded={false}
					borderRadius='full'
					w='200px'>
					<Text fontSize='1.2rem'>{currency?.symbol} 200</Text>
				</Skeleton>
			</Column>
		</Container>
	);
};

const Container = ({ children, ...props }: FlexChild) => (
	<Column
		cursor='pointer'
		pb={4}
		pt={0}
		userSelect='none'
		w='full'
		gap={4}
		{...props}>
		{children}
	</Column>
);

const CardImage = () => (
	<Skeleton
		minH={sizes.PRODUCT_CARD_HEIGHT}
		maxH={sizes.PRODUCT_CARD_HEIGHT}
		borderRadius={sizes.RADIUS}
	/>
);

export default ProductSkeleton;
