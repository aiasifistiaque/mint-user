import React, { ReactNode } from 'react';
import { IconButton as IButton, IconButtonProps, Tooltip } from '@chakra-ui/react';
import { Icon, IconNameOptions } from '..';

const IconButton = ({
	// color,
	iconName,
	iconColor,
	iconSize,
	tooltip,
	...props
}: IconButtonProps & {
	iconName: IconNameOptions;
	color?: string | undefined;
	iconSize?: number;
	tooltip?: string;
	iconColor?: string;
}) => {
	const Container = ({ children }: { children: ReactNode }) => {
		if (tooltip)
			return (
				<Tooltip
					label={tooltip}
					aria-label={tooltip}>
					{children}
				</Tooltip>
			);
		return <>{children}</>;
	};
	return (
		<Container>
			<IButton
				icon={
					<Icon
						name={iconName}
						color={iconColor || 'inherit'}
						size={iconSize}
					/>
				}
				{...props}
			/>
		</Container>
	);
};

export default IconButton;
