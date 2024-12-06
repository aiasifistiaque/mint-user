import { FlexChild, Title } from '../../..';
import React, { FC } from 'react';
import { Center, Image } from '@chakra-ui/react';
import Link from 'next/link';

const Logo: FC<FlexChild & { isLoading: boolean; logo: any }> = ({
	children,
	isLoading,
	logo,
	...props
}) => {
	if (isLoading)
		return (
			<Center {...props}>
				<Title
					fontSize='2rem'
					letterSpacing={-0.75}>
					...
				</Title>
			</Center>
		);
	return (
		<Center
			as={Link}
			href='/'
			{...props}>
			<Image
				w='160px'
				h='auto'
				maxH='50px'
				objectFit='contain'
				src={logo}
			/>
		</Center>
	);
};

export default Logo;
