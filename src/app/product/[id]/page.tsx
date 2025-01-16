"use client";
import {
  Column,
  Layout,
  Align,
  Button,
  AllProducts,
  currency,
  useAppDispatch,
} from "@/components";
import { useGetByIdQuery } from "@/store/services/commonApi";
import { useParams } from "next/navigation";
import React, { ReactNode, useState } from "react";
import { Flex, Grid, Image, Text, Stack, useToast } from "@chakra-ui/react";

import { addToCart } from "@/store/slices/cartSlice";
import { BasicDetails, QtySelect, ProductAccordion } from "./_components";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const { data, isFetching, isUninitialized, isError } = useGetByIdQuery(
    { path: "products", id: id },
    { skip: !id }
  );

  const [qty, setQty] = useState(1);
  console.log(data?.description, "Description data");

  const handleAdd = () => setQty(qty + 1);

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

  return (
    <Layout isLoading={!data || isFetching || isUninitialized || isError}>
      <Column gap={2} p={{ base: 4, md: 6 }}>
        <TopGrid>
          <Image src={data?.image} w="full" h="auto" borderRadius={4} />
          <Column gap={4}>
            <BasicDetails
              name={data?.name}
              category={data?.category?.name}
              price={data?.price}
            />
            <Column gap={4}>
              <Stack spacing={1}>
                <Text fontWeight="600">Select Quantity</Text>
                <Align gap={6}>
                  <QtySelect
                    handleAdd={handleAdd}
                    handleRemoveOne={handleRemoveOne}
                  >
                    {qty}
                  </QtySelect>
                  <Text fontWeight="600">
                    Subtotal: {currency?.symbol}{" "}
                    {(qty * data?.price).toLocaleString()}
                  </Text>
                </Align>
              </Stack>
              {data?.stock > 0 ? (
                <Button size="lg" onClick={handleAddToCart}>
                  Add To Cart
                </Button>
              ) : (
                <Button size="lg" isDisabled>
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

export default ProductPage;
