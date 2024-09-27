//

import { nav } from 'framer-motion/client';
import { productSwiperBreakpoints } from './swiper/breakpoints';

const navbarHeight = '80px';
const navbarHeightMobile = '60px';

const bannerHeight = '44px';
const bannerHeightMobile = '36px';

export const PLACEHOLDER_IMAGE =
	'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const padding = {
	LAYOUT_X: 4,
	LAYOUT: 4,
	BODY_TOP_BASE: `calc(${navbarHeightMobile} + ${bannerHeightMobile})`,
	BODY_TOP_MD: `calc(${navbarHeight} + ${bannerHeight})`,
};

export const currency = {
	code: 'BDT',
	symbol: '৳',
};

export const sizes = {
	NAVBAR_HEIGHT: navbarHeight,
	NAVBAR_HEIGHT_BASE: navbarHeightMobile,
	BANNER_HEIGHT: bannerHeight,
	BANNER_HEIGHT_BASE: bannerHeightMobile,
	BODY_MIN_HEIGHT: `calc(100vh - ${navbarHeight} - ${bannerHeight})`,
	BODY_MIN_HEIGHT_BASE: `calc(100vh - ${navbarHeightMobile} - ${bannerHeightMobile})`,
	RADIUS: 'xl',
	PRODUCT_CARD_HEIGHT: '400px',
	CATEGORY_CARD_HEIGHT: '300px',
};

export const swiper = {
	BREAKPOINTS: {
		PRODUCT: productSwiperBreakpoints,
	},
};
