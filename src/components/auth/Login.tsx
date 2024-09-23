import React from 'react';
import { Column, useAppDispatch } from '@/components';
import { Button } from '@/components/buttons';
import { ModalBody, Input } from '@chakra-ui/react';
import { useLgoinMutation } from '@/store/services/authApi';
import useCustomToast from '../hooks/useCustomToast';
import { login } from '@/store/slices/authSlice';

const Login = () => {
	const [trigger, result] = useLgoinMutation();
	const { data, error, isError, isLoading, isSuccess } = result;
	const [formData, setFormData] = React.useState({
		email: '',
		password: '',
	});
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		trigger(formData);
	};
	useCustomToast({
		isError,
		isSuccess,
		error: error,
		isLoading,
		successText: 'Login successful',
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
					<Button
						type='submit'
						isLoading={isLoading}>
						Login
					</Button>
				</Column>
			</ModalBody>
		</form>
	);
};

export default Login;
