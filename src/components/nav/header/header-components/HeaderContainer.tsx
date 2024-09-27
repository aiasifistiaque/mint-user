import { GridChild, padding, sizes, useColors } from '../../..';
import { Grid } from '@chakra-ui/react';
import React, { FC } from 'react';

const HeaderContainer: FC<GridChild> = ({ children, ...props }) => {
	const colors = useColors();
	return (
		<Grid
			zIndex='999'
			bg={colors.headerBg}
			// position='fixed'
			// left={0}
			// top={0}
			px={padding.LAYOUT_X}
			alignItems='center'
			w='100%'
			gridTemplateColumns='1fr 1fr 1fr'
			borderBottom='1px solid'
			borderBottomColor={colors.border}
			h={{ base: sizes.NAVBAR_HEIGHT_BASE, md: sizes.NAVBAR_HEIGHT }}
			{...props}>
			{children}
		</Grid>
	);
};

export default HeaderContainer;
