//

import { nav } from 'framer-motion/client';
import { productSwiperBreakpoints } from './swiper/breakpoints';

const navbarHeight = '80px';
const navbarHeightMobile = '60px';

const bannerHeight = '44px';
const bannerHeightMobile = '36px';

export const PLACEHOLDER_IMAGE =
	process.env.NEXT_PUBLIC_PLACEHOLDER_IMAGE ||
	'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

export const padding = {
	LAYOUT_X: 4,
	LAYOUT: 4,
	BODY_TOP_BASE: `calc(${navbarHeightMobile} + ${bannerHeightMobile})`,
	BODY_WITHOUT_BANNER_BASE: `calc(${navbarHeightMobile})`,
	BODY_WITHOUT_BANNER_MD: `calc(${navbarHeight})`,
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
