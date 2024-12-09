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
	primaryText: string;
	secondaryText: string;
	headerFg: string;
	footerFg: string;
	footerBg: string;
	bannerBg: string;
	bannerFg: string;
	headerBorder: string;
	primaryFont: string;
	secondaryFont: string;
	footerBannerBg: string;
	footerBannerFg: string;
};

const useColors = (): ColorProps => {
	const { data, isLoading } = useGetStoreQuery({});

	const bg = useColorModeValue('white', '#202020');
	const dark = useColorModeValue('#fafafa', 'black');

	const border = useColorModeValue('eborder.600', 'eborder.600');
	const darkBg = useColorModeValue('#202020', 'black');

	const [brand, setBrand] = React.useState<string>('#202020');
	const [brandText, setBrandText] = React.useState<string>('#fff');
	const [primaryText, setPrimaryText] = React.useState<string>('#202020');
	const [secondaryText, setSecondaryText] = React.useState<string>('#777');
	const [bannerBg, setBannerBg] = React.useState<string>('#f8f8f8');
	const [bannerFg, setBannerFg] = React.useState<string>('#000');
	const [headerBg, setHeaderBg] = React.useState<string>('white');
	const [headerFg, setHeaderFg] = React.useState<string>('#222');
	const [headerBorder, setHeaderBorder] = React.useState<string>('eborder.200');
	const [bgColor, setBgColor] = React.useState<string>(bg);

	const [footerBg, setFooterBg] = React.useState<string>('#fff');
	const [footerFg, setFooterFg] = React.useState<string>('#222');

	const [footerBannerBg, setFooterBannerBg] = React.useState<string>('#f8f8f8');
	const [footerBannerFg, setFooterBannerFg] = React.useState<string>('#000');

	//fonts
	const [primaryFont, setPrimaryFont] = React.useState<string>('Playfair Display');
	const [secondaryFont, setSecondaryFont] = React.useState<string>('Inter');

	React.useEffect(() => {
		if (data) {
			setBrand(data?.basic?.brandColor);
			setBrandText(data?.basic?.brandTextColor);
			setPrimaryText(data?.basic?.primaryTextColor);
			setSecondaryText(data?.basic?.secondaryTextColor);
			setBannerBg(data?.content?.banner?.bgColor || data?.basic?.brandColor);
			setBannerFg(data?.content?.banner?.fgColor || data?.basic?.brandTextColor);
			setHeaderBg(data?.basic?.headerBg || data?.basic?.brandColor);
			setHeaderFg(data?.basic?.headerFg || data?.basic?.brandTextColor);
			setHeaderBorder(data?.basic?.headerBorder || 'eborder.200');
			setPrimaryFont(data?.basic?.primaryFont || 'Playfair Display');
			setSecondaryFont(data?.basic?.secondaryFont || 'Inter');
			setBgColor(data?.basic?.bgColor || bg);
			setFooterBg(data?.basic?.footerBg || '#fff');
			setFooterFg(data?.basic?.footerFg || '#222');
			setFooterBannerBg(data?.content?.footerBannerBg || data?.basic?.footerBg || '#f8f8f8');
			setFooterBannerFg(data?.content?.footerBannerFg || data?.basic?.footerFg || '#000');
		}
	}, [isLoading, data]);

	return {
		bg: bgColor,
		dark,
		headerBg,
		border,
		darkBg,
		brand,
		brandText,
		primaryText,
		secondaryText: secondaryText,
		headerFg,
		footerBg,
		footerFg,
		bannerBg,
		bannerFg,
		headerBorder,
		primaryFont,
		secondaryFont,
		footerBannerBg,
		footerBannerFg,
	};
};

export default useColors;
