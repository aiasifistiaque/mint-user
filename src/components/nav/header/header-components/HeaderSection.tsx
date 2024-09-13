import { Align, FlexChild, padding } from '../../..';
import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

const HeaderSection: FC<FlexChild> = ({ children, ...props }) => {
	return (
		<Align
			w='100%'
			gap={6}
			{...props}>
			{children}
		</Align>
	);
};

export default HeaderSection;
