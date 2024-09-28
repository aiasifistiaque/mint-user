import React, { FC } from 'react';
import { MenuItem as CMenuItem, MenuItemProps } from '@chakra-ui/react';
import Link from 'next/link';

type MenuProps = MenuItemProps & { href?: string; children: React.ReactNode };

const MenuItem: FC<MenuProps> = ({ children, href, ...props }) => {
	const item = (
		<CMenuItem
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
