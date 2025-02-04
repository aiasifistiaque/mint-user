"use client";

import React, { FC, ReactNode } from "react";
import { Column, Layout, Title, SubHeading, SpaceBetween } from "@/components";
import { Box, Center, Flex, Grid, Select, Spinner } from "@chakra-ui/react";
import { useGetAllQuery, useGetByIdQuery } from "@/store/services/commonApi";
import { ProductCard } from "@/components/landing-components/landing-products";

type SingleCategoryPageProps = {
  id?: any;
};

const SingleCategoryPage: FC<SingleCategoryPageProps> = ({ id }) => {
  const [sort, setSort] = React.useState("-createdAt");

  const { data: catData, isFetching: catFetching } = useGetByIdQuery(
    {
      path: "categories",
      id: id,
    },
    { skip: !id }
  );

  const { data, isFetching, isUninitialized, isError } = useGetAllQuery(
    {
      path: "products",
      sort,
      filters: {
        category_in: id,
      },
    },
    { skip: !id }
  );
  console.log(catData, "Categorgy Data");
  return (
    <Layout p={{ base: 4, md: 6 }} isLoading={catFetching}>
      <Column gap={2} p={4}>
        <SpaceBetween>
          <Column>
            <Flex justifyContent="space-between" alignItems="center">
              <Title type="h3">{catData?.name}</Title>
              <Box>
                <Select
                  value={sort}
                  placeholder="Sort by"
                  onChange={(e) => {
                    setSort(e.target.value);
                  }}
                >
                  <option value="-price">Price (High-Low)</option>
                  <option value="price">Price (Low-High)</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="-name">Price (Z-A)</option>
                  <option value="-createdAt">Newest</option>
                </Select>
              </Box>
            </Flex>
            <SubHeading w={"90%"}>
              {catData?.shortDescription
                ? catData?.shortDescription
                : `Explore products from category ${catData?.name}`}
            </SubHeading>
          </Column>
        </SpaceBetween>
      </Column>

      <Grid
        pb={32}
        px={4}
        gap={4}
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr 1fr",
        }}
      >
        {isFetching || !data ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <>
            {data?.totalDocs === 0 && <Center>No products found</Center>}
            {data?.doc?.map((item: any, i: number) => (
              <ProductCard key={i} {...item} />
            ))}
          </>
        )}
      </Grid>
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

export default SingleCategoryPage;
