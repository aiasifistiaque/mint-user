import React from 'react';
import { ButtonProps } from '@chakra-ui/react';
import { IconButton } from '../../..';

const size = { base: '44px', md: '64px' };

const ArrowButton = ({ name, ...props }: any) => (
	<IconButton
		w={size}
		h={size}
		borderRadius='full'
		bg='eblack.200'
		borderColor='eblack.200'
		borderWidth={1}
		_dark={{ color: 'white' }}
		_hover={{
			bg: 'white',
			color: 'eblack.200',
			_dark: { color: 'eblack.200' },
		}}
		iconSize={32}
		iconName={name}
		aria-label={name}
		{...props}
	/>
);

export default ArrowButton;
