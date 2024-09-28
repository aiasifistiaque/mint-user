'use client';

import React, { FC, ReactNode } from 'react';
import {
	Column,
	SubHeading,
	Title,
	sizes,
	Text,
	BgImage,
	Button,
	ButtonChild,
	PLACEHOLDER_IMAGE,
	useAppDispatch,
	FlexChild,
	currency,
} from '../../..';
import { addToCart } from '@/store/slices/cartSlice';
import { useRouter } from 'next/navigation';
import { useToast, FlexProps } from '@chakra-ui/react';

// const IMAGE_SIZE = { base: '100%', md: '100%', lg: '100%' };

type ProductCardProps = FlexProps & {
	_id: string;
	name: string;
	price: number | string;
	image: string;
	stock?: number;
	category: {
		name: string;
	};
};

const ProductCard: FC<ProductCardProps> = ({
	_id,
	name,
	price,
	image,
	category,
	stock = 0,
	...props
}) => {
	const dispatch = useAppDispatch();
	const toast = useToast();
	const router = useRouter();
	const handleAddToCart = (e: React.MouseEvent<any>) => {
		e.stopPropagation();
		dispatch(addToCart({ item: { _id, name, price, vat: 0, image, category } }));
		toast({
			title: `1 ${name} added to bag`,
			status: 'success',
			duration: 2000,
			isClosable: true,
			variant: 'subtle',
		});
	};
	const toProductPage = () => {
		// navigate to product page
		router.push(`/product/${_id}`);
	};
	return (
		<Container
			onClick={toProductPage}
			{...props}>
			<CardImage src={image || PLACEHOLDER_IMAGE}>
				{stock > 0 ? (
					<AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
				) : (
					<AddToCartButton isDisabled>Out Of Stock</AddToCartButton>
				)}
			</CardImage>
			<Column>
				<Text fontSize='1.2rem'>
					{currency?.symbol} {price?.toLocaleString()}
				</Text>
				<Title type='h6'>{name}</Title>
				<SubHeading
					fontSize='1.1rem'
					fontWeight='600'
					textTransform='uppercase'>
					{category?.name}
				</SubHeading>
			</Column>
		</Container>
	);
};

const Container = ({ children, ...props }: FlexChild) => (
	<Column
		cursor='pointer'
		pb={8}
		pt={4}
		userSelect='none'
		w='full'
		gap={4}
		{...props}>
		{children}
	</Column>
);

const CardImage = ({ src, children }: { src: string; children: ReactNode }) => (
	<BgImage
		src={src}
		minH={sizes.PRODUCT_CARD_HEIGHT}
		maxH={sizes.PRODUCT_CARD_HEIGHT}
		p='16px'
		align='flex-end'
		justify='center'
		borderRadius={sizes.RADIUS}>
		{children}
	</BgImage>
);

const AddToCartButton: FC<ButtonChild> = ({ children, ...props }) => (
	<Button
		fontSize='13px'
		fontWeight='800'
		borderRadius='lg'
		textTransform='uppercase'
		w='full'
		variant='secondary'
		{...props}>
		{children}
	</Button>
);

export default ProductCard;
