import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { ButtonChild } from '../..';
import { useColors } from '@/components';

const SecondaryButton: FC<ButtonChild> = ({ children, ...props }) => {
	const { brand } = useColors();
	return (
		<Button
			borderWidth={0.5}
			bg='white'
			borderColor={brand}
			color={brand}
			_dark={{ color: 'white', bg: brand, borderColor: 'white' }}
			_hover={{
				borderColor: 'white',
				bg: brand,
				color: 'white',
				_dark: { color: brand, bg: 'white', borderColor: brand },
			}}
			{...props}>
			{children}
		</Button>
	);
};

export default SecondaryButton;
