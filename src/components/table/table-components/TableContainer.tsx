import React, { ReactNode } from 'react';
import { TableContainer as ChakraTableContainer, Flex } from '@chakra-ui/react';
import { useIsMobile, TABLE_THEME } from '../';

const style = {
	w: '100%',
	borderRadius: TABLE_THEME.border.radius,
	borderWidth: TABLE_THEME.border.width,
	bg: 'white',
	pb: TABLE_THEME.padding.bottom,
	borderColor: TABLE_THEME.border.color.light,
	_dark: {
		bg: TABLE_THEME.bg.dark,
		borderColor: TABLE_THEME.border.color.dark,
	},
};

const TableContainer = ({ children }: { children: ReactNode }) => {
	const isMobile = useIsMobile();

	const Container = isMobile ? Flex : ChakraTableContainer;

	return <Container sx={style}>{children}</Container>;
};

export default TableContainer;
