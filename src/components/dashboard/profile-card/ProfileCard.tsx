'use client';

import { Column, DashCard, handleString, useFormData, VInput } from '@/components';
import useCustomToast from '@/components/hooks/useCustomToast';
import { useGetSelfQuery, useUpdateSelfMutation } from '@/store/services/authApi';
import { Button, Box } from '@chakra-ui/react';
import React from 'react';

const dataModel = [
	{
		label: 'Full Name',
		name: 'name',
		placeholder: 'Enter Name',
		isRequired: true,
	},
	{
		name: 'email',
		label: 'Email',
		placeholder: 'Enter Email',
		isRequired: true,
		isDisabled: true,
	},
	{
		name: 'phone',
		label: 'Phone',
		placeholder: 'Enter Phone',
	},
];

const ProfileCard = () => {
	const { data, isFetching } = useGetSelfQuery({});
	const [formData, setFormData] = useFormData<any>(dataModel, data);
	const [changedData, setChangedData] = React.useState<any>(null);
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
		<DashCard title='Profile'>
			<Column gap={4}>
				{dataModel.map((item: any, index) => (
					<VInput
						isDisabled={item?.isDisabled || false}
						name={item.name}
						key={index}
						onChange={handleChange}
						size='md'
						label={item.label}
						value={formData[item.name]}
						w={{ base: 'full', md: '600px' }}
					/>
				))}

				<Box>
					<Button
						onClick={handleSubmit}
						isLoading={result.isLoading}
						bg='black'>
						Update Info
					</Button>
				</Box>
			</Column>
		</DashCard>
	);
};

export default ProfileCard;
