'use client';
import { useColorModeValue } from '@chakra-ui/react';
import { useGetStoreQuery } from '@/store/services/storeApi';
import React from 'react';

export type ColorProps = {
	bg: string;
	dark: string;
	headerBg: string;
	border: string;
	darkBg: string;
	brand: string;
	brandText: string;
};

const useColors = (): ColorProps => {
	const { data, isLoading } = useGetStoreQuery({});

	const bg = useColorModeValue('white', '#202020');
	const dark = useColorModeValue('#fafafa', 'black');

	const headerBg = useColorModeValue('white', 'eblack.200');
	const border = useColorModeValue('eborder.600', 'eborder.600');
	const darkBg = useColorModeValue('#202020', 'black');

	const [brand, setBrand] = React.useState<string>('#202020');
	const [brandText, setBrandText] = React.useState<string>('#fff');

	React.useEffect(() => {
		if (data) {
			setBrand(data?.basic?.brandColor);
			setBrandText(data?.basic?.brandTextColor);
		}
	}, [isLoading, data]);

	return {
		bg,
		dark,
		headerBg,
		border,
		darkBg,
		brand,
		brandText,
	};
};

export default useColors;
