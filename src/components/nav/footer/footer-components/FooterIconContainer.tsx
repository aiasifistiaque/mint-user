import React from 'react';
import { Center } from '@chakra-ui/react';
import { FC } from 'react';
import { FlexChild, padding, useColors } from '../../..';

const FooterIconContainer: FC<FlexChild> = ({ children }) => {
	const colors = useColors();
	return (
		<Center
			bg={colors.footerBg}
			w='full'
			px={padding.LAYOUT_X}
			py={6}
			gap={6}>
			{children}
		</Center>
	);
};

export default FooterIconContainer;
