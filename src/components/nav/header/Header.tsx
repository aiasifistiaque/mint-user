'use client';

import React from 'react';

import { HeaderContainer, Logo, HeaderSection, HeaderText, HeaderIcon } from './';
import { CartDrawer } from '../../';
import HeaderMenu from './header-components/HeaderMenu';

import { useAppSelector } from '@/components/hooks';
import { Center } from '@chakra-ui/react';
import SearchDrawer from '@/components/search/SearchDrawer';
import CategoriesMenu from './header-components/CategoriesMenu';
import { useGetStoreQuery } from '@/store/services/storeApi';
import MenuDrawer from './MenuDrawer';

type ItemProps = { name: string; href: string };

const Header = () => {
	const { data, isLoading } = useGetStoreQuery({});
	const { cartItems } = useAppSelector(state => state.cart);

	const cartCount = () => {
		return cartItems.reduce((acc: any, item: any) => acc + item.qty, 0);
	};
	return (
		<HeaderContainer>
			<HeaderSection display={{ base: 'none', md: 'flex' }}>
				<HeaderText href='/'>Home</HeaderText>
				<CategoriesMenu>
					<HeaderText>Categories</HeaderText>
				</CategoriesMenu>

				<HeaderText href='/explore'>Shop</HeaderText>
			</HeaderSection>
			<HeaderSection display={{ base: 'flex', md: 'none' }}>
				{/* <HeaderIcon
					name='menu'
					href='#'
				/> */}
				<MenuDrawer />
			</HeaderSection>
			<Logo
				logo={data?.basic?.logo}
				isLoading={isLoading}
			/>
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
						ml={-2}
						color={data?.basic?.brandTextColor}
						borderRadius='full'
						bg={data?.basic?.brandColor}
						h={4}
						fontSize='12px'
						w={4}>
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
