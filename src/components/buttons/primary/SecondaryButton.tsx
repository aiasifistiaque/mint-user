import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { ButtonChild } from '../..';
import { useColors } from '@/components';

const SecondaryButton: FC<ButtonChild> = ({ children, ...props }) => {
	const { brand, brandText } = useColors();
	return (
		<Button
			borderWidth={0.5}
			bg={brandText}
			borderColor={brand}
			color={brand}
			_dark={{ color: brandText, bg: brand, borderColor: brandText }}
			_hover={{
				borderColor: brandText,
				bg: brand,
				color: brandText,
				_dark: { color: brand, bg: brandText, borderColor: brand },
			}}
			{...props}>
			{children}
		</Button>
	);
};

export default SecondaryButton;
