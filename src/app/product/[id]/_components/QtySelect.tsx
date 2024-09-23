import React from 'react';
import { Box, Button, ButtonGroup } from '@chakra-ui/react';

const QtySelect = ({
	children,
	handleRemoveOne,
	handleAdd,
}: {
	children: React.ReactNode;
	handleRemoveOne: () => void;
	handleAdd: () => void;
}) => (
	<Box>
		<ButtonGroup
			bg='#efefef'
			_dark={{ bg: 'black' }}
			borderRadius={4}>
			<Button
				onClick={handleRemoveOne}
				variant='ghost'
				size='lg'>
				-
			</Button>
			<Button
				variant='ghost'
				size='lg'>
				{children}
			</Button>
			<Button
				onClick={handleAdd}
				variant='ghost'
				size='lg'>
				+
			</Button>
		</ButtonGroup>
	</Box>
);

export default QtySelect;
