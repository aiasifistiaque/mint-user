'use client';

import React from 'react';

import { HeaderContainer, Logo, HeaderSection, HeaderText, HeaderIcon } from './';
import { CartDrawer, IconNameOptions } from '../../';
import HeaderMenu from './header-components/HeaderMenu';

import { useAppSelector } from '@/components/hooks';
import { Center, Flex } from '@chakra-ui/react';
import SearchDrawer from '@/components/search/SearchDrawer';

type ItemProps = { name: string; href: string };
const headerItems: ItemProps[] = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Categories',
		href: '/categories',
	},
	{
		name: 'Shop',
		href: '/contact',
	},
];

// const headerIcons: {
// 	name: IconNameOptions;
// 	href: string;
// }[] = [
// 	{
// 		name: 'search',
// 		href: '#',
// 	},
// 	{
// 		name: 'cart',
// 		href: '#',
// 	},
// 	{
// 		name: 'grid',
// 		href: '#',
// 	},
// ];

const Header = () => {
	const { cartItems } = useAppSelector(state => state.cart);
	const cartCount = () => {
		return cartItems.reduce((acc: any, item: any) => acc + item.qty, 0);
	};
	return (
		<HeaderContainer>
			<HeaderSection display={{ base: 'none', md: 'flex' }}>
				{headerItems.map((item, i) => (
					<HeaderText
						href={item?.href}
						key={i}>
						{item?.name}
					</HeaderText>
				))}
			</HeaderSection>
			<HeaderSection display={{ base: 'flex', md: 'none' }}>
				<HeaderIcon
					name='menu'
					href='#'
				/>
			</HeaderSection>
			<Logo>MintStore</Logo>
			<HeaderSection
				gap={{ base: 4, md: 8 }}
				justify='flex-end'>
				<SearchDrawer>
					<HeaderIcon
						name='search'
						// href='#'
					/>
				</SearchDrawer>
				<CartDrawer>
					<HeaderIcon name='cart' />
					<Center
						ml='-8px'
						color='white'
						borderRadius='full'
						bg='black'
						h='16px'
						fontSize='12px'
						w='16px'>
						{cartCount()}
					</Center>
				</CartDrawer>

				<HeaderMenu>
					<HeaderIcon
						name='grid'
						// href='#'
					/>
				</HeaderMenu>
			</HeaderSection>
		</HeaderContainer>
	);
};

export default Header;
