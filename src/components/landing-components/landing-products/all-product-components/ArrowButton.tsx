'use client';

import React from 'react';
import { IconButton, IconNameOptions } from '../../..';
import { useColors } from '@/components';

const size = { base: '44px', md: '64px' };

const ArrowButton = ({ name, onClick }: { name: IconNameOptions; onClick: () => void }) => {
	const { brand, brandText } = useColors();
	return (
		<IconButton
			onClick={onClick}
			aria-label='Arrow Button'
			w={size}
			h={size}
			borderRadius='full'
			bg={brand}
			transition='all 0.3s ease'
			borderColor={brand}
			borderWidth={1}
			iconColor={brandText}
			_dark={{ iconColor: 'white' }}
			_hover={{
				iconColor: brand,
				bg: brand,
				color: brandText,
				_dark: { color: brand },
			}}
			iconSize={32}
			iconName={name}
		/>
	);
};

export default ArrowButton;
