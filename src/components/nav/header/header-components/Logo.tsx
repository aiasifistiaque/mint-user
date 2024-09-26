import { FlexChild, Title } from '../../..';
import React, { FC } from 'react';
import { Center, Image } from '@chakra-ui/react';

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
		<Center {...props}>
			<Image
				w='100px'
				h='auto'
				objectFit='contain'
				src={logo}
			/>
		</Center>
	);
};

export default Logo;
