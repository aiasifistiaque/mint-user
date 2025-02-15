"use client";

import React, { FC } from "react";
import {
  ColRow,
  FlexChild,
  SubHeading,
  Title,
  Column,
  swiper,
  Button,
} from "../../";
import { useColors } from "@/components/hooks";
import { ProductCard, ArrowButton } from "./";
import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import { productData } from '../../demo-data';
import { useGetAllQuery } from "@/store/services/commonApi";

type ProductCardProps = {
  _id: string;
  name: string;
  price: number | string;
  image: string;
  category: {
    name: string;
  };
};

type AllProductCardProps = {
  title: string;
  subTitle: string;
  type: string;
  id: string;
};

const AllProducts: FC<AllProductCardProps> = ({
  title,
  subTitle,
  type,
  id,
}) => {
  const [swiperRef, setSwiperRef] = React.useState<SwiperType | null>(null);

  const { data, isFetching } = useGetAllQuery({
    path: "products",
    filters: {
      ...(type == "category" && { category_in: id }),
      ...(type == "collection" && { collection_in: id }),
      limit: 10,
      sort: "priority",
    },
  });

  const colors = useColors();

  const href =
    type == "category" ? `/category/${id}` : `/category/collection/${id}`;

  const renderCategoryCards =
    !isFetching &&
    data?.doc?.map((item: ProductCardProps, i: number) => (
      <SwiperSlide key={i} virtualIndex={i}>
        <ProductCard {...item} />
      </SwiperSlide>
    ));

  return (
    <Column py={8}>
      <TopContainer>
        <Column gap={4} textAlign={{ base: "center", md: "left" }}>
          <Title type="h4">{title}</Title>
          <SubHeading>{subTitle}</SubHeading>
        </Column>
        <Flex gap={3}>
          <ArrowButton
            name="arrow-left"
            onClick={() => swiperRef?.slidePrev()}
          />

          <ArrowButton
            name="arrow-right"
            onClick={() => swiperRef?.slideNext()}
          />
        </Flex>
      </TopContainer>
      <Flex
        onSwiper={setSwiperRef}
        w="full"
        h="auto"
        as={Swiper}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        spaceBetween={20}
        breakpoints={swiper.BREAKPOINTS.PRODUCT}
      >
        {renderCategoryCards}
      </Flex>
      <Flex as={Link} flex={1} w="full" href={href}>
        <Button
          w="full"
          variant="secondary"
          fontFamily={colors.secondaryFont || "Poppins"}
        >
          View More
        </Button>
      </Flex>
    </Column>
  );
};

const TopContainer: FC<FlexChild> = ({ children }) => (
  <ColRow gap={6} justify="center" align="center">
    {children}
  </ColRow>
);

export default AllProducts;
