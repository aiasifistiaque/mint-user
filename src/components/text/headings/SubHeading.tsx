'use client';
import { TextChild } from '../..';
import React, { FC } from 'react';
import { Text } from '@chakra-ui/react';
import { useColors } from '@/components/hooks';

const SubHeading: FC<TextChild> = ({ children, ...props }) => {
	const colors = useColors();
	return (
		<Text
			whiteSpace='pre-line'
			color={colors.secondaryText}
			fontFamily={colors.secondaryFont || 'Poppins'}
			fontSize={{ base: '1.2rem', md: '1.3rem' }}
			{...props}>
			{children}
		</Text>
	);
};

export default SubHeading;
