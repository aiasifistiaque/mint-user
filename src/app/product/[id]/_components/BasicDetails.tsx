import React from 'react';
import { SubHeading, Title, Column } from '@/components';

const BasicDetails = ({
	name,
	category,
	price,
}: {
	name: string;
	category: string;
	price: string | number;
}) => (
	<Column
		py={4}
		gap={4}
		borderBottom='1px solid'
		borderBottomColor='eborder.600'>
		<Title
			fontWeight='500'
			type='h6'>
			BDT. {price.toLocaleString()}
		</Title>
		<Title
			type='h3'
			fontSize='2.5rem'>
			{name}
		</Title>
		<SubHeading
			fontSize='1.1rem'
			textTransform='uppercase'>
			{category}
		</SubHeading>
	</Column>
);

export default BasicDetails;
