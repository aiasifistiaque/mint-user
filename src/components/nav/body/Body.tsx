import { FlexChild, sizes, Column, padding } from '../..';
import React, { FC } from 'react';

const Body: FC<FlexChild> = ({ children, ...props }) => {
	return (
		<Column
			pt={{
				base: padding.BODY_TOP_BASE,
				md: padding.BODY_TOP_MD,
			}}
			minH={sizes.BODY_MIN_HEIGHT}
			{...props}>
			{children}
		</Column>
	);
};

export default Body;
