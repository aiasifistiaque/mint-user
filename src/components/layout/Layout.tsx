import { Center, Flex, FlexProps, Spinner } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Header, Body, Footer } from '..';
import { ColorMode } from '@/components';

type LayoutProps = FlexProps & {
	children: React.ReactNode;
	isLoading?: boolean;
};

const Layout: FC<LayoutProps> = ({ children, isLoading, ...props }) => {
	return (
		<Flex
			flexDir='column'
			minH='100vh'
			w='100%'
			flex={1}
			{...props}>
			<Header />
			<Body>
				{isLoading ? (
					<Center
						w='full'
						flex={1}
						h='100%'>
						<Spinner />
					</Center>
				) : (
					children
				)}
			</Body>
			<Footer />
			<ColorMode />
		</Flex>
	);
};

export default Layout;
