'use client';

import React, { ReactNode, FC } from 'react';
import { useIsMobile } from '../';
import { Grid, StackProps, Tr, TextProps } from '@chakra-ui/react';

type TableRowProps = {
	children: ReactNode;
	actions?: ReactNode;
	selectable?: boolean;
	id: string;
};

const TableRow: FC<TableRowProps> = ({ children, actions, selectable, id, ...props }) => {
	const isMobile = useIsMobile();
	const Container = isMobile ? RowContainerBase : RowContainerMd;

	return <Container {...props}>{children}</Container>;
};

type RowContainerMobileProps = StackProps & {
	children: React.ReactNode;
};

const RowContainerBase: FC<RowContainerMobileProps> = ({ children, ...props }) => {
	return (
		<Grid
			gridTemplateColumns='1fr 1fr'
			position='relative'
			width='100%'
			borderRadius='lg'
			boxShadow='md'
			mb={3}
			bg='white'
			gap={4}
			p={4}
			pb={2}
			_last={{ mb: 12 }}
			// direction='column'
			_dark={{
				bg: 'menu.dark',
			}}
			{...props}>
			{children}
		</Grid>
	);
};

type RowContainerMdProps = TextProps & {
	children: ReactNode;
};

const RowContainerMd: FC<RowContainerMdProps> = ({ children, ...props }) => {
	// const [bg, setBg] = useState('transparent');
	// const handleMouseEnter = () => {
	// 	setBg('#ddd');
	// };
	// const handleMouseLeave = () => {
	// 	setBg('transparent');
	// };
	return (
		<Tr
			h='2.5rem'
			// border='1px solid red'
			// onMouseEnter={handleMouseEnter}
			// onMouseLeave={handleMouseLeave}
			{...props}>
			{children}
		</Tr>
	);
};

export default TableRow;
