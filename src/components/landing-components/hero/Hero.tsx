import React, { FC, ReactNode } from 'react';
import { Flex, Box, FlexProps, BoxProps } from '@chakra-ui/react';
import { BgImage, Column, FlexChild, PrimaryButton, SubHeading, Title } from '../..';
import Link from 'next/link';

type HeroProps = {
	image: string;
	title: string;
	subTitle: string;
	href?: string;
	btnText: string;
	titleColor?: string;
	subTitleColor?: string;
	align?: 'center' | 'start' | 'end' | 'left' | 'right';
};

const Hero: FC<HeroProps> = ({
	image,
	title,
	subTitle,
	align,
	btnText,
	titleColor,
	subTitleColor,
}) => {
	return (
		<Container
			src={image}
			justify={align == 'center' ? 'center' : 'flex-start'}>
			<Overlay>
				<ContentBox {...(align == 'center' && { mx: 'auto' })}>
					<Title
						textAlign={align}
						color={titleColor}
						lineHeight={1.2}>
						{title}
					</Title>
					<SubHeading
						textAlign={align}
						color={subTitleColor}>
						{subTitle}
					</SubHeading>
					<Link href='/explore'>
						<CTAButton {...(align == 'center' && { justify: 'center' })}>{btnText}</CTAButton>
					</Link>
				</ContentBox>
			</Overlay>
		</Container>
	);
};

const CTAButton = ({ children, ...props }: FlexProps & { children: ReactNode }) => (
	<Flex
		w='full'
		{...props}>
		<PrimaryButton size='lg'>{children || 'Shop Now'}</PrimaryButton>
	</Flex>
);

const ContentBox = ({ children, ...props }: FlexProps & { children: ReactNode }) => (
	<Column
		justify='center'
		gap={6}
		px={{ base: '16px', md: '64px' }}
		w={{ base: 'full', md: '60%' }}
		{...props}>
		{children}
	</Column>
);

const Container: FC<FlexProps & { src: string; children: ReactNode }> = ({
	src,
	children,
	...props
}) => (
	<BgImage
		h={{ base: '60vh', md: '80vh' }}
		src={src}
		borderRadius='2xl'
		{...props}>
		{children}
	</BgImage>
);

const Overlay: FC<FlexChild> = ({ children }) => (
	<Flex
		flex={1}
		w='full'
		borderRadius='inherit'
		bg='rgba(0,0,0,.1)'>
		{children}
	</Flex>
);

export default Hero;
