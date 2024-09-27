import { ButtonProps, Text, Center } from '@chakra-ui/react';
import React from 'react';
import { Button } from '@/components';

type LoadMoreButtonProps = ButtonProps & {
	children?: React.ReactNode;
	title?: string;
	btnText?: string;
	show: boolean;
};

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
	children,
	title,
	btnText,
	show,
	...props
}) => {
	if (!show) return null;
	return (
		<Center
			px={{ base: 4, md: 6 }}
			gap={4}
			fontWeight='600'
			pb={12}
			flexDir='column'
			w='full'>
			<Text>{title || 'Continue Exploring Products'}</Text>
			<Button {...props}>{btnText || 'Load More'}</Button>
		</Center>
	);
};

export default LoadMoreButton;
