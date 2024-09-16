import { TextChild } from '../..';
import React, { FC } from 'react';
import { Text } from '@chakra-ui/react';

const SubHeading: FC<TextChild> = ({ children, ...props }) => {
	return (
		<Text
			whiteSpace='pre-line'
			color='etext.400'
			fontSize={{ base: '1.2rem', md: '1.3rem' }}
			{...props}>
			{children}
		</Text>
	);
};

export default SubHeading;
