'use client';

import { Column, DashCard, handleString, useColors, useFormData, VInput } from '@/components';
import useCustomToast from '@/components/hooks/useCustomToast';
import { useUpdateSelfMutation } from '@/store/services/authApi';
import { Button, Box } from '@chakra-ui/react';
import React from 'react';

const dataModel = [
	{
		label: 'Old Password',
		name: 'oldPassword',
		placeholder: '*****',
		isRequired: true,
		type: 'password',
	},
	{
		label: 'Password',
		name: 'password',
		placeholder: '*****',
		isRequired: true,
		type: 'password',
	},
	{
		label: 'Confirm Password',
		name: 'confirm',
		placeholder: '*****',
		isRequired: true,
		type: 'password',
	},
];

const UpdatePasswordCard = () => {
	const [formData, setFormData] = useFormData<any>(dataModel);
	const [changedData, setChangedData] = React.useState<any>(null);
	const colors = useColors();
	const handleChange = (e: any) => {
		handleString({ e, formData, setFormData, setChangedData });
	};

	const [trigger, result] = useUpdateSelfMutation();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		trigger(changedData);
	};

	useCustomToast({
		...result,
	});

	return (
		<DashCard title='Change Password'>
			<form onSubmit={handleSubmit}>
				<Column gap={4}>
					{dataModel.map((item: any, index) => (
						<VInput
							isDisabled={item?.isDisabled || false}
							name={item.name}
							key={index}
							onChange={handleChange}
							size='md'
							type='password'
							label={item.label}
							value={formData[item.name]}
							w={{ base: 'full', md: '600px' }}
						/>
					))}

					<Box>
						<Button
							type='submit'
							isLoading={result.isLoading}
							bg={colors?.brand}>
							Update Password
						</Button>
					</Box>
				</Column>
			</form>
		</DashCard>
	);
};

export default UpdatePasswordCard;
