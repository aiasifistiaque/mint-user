'use client';

import React from 'react';
import { IconButton, IconNameOptions } from '../../..';
// import { IconButtonProps } from '@chakra-ui/react';
import { useColors } from '@/components';

const size = { base: '44px', md: '64px' };

const ArrowButton = ({ name, onClick }: { name: IconNameOptions; onClick: () => void }) => {
	const { brand } = useColors();
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
			iconColor='white'
			_dark={{ iconColor: 'white' }}
			_hover={{
				iconColor: brand,
				bg: 'white',
				color: brand,
				_dark: { color: brand },
			}}
			iconSize={32}
			iconName={name}
		/>
	);
};

export default ArrowButton;
