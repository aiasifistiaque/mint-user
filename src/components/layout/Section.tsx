import { Flex } from '@chakra-ui/react';
import React from 'react';
import { FlexChild } from '@/components';

const Section = ({ children, ...props }: FlexChild) => {
	return (
		<Flex
			w='full'
			flexDir='column'
			px={4}
			py={2}
			{...props}>
			{children}
		</Flex>
	);
};

export default Section;
