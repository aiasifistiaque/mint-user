import React, { FC } from 'react';
import { Center, Grid, Text } from '@chakra-ui/react';
import { FlexChild, GridChild, ProductSkeleton } from '@/components';

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
			<Container>
				{Array.from({ length: 12 }).map((_, index: number) => (
					<ProductSkeleton key={index} />
				))}
			</Container>
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

	return <Container>{children}</Container>;
};

const Container = ({ children, ...props }: GridChild) => (
	<Grid
		px={{ base: 4, md: 6 }}
		pb={4}
		gap={4}
		gridTemplateColumns={{
			base: '1fr',
			md: '1fr 1fr 1fr',
			lg: '1fr 1fr 1fr 1fr',
		}}
		{...props}>
		{children}
	</Grid>
);

export default ProductContainer;
