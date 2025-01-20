'use client';

import React, { FC } from 'react';
import { Column, SubHeading, Title, sizes, useGetItemNameById, PLACEHOLDER_IMAGE_2 } from '../../..';
import { Image } from '@chakra-ui/react';
import { useGetAllQuery } from '@/store/services/commonApi';
import Link from 'next/link';

const IMAGE_SIZE = { base: '100%', md: '100%', lg: '100%' };

const CategoryCard: FC<{ id: string; type: string }> = ({ id, type }) => {
	const { name, image } = useGetItemNameById({ id, path: type });
	const { data } = useGetAllQuery({
		path: 'products',
		filters: {
			...(type === 'categories' && { category_in: id }),
			...(type === 'collections' && { collection_in: id }),
		},
	});

	const href = type === 'categories' ? `/category/${id}` : `/category/collection/${id}`;

	return (
		<Link href={href}>
			<Column
				pb={4}
				pt={4}
				userSelect='none'
				w='full'
				gap={4}>
				<Image
					src={image || PLACEHOLDER_IMAGE_2}
					alt='name'
					objectFit='cover'
					width={IMAGE_SIZE}
					height={sizes.CATEGORY_CARD_HEIGHT}
					borderRadius={sizes.RADIUS}
				/>
				<Column>
					<Title type='h6'>{name}</Title>
					<SubHeading fontSize='1.1rem'>{data?.totalDocs || '--'} products</SubHeading>
				</Column>
			</Column>
		</Link>
	);
};

export default CategoryCard;
