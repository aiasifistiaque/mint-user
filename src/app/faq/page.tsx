"use client";

import React, { FC } from "react";
import { Layout } from "@/components";
import FAQSection from "@/components/faq-components/FaqSection";
import { useGetStoreQuery } from "@/store/services/storeApi";
import { Center, Spinner } from "@chakra-ui/react";

type FaqPageProps = {};

const FaqPage: FC<FaqPageProps> = ({}) => {
  const { data, isLoading } = useGetStoreQuery({});

  if (isLoading)
    return (
      <Center flex={1} h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  return (
    <Layout>
      <FAQSection data={data} isLoading={isLoading} />
    </Layout>
  );
};

export default FaqPage;
