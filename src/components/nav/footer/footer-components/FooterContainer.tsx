import React from 'react';
import { Center } from '@chakra-ui/react';
import { FC } from 'react';
import { FlexChild, useColors } from '../../..';

const FooterContainer: FC<FlexChild> = ({ children }) => {
	const colors = useColors();
	return (
		<Center
			bg={colors.footerBg}
			flex={1}
			flexDir='column'
			w='100%'>
			{children}
		</Center>
	);
};

export default FooterContainer;
