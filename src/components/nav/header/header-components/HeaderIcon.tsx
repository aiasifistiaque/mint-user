import { Icon, IconNameOptions } from '../../..';
import React from 'react';
import { useColors } from '@/components/hooks';

const HeaderIcon = ({ name, ...props }: { name: IconNameOptions; href?: string }) => {
	const colors = useColors();
	return (
		// <Link href={href}>
		<Icon
			name={name}
			size={22}
			color={colors.headerFg}
			{...props}
		/>
		// </Link>
	);
};

export default HeaderIcon;
