import React, { FC } from 'react';
import { MenuItem as CMenuItem, MenuItemProps } from '@chakra-ui/react';
import Link from 'next/link';
import { useColors } from '@/components';

type MenuProps = MenuItemProps & { href?: string; children: React.ReactNode };

const MenuItem: FC<MenuProps> = ({ children, href, ...props }) => {
	const colors = useColors();

	const item = (
		<CMenuItem
			px={4}
			bg={colors?.bg}
			borderRadius='xl'
			_hover={{
				bg: colors?.brand,
				color: colors?.brandText,
			}}
			color={colors?.primaryText}
			_dark={{
				bg: 'eblack.200',
			}}
			{...props}>
			{children}
		</CMenuItem>
	);
	return href ? <Link href={href}>{item}</Link> : item;
};

export default MenuItem;
