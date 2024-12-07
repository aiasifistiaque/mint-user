import { Center, Flex, FlexProps, Spinner } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Header, Body, Footer, Banner } from '..';
import { ColorMode, useColors } from '@/components';

type LayoutProps = FlexProps & {
	children: React.ReactNode;
	isLoading?: boolean;
};

const Layout: FC<LayoutProps> = ({ children, isLoading, ...props }) => {
	const { secondaryFont, bg } = useColors();
	return (
		<Flex
			bg={bg}
			fontFamily={secondaryFont}
			flexDir='column'
			minH='100vh'
			w='100%'
			flex={1}
			{...props}>
			<Flex
				flexDir='column'
				position='fixed'
				top={0}
				left={0}
				zIndex='999'
				w='full'>
				<Banner />
				<Header />
			</Flex>

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
			{/* <ColorMode /> */}
		</Flex>
	);
};

export default Layout;
