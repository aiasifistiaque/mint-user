import { Icon, IconNameOptions } from '../../..';
import { ButtonProps } from '@chakra-ui/react';
import React from 'react';

const HeaderIcon = ({ name, ...props }: { name: IconNameOptions; href?: string }) => {
	return (
		// <Link href={href}>
		<Icon
			name={name}
			size={22}
			color='#676767'
			{...props}
		/>
		// </Link>
	);
};

export default HeaderIcon;
