'use client';

import React, { ReactNode, useRef } from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Button,
	Flex,
	Text,
} from '@chakra-ui/react';

import { CartItemProps, CartItem } from '../';
import { Column, SpaceBetween, useColors, useAppSelector, useAuth } from '@/components';

import LoginModal from '@/components/auth/LoginModal';
import Link from 'next/link';

const CartDrawer = ({ children }: { children: ReactNode }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLDivElement>(null);
	const { isLoggedIn } = useAuth();

	const { cartItems, subTotal } = useAppSelector(state => state.cart);

	const { colors } = useColors();

	return (
		<>
			<Flex
				cursor='pointer'
				ref={btnRef}
				onClick={onOpen}>
				{children}
			</Flex>
			<Drawer
				size='md'
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent bg={colors.bg}>
					<DrawerCloseButton />
					<DrawerHeader bg={colors.dark}>Shopping Cart</DrawerHeader>

					<DrawerBody>
						<Column gap={4}>
							{cartItems.map((item: CartItemProps, i: number) => (
								<CartItem
									key={i}
									{...item}
								/>
							))}
						</Column>
					</DrawerBody>

					<DrawerFooter bg='#e2e2e2'>
						<Column gap={4}>
							<SpaceBetween
								fontSize='1.2rem'
								fontWeight='600'>
								<Text>Subtotal</Text>
								<Text>BDT. {subTotal.toLocaleString()}</Text>
							</SpaceBetween>
							{isLoggedIn ? (
								<Link href='/checkout'>
									<Button
										bg='eblack.200'
										borderRadius='lg'
										w='full'>
										Checkout
									</Button>
								</Link>
							) : (
								<LoginModal>
									<Button
										bg='eblack.200'
										borderRadius='lg'
										w='full'>
										Log In to Checkout
									</Button>
								</LoginModal>
							)}
						</Column>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default CartDrawer;
