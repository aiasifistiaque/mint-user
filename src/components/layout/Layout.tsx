import { Center, Flex, FlexProps, Spinner, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Header, Body, Footer, Banner } from '..';
import { ColorMode, useColors } from '@/components';
import { useScroll } from 'framer-motion';

type LayoutProps = FlexProps & {
	children: React.ReactNode;
	isLoading?: boolean;
};

const Layout: FC<LayoutProps> = ({ children, isLoading, ...props }) => {
	return (
		<>
			<Banner />
			<Header />

			<Body minH={'80vh'}>
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
				<Footer />
			</Body>
		</>
	);
};

export default Layout;
