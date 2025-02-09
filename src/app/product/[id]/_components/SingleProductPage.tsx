"use client";

import React, { FC, ReactNode, useState } from "react";
import {
  Column,
  Layout,
  Align,
  Button,
  AllProducts,
  currency,
  useAppDispatch,
  useColors,
} from "@/components";

import { useGetByIdQuery } from "@/store/services/commonApi";
import { Grid, Image, Text, Stack, useToast, Box } from "@chakra-ui/react";
import { addToCart } from "@/store/slices/cartSlice";
import { BasicDetails, QtySelect, ProductAccordion } from "../_components";

type SingleProductPageProps = {
  id?: any;
};

const SingleProductPage: FC<SingleProductPageProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const { secondaryFont, primaryFont } = useColors();

  const { data, isFetching, isUninitialized, isError } = useGetByIdQuery(
    { path: "products", id: id },
    { skip: !id }
  );

  const [qty, setQty] = useState(1);

  console.log(data?.stock, "Stocks Available");

  const handleAdd = () => {
    if (qty >= data?.stock) {
      toast({
        title: "Stock limit reached",
        description: `Only ${data?.stock} items available in stock.`,
        status: "warning",
        duration: 2000,
        isClosable: true,
        variant: "subtle",
      });
      return;
    }
    setQty(qty + 1);
  };

  const handleRemoveOne = () => {
    if (qty === 1) return;
    setQty(qty - 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        item: {
          _id: id,
          name: data?.name,
          price: data?.price,
          vat: 0,
          image: data?.image,
        },
        qty,
      })
    );
    setQty(1);
    toast({
      title: `${qty} ${data?.name} added to bag`,
      status: "success",
      duration: 2000,
      isClosable: true,
      variant: "subtle",
    });
  };

  const images = data?.image
    ? [data?.image, ...(data?.images || [])]
    : data?.images || [];
  const [selectedImage, setSelectedImage] = useState(images?.[0] || "");

  return (
    <Layout isLoading={!data || isFetching || isUninitialized || isError}>
      <Column gap={2} p={{ base: 4, md: 6 }}>
        <TopGrid>
          <Column gap={4}>
            {images.length > 1 && (
              <Align gap={2} overflowX="auto">
                {images.map((img: any, index: number) => (
                  <Box
                    key={index}
                    border={selectedImage === img ? "1px solid" : "1px solid"}
                    borderColor={
                      selectedImage === img ? "#e9e95bge" : "gray.300"
                    }
                    borderRadius="md"
                    cursor="pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image
                      src={img}
                      boxSize={{ base: "50px", lg: "80px" }}
                      borderRadius="md"
                    />
                  </Box>
                ))}
              </Align>
            )}
            <Image
              src={selectedImage || data?.image}
              w="full"
              h="auto"
              borderRadius={4}
              objectFit="cover"
            />
          </Column>
          <Column gap={4}>
            <BasicDetails
              name={data?.name}
              category={data?.category?.name}
              price={data?.price}
            />
            <Column gap={4}>
              <Stack spacing={1}>
                <Text fontWeight="600" fontFamily={secondaryFont}>
                  Select Quantity
                </Text>
                <Align gap={6}>
                  <QtySelect
                    handleAdd={handleAdd}
                    handleRemoveOne={handleRemoveOne}
                  >
                    {qty}
                  </QtySelect>
                  <Text fontWeight="600" fontFamily={secondaryFont}>
                    Subtotal: {currency?.symbol}{" "}
                    {(qty * data?.price).toLocaleString()}
                  </Text>
                </Align>
                {qty >= data?.stock && (
                  <Text color="red.500" fontSize="sm" fontWeight="600">
                    Stock Exceeded.
                  </Text>
                )}
              </Stack>
              {data?.stock > 0 ? (
                <Button
                  size="lg"
                  fontFamily={secondaryFont || "Poppins"}
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </Button>
              ) : (
                <Button
                  size="lg"
                  isDisabled
                  fontFamily={secondaryFont || "Poppins"}
                >
                  Out Of Stock
                </Button>
              )}
            </Column>
            <Column gap={4} py={8}>
              <ProductAccordion description={data?.description} />
            </Column>
          </Column>
        </TopGrid>
        <AllProducts
          title="Related Products"
          subTitle="Discover your unique style today."
          type={"categories"}
          id={data?.category?._id}
        />
      </Column>
    </Layout>
  );
};

const TopGrid = ({ children }: { children: ReactNode }) => (
  <Grid
    pb={16}
    borderBottom="1px solid"
    borderBottomColor="eborder.600"
    gap={8}
    gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
  >
    {children}
  </Grid>
);

export default SingleProductPage;
