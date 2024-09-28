import { FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Column, SubHeading, Title } from '@/components';

type ProductPageTitleProps = FlexProps & {
	title: string;
	children?: React.ReactNode;
};

const ProductPageTitle: FC<ProductPageTitleProps> = ({ children, title, ...props }) => {
	return (
		<Column {...props}>
			<Title type='h3'>{title}</Title>
			{children && <SubHeading>{children}</SubHeading>}
		</Column>
	);
};

export default ProductPageTitle;
