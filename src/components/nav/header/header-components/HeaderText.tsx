import React, { FC, ReactNode } from 'react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

const TextStyle = ({ children }: { children: ReactNode }) => (
	<Text
		// mixBlendMode='difference'
		fontSize='.9rem'
		color='black'
		fontWeight='500'
		// _hover={{
		// 	color: 'etext.600',
		// }}
	>
		{children}
	</Text>
);

const HeaderText: FC<{ children: string; href?: string }> = ({ children, href }) => {
	if (!href) return <TextStyle>{children}</TextStyle>;
	return (
		<Link href={href}>
			<TextStyle>{children}</TextStyle>
		</Link>
	);
};

export default HeaderText;
