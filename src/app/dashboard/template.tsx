'use client';
import { Layout, Section, Column } from '@/components';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';

const Item = ({ children, href }: { children: ReactNode; href: string }) => {
	return (
		<Flex
			as={Link}
			href={href}
			py={2}
			bg='white'
			cursor='pointer'
			transition='.2s'
			_hover={{ bg: 'black', color: 'white' }}
			px={3}>
			<Text
				fontWeight='600'
				fontSize='.9rem'
				color='inherit'>
				{children}
			</Text>
		</Flex>
	);
};

const DashPage = ({ children }: { children: ReactNode }) => {
	return (
		<Layout isLoading={false}>
			<Flex
				w='full'
				flexDir={{
					base: 'column',
					md: 'row',
				}}>
				<Column
					flexDir={{ base: 'row', md: 'column' }}
					gap={0}
					bg='white'
					w='300px'>
					<Item href='/dashboard/my-profile'>Profile</Item>
					<Item href='/dashboard/my-orders'>Orders</Item>
					<Item href='/dashboard/update-password'>Update Password</Item>
				</Column>
				<Flex
					w='full'
					bg='whitesmoke'
					flex={1}>
					{children}
				</Flex>
			</Flex>
		</Layout>
	);
};

export default DashPage;
