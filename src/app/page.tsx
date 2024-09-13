import {
	Hero,
	LandingSection,
	Layout,
	AllCategories,
	Discover,
	AllProducts,
	Column,
	About,
} from '@/components';
import React from 'react';

const SRC =
	'https://nexa-clothing.myshopify.com/cdn/shop/files/main-banner-four.png?v=1722417191&width=3840';

const hero = {
	src: SRC,
	title: 'Welcome to Nexa Clothing',
	subTitle:
		'Discover our Premium fitness and yoga gears designed for ultimate performance and comfort',
	btnText: 'Shop Now',
	href: '#',
};

const discoverData = {
	title: 'Discover The True Essence Of Style With Our Exclusive Premium Fashion Collection',
	subTitle: 'Discover your unique style today',
	items: [
		{
			btn: 'Explore',
			href: '#',
			src: 'https://images.pexels.com/photos/28271086/pexels-photo-28271086/free-photo-of-adidas-shoes-buty-sklep-z-butami-retail-store-shoes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		},
		{
			btn: 'About Us',
			href: '#',
			src: 'https://images.pexels.com/photos/2294403/pexels-photo-2294403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		},
	],
};

const page = () => {
	return (
		<Layout>
			<Column gap={16}>
				<LandingSection>
					<Hero {...hero} />
				</LandingSection>
				<Column px={{ base: 0, md: 4 }}>
					<LandingSection>
						<AllCategories />
					</LandingSection>
					<LandingSection>
						<Discover {...discoverData} />
					</LandingSection>
					<LandingSection>
						<AllProducts />
					</LandingSection>
					<LandingSection>
						<AllProducts />
					</LandingSection>
					<LandingSection>
						<AllProducts />
					</LandingSection>
					<LandingSection>
						<About />
					</LandingSection>
				</Column>
			</Column>
		</Layout>
	);
};

export default page;
