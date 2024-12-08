'use client';

import { FlexChild, padding } from '../../..';
import React, { FC } from 'react';
import { Center, Text } from '@chakra-ui/react';
import { useColors } from '@/components';

const FooterTag: FC<FlexChild> = ({ children, ...props }) => {
	const { brand, brandText } = useColors();
	return (
		<Center
			w='full'
			bg={brand}
			flex={1}
			p={padding.LAYOUT_X}
			py={2}
			{...props}>
			<Text
				letterSpacing='2px'
				color={brandText}>
				{children}
			</Text>
		</Center>
	);
};

export default FooterTag;
