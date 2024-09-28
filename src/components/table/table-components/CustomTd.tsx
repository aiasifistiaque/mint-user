import React, { FC, Fragment } from 'react';
import { Td, Image, Text, Flex } from '@chakra-ui/react';

import { useIsMobile, Column, PLACEHOLDER_IMAGE } from '../';

const PADDING_Y = 1;
const PADDING_X = 4;

const MobileRow = ({ children }: any) => {
	return <Flex>{children}</Flex>;
};

const CustomTd: FC<any> = ({ children, src, type, ...props }) => {
	const isMobile = useIsMobile();
	const letters = src ? 15 : 20;
	const text =
		typeof children === 'string' && !isMobile
			? children.slice(0, letters) + (children.length > letters ? '...' : '')
			: children;

	const Container = isMobile ? Flex : Td;

	const TextContainer = isMobile ? Text : Fragment;

	return (
		<Container
			// borderBottom='1px solid red'
			_dark={{
				borderColor: 'stroke.deepD',
			}}
			gap={{ base: 4, md: 0 }}
			wordBreak='break-word'
			fontSize={isMobile && type == 'image-text' ? '1.2rem' : isMobile ? '1rem' : '.82rem'}
			py={PADDING_Y}
			px={{ base: 0, md: PADDING_X }}
			fontWeight='500'
			{...props}>
			{type == 'image-text' && (
				<Image
					bg='#ebebeb'
					_dark={{
						bg: '#2d2d2d',
					}}
					mr={{ base: 2, md: 0 }}
					objectFit='contain'
					h={{ base: '50px', md: '40px' }}
					w={{ base: '50px', md: '40px' }}
					src={src || PLACEHOLDER_IMAGE}
					alt='img'
				/>
			)}
			<TextContainer>{text || <i>--</i>}</TextContainer>
		</Container>
	);
};

export default CustomTd;
