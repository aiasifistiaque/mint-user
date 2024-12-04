import { Align, padding, sizes, useColors } from '@/components';
import { Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';

import { Link } from '@chakra-ui/react';

import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoTwitter } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';

const icons: { [key: string]: React.ElementType } = {
	instagram: IoLogoInstagram,
	facebook: IoLogoFacebook,
	twitter: IoLogoTwitter,
	linkedin: IoLogoLinkedin,
	youtube: IoLogoYoutube,
};

const bannerIcons = [
	{
		name: 'instagram',
		href: 'https://www.instagram.com/',
	},
	{
		name: 'linkedin',
		href: 'https://www.linkedin.com/',
	},
	{
		name: 'facebook',
		href: 'https://www.facebook.com/',
	},
	{
		name: 'twitter',
		href: 'https://twitter.com/',
	},

	{
		name: 'youtube',
		href: 'https://www.youtube.com/',
	},
];

const BannerIcon = ({ name, href }: { name: string; href: string }) => {
	const IconComponent = icons[name] || IoLogoInstagram;
	const { brandText } = useColors();
	return (
		<Link
			href={href}
			isExternal>
			<IconComponent
				size={20}
				color={brandText}
			/>
		</Link>
	);
};

const Banner = () => {
	const { darkBg, brand, brandText } = useColors();
	return (
		<Grid
			gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
			px={padding.LAYOUT_X}
			bg={brand}
			h={{ base: sizes.BANNER_HEIGHT_BASE, md: sizes.BANNER_HEIGHT }}>
			<Flex
				align='center'
				gap={4}
				display={{ base: 'none', md: 'flex' }}>
				{bannerIcons.map((icon, idx) => (
					<BannerIcon
						key={idx}
						{...icon}
					/>
				))}
			</Flex>
			<Align
				h={{ base: sizes.BANNER_HEIGHT_BASE, md: sizes.BANNER_HEIGHT }}
				justify='center'
				flex={1}>
				<Text
					textAlign='center'
					letterSpacing='2px'
					color={brandText}
					fontSize='.8rem'>
					Free Shipping from Tk.2000
				</Text>
			</Align>

			<Align justify='flex-end'>
				<Text
					textAlign='right'
					display={{ base: 'none', md: 'flex' }}
					letterSpacing='2px'
					color={brandText}
					fontSize='.8rem'>
					Call Us: +880 1828 398 225
				</Text>
			</Align>
		</Grid>
	);
};

export default Banner;
