import { FlexChild, sizes, Column, padding, useContent, useColors } from '../..';
import React, { FC } from 'react';

const Body: FC<FlexChild> = ({ children, ...props }) => {
	const { content } = useContent();
	const colors = useColors();
	return (
		<Column
			bg={colors?.bg}
			// pt={{
			// 	base: content?.banner?.hide ? padding.BODY_WITHOUT_BANNER_BASE : padding.BODY_TOP_BASE,
			// 	md: content?.banner?.hide ? padding.BODY_WITHOUT_BANNER_MD : padding.BODY_TOP_MD,
			// }}
			minH={sizes.BODY_MIN_HEIGHT}
			{...props}>
			{children}
		</Column>
	);
};

export default Body;
