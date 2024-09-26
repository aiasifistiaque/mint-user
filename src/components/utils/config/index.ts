//

import { productSwiperBreakpoints } from './swiper/breakpoints';

const navbarHeight = '92px';
const navbarHeightMobile = '60px';

export const PLACEHOLDER_IMAGE =
	'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const padding = {
	LAYOUT_X: 4,
	LAYOUT: 4,
};

export const sizes = {
	NAVBAR_HEIGHT: navbarHeight,
	NAVBAR_HEIGHT_BASE: navbarHeightMobile,
	BODY_MIN_HEIGHT: `calc(100vh - ${navbarHeight})`,
	BODY_MIN_HEIGHT_BASE: `calc(100vh - ${navbarHeightMobile})`,
	RADIUS: 'xl',
	PRODUCT_CARD_HEIGHT: '360px',
	CATEGORY_CARD_HEIGHT: '300px',
};

export const swiper = {
	BREAKPOINTS: {
		PRODUCT: productSwiperBreakpoints,
	},
};
