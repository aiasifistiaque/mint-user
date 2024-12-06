import React, { FC, use } from 'react';
import { Link, Text } from '@chakra-ui/react';
import { useColors } from '@/components/hooks';

const FooterText: FC<{ children: string; href: string }> = ({ children, href }) => {
	const colors = useColors();
	return (
		<Link href={href}>
			<Text
				fontSize='.9rem'
				color={colors.footerFg}>
				{children}
			</Text>
		</Link>
	);
};

export default FooterText;
