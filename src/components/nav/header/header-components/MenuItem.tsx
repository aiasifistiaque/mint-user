import React from 'react';
import { MenuItem as CMenuItem, MenuItemProps } from '@chakra-ui/react';

const MenuItem = ({ children, ...props }: MenuItemProps & { children: React.ReactNode }) => {
	return (
		<CMenuItem
			_dark={{
				bg: 'eblack.200',
			}}
			{...props}>
			{children}
		</CMenuItem>
	);
};

export default MenuItem;
