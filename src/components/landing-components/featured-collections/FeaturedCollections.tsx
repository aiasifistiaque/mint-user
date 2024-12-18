import { BgImage, Column, SubHeading, Title, Button, sizes, IconButton, useColors } from '../..';
import React, { FC } from 'react';
import { Grid, Text, Flex, Spacer } from '@chakra-ui/react';
import { ArrowButton } from '../landing-products';

type ItemProps = {
	image: string;
	title: string;
	subTitle: string;
};

const DiscoverItem: FC<ItemProps> = ({ image, title, subTitle }) => {
	const colors = useColors();
	return (
		<BgImage
			src={image}
			h='580px'
			w='full'
			p='32px'
			justify='center'
			borderRadius={sizes.RADIUS}>
			<Column gap={8}>
				<Column gap={4}>
					<Title
						type='h5'
						color={colors?.brandText}>
						{title}
					</Title>
					<SubHeading color={colors?.brandText}>{subTitle}</SubHeading>
				</Column>
				<Spacer />
				<Flex justify='flex-end'>
					<IconButton
						aria-label='Arrow Button'
						w='58px'
						h='58px'
						borderRadius='full'
						bg={colors?.brandText}
						borderColor={colors?.brand}
						borderWidth={1}
						iconColor='black'
						_dark={{ iconColor: 'black' }}
						_hover={{
							bg: colors?.brandText,
							color: colors?.brand,
							_dark: { color: 'eblack.200' },
						}}
						iconSize={24}
						iconName='arrow-right'
					/>
				</Flex>
			</Column>
		</BgImage>
	);
};

const FeaturedCollections: FC<{ items: ItemProps[] }> = ({ items }) => {
	const renderItems = items?.map((item: ItemProps, i: number) => (
		<DiscoverItem
			{...item}
			key={i}
		/>
	));
	return (
		<Column gap={16}>
			<Grid
				gap={6}
				gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}>
				{renderItems}
			</Grid>
		</Column>
	);
};

export default FeaturedCollections;
