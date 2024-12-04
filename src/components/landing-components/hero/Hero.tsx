import React, { FC, ReactNode } from 'react';
import { Flex, Box } from '@chakra-ui/react';
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
};

const Hero: FC<HeroProps> = ({
	image,
	title,
	subTitle,
	//	href,
	btnText,
	titleColor,
	subTitleColor,
}) => {
	return (
		<Container src={image}>
			<Overlay>
				<ContentBox>
					<Title
						color={titleColor}
						lineHeight={1.2}>
						{title}
					</Title>
					<SubHeading color={subTitleColor}>{subTitle}</SubHeading>
					<Link href='/explore'>
						<CTAButton>{btnText}</CTAButton>
					</Link>
				</ContentBox>
			</Overlay>
		</Container>
	);
};

const CTAButton = ({ children }: { children: ReactNode }) => (
	<Box>
		<PrimaryButton size='lg'>{children || 'Shop Now'}</PrimaryButton>
	</Box>
);

const ContentBox = ({ children }: { children: ReactNode }) => (
	<Column
		justify='center'
		gap={6}
		px={{ base: '16px', md: '64px' }}
		w={{ base: 'full', md: '60%' }}>
		{children}
	</Column>
);

const Container: FC<{ src: string; children: ReactNode }> = ({ src, children }) => (
	<BgImage
		h={{ base: '60vh', md: '80vh' }}
		src={src}
		borderRadius='2xl'>
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
