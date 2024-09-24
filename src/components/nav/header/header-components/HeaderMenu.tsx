'use client';

import { Menu, MenuButton } from '@chakra-ui/react';
import { useAuth } from '@/components/hooks/useAuth';

import React, { ReactNode } from 'react';
import LoginModal from '@/components/auth/LoginModal';
import { useAppDispatch } from '@/components/hooks';
import { logout } from '@/store/slices/authSlice';
import { useGetSelfQuery } from '@/store/services/authApi';
import { MenuItem, MenuContainer } from '@/components';

const HeaderMenu = ({ children }: { children: ReactNode }) => {
	const { isLoggedIn } = useAuth();
	const dispatch = useAppDispatch();
	const onLogout = () => {
		dispatch(logout());
	};
	const { data } = useGetSelfQuery({});
	return (
		<Menu>
			<MenuButton>{children}</MenuButton>
			<MenuContainer>
				{isLoggedIn ? (
					<>
						<MenuItem>{data && data?.name}</MenuItem>
						<MenuItem onClick={onLogout}>Logout</MenuItem>
					</>
				) : (
					<>
						<LoginModal authType='login'>
							<MenuItem>Login</MenuItem>
						</LoginModal>
						<LoginModal authType='register'>
							<MenuItem>Register</MenuItem>
						</LoginModal>
					</>
				)}
			</MenuContainer>
		</Menu>
	);
};

export default HeaderMenu;
