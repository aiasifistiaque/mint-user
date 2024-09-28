import { Heading } from '@chakra-ui/react';
import { Column, FlexChild } from '@/components';

import React from 'react';

const DashCard = ({ children, title }: FlexChild & { title: string }) => {
	return (
		<Column
			bg='white'
			p={8}
			gap={6}
			w='full'
			borderWidth={1}
			boxShadow='md'
			borderRadius='xl'>
			<Heading size='lg'>{title}</Heading>
			{children}
		</Column>
	);
};

export default DashCard;
