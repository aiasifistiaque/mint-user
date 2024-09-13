import React from 'react';

import { HeaderContainer, Logo, HeaderSection, HeaderText, HeaderIcon } from '.';

const headerItems = [
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

const headerIcons: any[] = [
	{
		name: 'search',
		href: '#',
	},
	{
		name: 'cart',
		href: '#',
	},
	{
		name: 'grid',
		href: '#',
	},
];

const Header = () => {
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
				{headerIcons.map((item, i) => (
					<HeaderIcon
						key={i}
						{...item}
					/>
				))}
			</HeaderSection>
		</HeaderContainer>
	);
};

export default Header;
