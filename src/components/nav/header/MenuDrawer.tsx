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

const HeaderText: React.FC<{ children: string; href: string }> = ({ children, href }) => {
	return (
		<Link href={href}>
			<Flex
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
				<DrawerContent bg='white'>
					<DrawerCloseButton />
					<DrawerHeader>Menu</DrawerHeader>

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
