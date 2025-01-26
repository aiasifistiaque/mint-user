"use client";

import React, { FC } from "react";

import {
  Hero,
  LandingSection,
  Layout,
  AllCategories,
  Discover,
  AllProducts,
  Column,
  About,
  sortByPriority,
  FeaturedCollections,
  ImageGallery,
} from "@/components";
import { useGetStoreQuery } from "@/store/services/storeApi";
import { Center, Spinner } from "@chakra-ui/react";

type HomeLayoutProps = {};

type ProductProp = {
  title: string;
  subTitle: string;
  type: string;
  id: string;
};

const ProductList = ({ data }: { data: ProductProp[] }) => {
  const list = sortByPriority(data as []);

  return list?.map((item: ProductProp, i: number) => (
    <LandingSection key={i}>
      <AllProducts
        title={item?.title}
        subTitle={item?.subTitle}
        type={item?.type}
        id={item?.id}
      />
    </LandingSection>
  ));
};

const HomeLayout: FC<HomeLayoutProps> = ({}) => {
  const { data, isLoading } = useGetStoreQuery({});

  const imageGalleryHide = true;

  if (isLoading)
    return (
      <Center flex={1} h="100vh">
        <Spinner size="xl" />
      </Center>
    );

  return (
    <Layout>
      <Column gap={8}>
        <LandingSection applyPadding={data?.content?.hero?.padding || "apply"}>
          <Hero {...data?.content?.hero} />
        </LandingSection>
        <Column px={{ base: 0, md: 4 }}>
          <LandingSection>
            <AllCategories {...data?.content?.collections} />
          </LandingSection>
          <LandingSection>
            <Discover {...data?.content?.discover} />
          </LandingSection>

          <ProductList data={data?.content?.productList || []} />

          {!imageGalleryHide && (
            <LandingSection>
              <ImageGallery />
            </LandingSection>
          )}

          <LandingSection>
            <About {...data?.content?.about} />
          </LandingSection>
          <LandingSection>
            <FeaturedCollections items={data?.content?.featuredCollection} />
          </LandingSection>
        </Column>
      </Column>
    </Layout>
  );
};

export default HomeLayout;
