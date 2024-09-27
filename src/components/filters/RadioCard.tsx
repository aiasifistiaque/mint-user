import React from 'react';
import { Box, RadioProps } from '@chakra-ui/react';
import { useRadio } from '@chakra-ui/react';

type RadioCardProps = RadioProps & {
	isSelected: boolean;
	children: React.ReactNode;
};

const RadioCard = ({ isSelected, children, ...props }: RadioCardProps) => {
	const { getInputProps, getRadioProps } = useRadio(props);

	const input = getInputProps();
	const checkbox = getRadioProps();

	return (
		<Box as='label'>
			<input {...input} />
			<Box
				{...checkbox}
				cursor='pointer'
				borderWidth='1px'
				borderRadius='full'
				letterSpacing='.5px'
				fontWeight={isSelected ? '600' : 'normal'}
				borderColor={isSelected ? 'black' : '#ebebeb'}
				_checked={{
					borderColor: 'teal.600',
				}}
				_focus={{
					boxShadow: 'outline',
				}}
				px={5}
				py={3}>
				{children}
			</Box>
		</Box>
	);
};

export default RadioCard;
