import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from '@chakra-ui/react';
import { Button, Flex } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { HeaderIcon } from './';
import Link from 'next/link';
import { useColors } from '@/components/hooks';

const HeaderText: React.FC<{ children: string; href: string }> = ({ children, href }) => {
	const colors = useColors();
	return (
		<Link href={href}>
			<Flex
				color={colors?.primaryText}
				py={2}
				fontWeight='500'>
				{children}
			</Flex>
		</Link>
	);
};

const MenuDrawer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	const colors = useColors();

	return (
		<>
			<Flex
				onClick={onOpen}
				cursor='pointer'>
				<HeaderIcon
					name='menu'
					href='#'
				/>
			</Flex>

			<Drawer
				isOpen={isOpen}
				placement='left'
				onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent bg={colors?.brandText}>
					<DrawerCloseButton />
					<DrawerHeader color={colors?.brand}>Menu</DrawerHeader>

					<DrawerBody>
						<HeaderText href='/'>Home</HeaderText>
						<HeaderText href='/category'>Categories</HeaderText>
						<HeaderText href='/explore'>Shop</HeaderText>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default MenuDrawer;
