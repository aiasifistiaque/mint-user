'use client';

import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { ButtonChild } from '../..';
import { useColors } from '@/components';

const PrimaryButton: FC<ButtonChild> = ({ children, ...props }) => {
	const { brand, brandText, secondaryFont } = useColors();
	return (
		<Button
			fontFamily={secondaryFont}
			bg={brand}
			borderColor={brand}
			color={brandText}
			borderWidth={1}
			// _dark={{ color: 'eblack.200', bg: 'white' }}
			_hover={{
				bg: brandText,
				color: brand,
			}}
			{...props}>
			{children}
		</Button>
	);
};

export default PrimaryButton;
