import React from 'react';
import { Column, useAppDispatch } from '@/components';
import { Button } from '@/components/buttons';
import { ModalBody, Input } from '@chakra-ui/react';
import { useRegisterMutation } from '@/store/services/authApi';
import useCustomToast from '../hooks/useCustomToast';
import { login } from '@/store/slices/authSlice';

const Login = () => {
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		password: '',
		confirm: '',
	});
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const [trigger, result] = useRegisterMutation();
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		trigger(formData);
	};
	const { data, error, isError, isLoading, isSuccess } = result;
	useCustomToast({
		isError,
		isSuccess,
		error: error,
		isLoading,
		successText: 'Registration successful',
		successTitle: 'Success',
	});
	const dispatch = useAppDispatch();
	React.useEffect(() => {
		if (result.isSuccess) {
			dispatch(login(result.data));
		}
	}, [isLoading]);
	return (
		<form onSubmit={handleSubmit}>
			<ModalBody>
				<Column gap={4}>
					<Input
						placeholder='Full Name'
						name='name'
						value={formData?.name}
						onChange={onChange}
					/>
					<Input
						placeholder='Email'
						name='email'
						value={formData?.email}
						onChange={onChange}
					/>
					<Input
						placeholder='Password'
						name='password'
						type='password'
						value={formData?.password}
						onChange={onChange}
					/>
					<Input
						placeholder='Confirm Password'
						name='confirm'
						type='password'
						value={formData?.confirm}
						onChange={onChange}
					/>
					<Button
						type='submit'
						isLoading={isLoading}>
						Register
					</Button>
				</Column>
			</ModalBody>
		</form>
	);
};

export default Login;
