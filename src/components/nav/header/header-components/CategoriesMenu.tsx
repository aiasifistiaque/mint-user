'use client';

import { Menu, MenuButton } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { useGetAllQuery } from '@/store/services/commonApi';
import Link from 'next/link';
import { MenuItem, MenuContainer, useColors } from '@/components';

const CategoriesMenu = ({ children }: { children: ReactNode }) => {
	const colors = useColors();
	const { data } = useGetAllQuery({
		path: 'categories',
		filters: {
			isActive: true,
			displayInMenu: true,
		},
	});
	return (
		<Menu>
			<MenuButton>{children}</MenuButton>
			<MenuContainer>
				<Link href={`/category`}>
					<MenuItem>All Categories</MenuItem>
				</Link>

				{data &&
					data?.doc.map((item: any, i: number) => (
						<Link
							key={i}
							href={`/category/${item?._id}`}>
							<MenuItem>{item?.name}</MenuItem>
						</Link>
					))}
			</MenuContainer>
		</Menu>
	);
};

export default CategoriesMenu;
