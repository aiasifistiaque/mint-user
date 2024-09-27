import React, { FC } from 'react';
import { Center, Grid, Spinner, Text } from '@chakra-ui/react';
import { FlexChild } from '@/components';

type ProductContainerProps = FlexChild & {
	isError: boolean;
	isLoading: boolean;
	notFound: boolean;
};

const ProductContainer: FC<ProductContainerProps> = ({
	children,
	isLoading,
	isError,
	notFound,
}) => {
	if (isLoading) {
		return (
			<Center
				w='full'
				h='60vh'>
				<Spinner />
			</Center>
		);
	}
	if (isError) {
		return (
			<Center>
				<Text textAlign='center'>Error Loading Products</Text>
			</Center>
		);
	}
	if (notFound) {
		return (
			<Center>
				<Text textAlign='center'>No Products Found</Text>
			</Center>
		);
	}
	return (
		<Grid
			px={{ base: 4, md: 6 }}
			pb={4}
			gap={4}
			gridTemplateColumns={{
				base: '1fr',
				md: '1fr 1fr 1fr',
				lg: '1fr 1fr 1fr 1fr',
			}}>
			{children}
		</Grid>
	);
};

export default ProductContainer;
