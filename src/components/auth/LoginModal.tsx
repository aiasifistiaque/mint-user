import React, { ReactNode, useState } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalCloseButton,
	useDisclosure,
	Flex,
	Text,
	Button as CButton,
} from '@chakra-ui/react';

import { Column } from '../containers';
import Login from './Login';
import Register from './Register';
import { useColors } from '../hooks';

const LoginModal = ({
	children,
	authType = 'login',
}: {
	children: ReactNode;
	authType?: 'login' | 'register';
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [type, setType] = useState<'login' | 'register'>(authType);

	const title = type == 'login' ? 'Login' : 'Register';
	const colors = useColors();

	return (
		<>
			<Flex onClick={onOpen}>{children}</Flex>
			<Modal
				isOpen={isOpen}
				onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					bg={colors?.bg}
					borderRadius='xl'
					color={colors?.primaryText}>
					<ModalHeader color={colors?.brand}>{title}</ModalHeader>
					<ModalCloseButton />
					{type == 'login' ? <Login /> : <Register />}
					<ModalFooter>
						<Column gap={2}>
							{type == 'login' ? (
								<>
									<Text textAlign='center'>Don't have an account?</Text>
									<CButton
										color={colors?.brand}
										variant='link'
										onClick={() => setType('register')}>
										Sign Up
									</CButton>
								</>
							) : (
								<>
									<Text textAlign='center'>Aleady Registered?</Text>
									<CButton
										color={colors?.brand}
										variant='link'
										onClick={() => setType('login')}>
										Log In
									</CButton>
								</>
							)}
						</Column>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default LoginModal;
