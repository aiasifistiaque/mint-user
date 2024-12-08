'use client';

import { FlexChild, padding } from '../..';
import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';

const LandingSection: FC<FlexChild & { applyPadding?: string }> = ({
	children,
	applyPadding = 'apply',
	...props
}) => {
	return (
		<Flex
			p={applyPadding == 'apply' ? padding.LAYOUT : 0}
			{...props}>
			{children}
		</Flex>
	);
};

export default LandingSection;
