import React, { FC } from 'react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

const HeaderText: FC<{ children: string; href: string }> = ({ children, href }) => {
	return (
		<Link href={href}>
			<Text
				fontSize='1rem'
				color='etext.400'
				fontWeight='600'
				_hover={{
					color: 'etext.600',
				}}>
				{children}
			</Text>
		</Link>
	);
};

export default HeaderText;
