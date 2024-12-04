'use client';

import React, { FC } from 'react';
import { InputProps, FormControl, Stack, Text, Input } from '@chakra-ui/react';
// import { Label, HelperText } from '../../';
// import { Input } from './';
import { useColors } from '@/components';

type InputContainerProps = InputProps & {
	label: string;
	isRequired?: boolean;
	helper?: string;
	value: string | number | undefined;
	placeholder?: any;
};

const VInput: FC<InputContainerProps> = ({
	label,
	isRequired,
	placeholder,
	value,
	helper,
	...props
}) => {
	const { brand } = useColors();
	return (
		<FormControl
			isRequired={isRequired}
			gap={4}>
			<Stack
				spacing={2}
				w='full'>
				<Text
					fontSize='.9rem'
					fontWeight='600'>
					{label}
				</Text>

				<Stack
					spacing={1}
					w='full'>
					<Input
						_focusActive={{
							borderColor: brand,
						}}
						_focus={{
							borderColor: brand,
						}}
						_active={{
							borderColor: brand,
						}}
						outline='none'
						borderRadius='md'
						size='sm'
						px={3}
						placeholder={placeholder ? placeholder : label}
						value={value}
						{...props}
					/>
				</Stack>
			</Stack>
		</FormControl>
	);
};

export default VInput;
