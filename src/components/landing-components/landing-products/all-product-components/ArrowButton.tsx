import React from 'react';
import { IconButton, IconNameOptions } from '../../..';
// import { IconButtonProps } from '@chakra-ui/react';

const size = { base: '44px', md: '64px' };

const ArrowButton = ({ name, onClick }: { name: IconNameOptions; onClick: () => void }) => (
	<IconButton
		onClick={onClick}
		aria-label='Arrow Button'
		w={size}
		h={size}
		borderRadius='full'
		bg='eblack.200'
		transition='all 0.3s ease'
		borderColor='eblack.200'
		borderWidth={1}
		iconColor='white'
		_dark={{ iconColor: 'white' }}
		_hover={{
			iconColor: 'eblack.200',
			bg: 'white',
			color: 'eblack.200',
			_dark: { color: 'eblack.200' },
		}}
		iconSize={32}
		iconName={name}
	/>
);

export default ArrowButton;
