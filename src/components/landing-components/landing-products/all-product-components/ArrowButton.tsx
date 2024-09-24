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
		borderColor='eblack.200'
		borderWidth={1}
		color='white'
		_dark={{ color: 'white' }}
		_hover={{
			bg: 'white',
			color: 'eblack.200',
			_dark: { color: 'eblack.200' },
		}}
		iconSize={32}
		iconName={name}
	/>
);

export default ArrowButton;
