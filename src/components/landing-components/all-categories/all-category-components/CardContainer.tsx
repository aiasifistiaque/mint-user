import { FlexChild } from "../../..";
import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import CategoriesCard from "./CategoryCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";

const swiperBreakpoints = {
  100: {
    slidesPerView: 1,
  },
  320: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 5,
  },
};

type ItemProps = {
  id: string;
  type: string;
};

const CardContainer: FC<FlexChild & { data: ItemProps[] }> = ({ data }) => {
  return (
    <Flex
      py={8}
      h="auto"
      w="full"
      as={Swiper}
      pagination={{
        clickable: true,
      }}
      scrollbar={{ draggable: true }}
      modules={[Pagination]}
      spaceBetween={20}
      breakpoints={swiperBreakpoints}
    >
      {data.map((item: ItemProps, i: number) => (
        <SwiperSlide key={i}>
          <CategoriesCard id={item.id} type={item.type} />
        </SwiperSlide>
      ))}
    </Flex>
  );
};

export default CardContainer;
