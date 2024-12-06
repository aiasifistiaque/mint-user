import { useColors } from '@/components/hooks';
import { Link } from '@chakra-ui/react';
import React from 'react';
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

const FooterIcon = ({ name, href }: { name: string; href: string }) => {
	const IconComponent = icons[name] || IoLogoInstagram;
	const colors = useColors();
	return (
		<Link
			href={href}
			isExternal>
			<IconComponent
				size={22}
				color={colors.footerFg}
			/>
		</Link>
	);
};

export default FooterIcon;
