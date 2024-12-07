import React from 'react';
import { MenuList, MenuListProps } from '@chakra-ui/react';
import { useColors } from '@/components';

type MenuContainerProps = MenuListProps & {
	children: React.ReactNode;
};

const MenuContainer: React.FC<MenuContainerProps> = ({ children, ...props }) => {
	const colors = useColors();
	return (
		<MenuList
			p={4}
			bg={colors?.bg}
			boxShadow='lg'
			borderRadius='2xl'
			_dark={{
				bg: 'eblack.200',
			}}
			{...props}>
			{children}
		</MenuList>
	);
};

export default MenuContainer;
