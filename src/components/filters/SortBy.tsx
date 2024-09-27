import React from 'react';
import { Select, SelectProps } from '@chakra-ui/react';

const SortBy = ({ ...props }: SelectProps) => {
	return (
		<Select
			placeholder='Sort by'
			{...props}>
			<option value='price'>Price (High-Low)</option>
			<option value='-price'>Price (Low-High)</option>
			<option value='-name'>Name (A-Z)</option>
			<option value='name'>Name (Z-A)</option>
			<option value='-createdAt'>Newest</option>
		</Select>
	);
};

export default SortBy;
