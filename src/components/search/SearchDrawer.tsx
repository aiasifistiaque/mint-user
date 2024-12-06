import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Button,
	Input,
	Flex,
	Grid,
} from '@chakra-ui/react';
import React from 'react';
import Flexx from '../containers/flex/Flexx';
import { useGetAllQuery, useGetByIdQuery } from '@/store/services/commonApi';
import { ProductCard } from '../landing-components/landing-products';
import { Text, Title } from '../text';
import { useColors, useContent } from '../hooks';
import { Logo } from '../nav';

export default function SearchDrawer({ children }: { children: React.ReactNode }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	const contents = useContent();
	const colors = useColors();

	const [search, setSearch] = React.useState('');
	const { data, isLoading, isFetching } = useGetAllQuery(
		{
			path: 'products',
			search: search,
		},
		{
			skip: !search || search == '',
		}
	);

	return (
		<>
			<Flex onClick={onOpen}>{children}</Flex>
			<Drawer
				isOpen={isOpen}
				placement='top'
				onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent
					bg={colors?.brandText}
					maxH='90vh'>
					<DrawerCloseButton />
					<DrawerHeader color={colors?.brand}>
						Search For Porducts
						<Flex
							align='center'
							pt={4}
							gap={2}>
							<Input
								bg='white'
								h='64px'
								value={search}
								onChange={e => setSearch(e.target.value)}
								placeholder='Type to search for products...'
								borderRadius={0}
								_active={{
									borderColor: colors?.brand,
								}}
								_focus={{
									borderColor: colors?.brand,
								}}
							/>
						</Flex>
					</DrawerHeader>

					<DrawerBody pb='64px'>
						<Flex
							w='full'
							gap={4}>
							{isFetching ? (
								<CenterContainer>Searching...</CenterContainer>
							) : (
								<>
									{data && data?.totalDocs == 0 && (
										<CenterContainer>No Products Found</CenterContainer>
									)}
									<Grid
										gap={2}
										gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr 1fr' }}>
										{data &&
											data?.totalDocs > 0 &&
											data?.doc?.map((item: any, i: number) => (
												<ProductCard
													w='full'
													key={i}
													{...item}
												/>
											))}
									</Grid>
								</>
							)}
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

const CenterContainer = ({ children }: { children: React.ReactNode }) => (
	<Flex
		w='full'
		px='32px'
		py='64px'
		justify='center'
		align='center'>
		<Title textAlign='center'>{children}</Title>
	</Flex>
);
