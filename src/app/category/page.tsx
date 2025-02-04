"use client";
import {
  Column,
  Layout,
  Align,
  Button,
  AllProducts,
  Title,
  SubHeading,
  SpaceBetween,
} from "@/components";
import { useGetAllQuery, useGetByIdQuery } from "@/store/services/commonApi";
import { useParams } from "next/navigation";
import React, { ReactNode } from "react";
import { Box, Center, Grid, Select, Spinner } from "@chakra-ui/react";
import { ProductCard } from "@/components/landing-components/landing-products";
import { CategoryCard } from "@/components/landing-components/all-categories";
import Link from "next/link";

const CategoryPage = () => {
  const [sort, setSort] = React.useState("priority");

  const { data, isFetching, isUninitialized, isError } = useGetAllQuery({
    path: "categories",
    sort,
    limit: 999,
    filters: {
      isActive: true,
    },
  });

  const { data: colData } = useGetAllQuery({
    path: "collections",
    sort,
    limit: 999,
    filters: {
      isActive: true,
    },
  });

  return (
    <Layout isLoading={isFetching || !data}>
      <Column gap={2} p={{ base: 4, md: 6 }}>
        <SpaceBetween>
          <Column>
            <Title type="h3">All Categories</Title>
            <SubHeading>Explore Our Categories</SubHeading>
          </Column>
        </SpaceBetween>
      </Column>

      <Grid
        px={{ base: 4, md: 6 }}
        pb={32}
        gap={{ base: 2, md: 4 }}
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        }}
      >
        {isFetching || !data ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <>
            {data?.doc?.map((item: any, i: number) => (
              <Link href={`/category/${item._id}`} key={i}>
                <CategoryCard type="categories" id={item._id} />
              </Link>
            ))}
            {colData?.doc?.map((item: any, i: number) => (
              <Link href={`/category/collection/${item._id}`} key={i}>
                <CategoryCard key={i} type="collections" id={item._id} />
              </Link>
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

export default CategoryPage;
