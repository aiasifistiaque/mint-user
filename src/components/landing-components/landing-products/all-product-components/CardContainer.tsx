import { FlexChild } from '../../..';
import React, { FC } from 'react';
import Card from './ProductCard';

// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CardContainer: FC<FlexChild & { data: [] }> = ({ data }) => {
	return (
		<
			// as={Swiper}
			// pagination={{
			// 	clickable: true,
			// }}
			// scrollbar={{ draggable: true }}
			// modules={[Pagination]}
			// spaceBetween={20}
			// breakpoints={swiperBreakpoints}
		>
			{data.map(
				(
					item: {
						id: number;
						name: string;
						price: string;
						src: string;
						category: {
							name: string;
						};
					},
					i: number
				) => (
					<SwiperSlide key={i}>
						<Card {...item} />
					</SwiperSlide>
				)
			)}
		</>
	);
};

export default CardContainer;
