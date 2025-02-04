"use client";

import React, { FC } from "react";
import { Layout } from "@/components";
import FAQSection from "@/components/faq-components/FaqSection";
import { useGetStoreQuery } from "@/store/services/storeApi";

type FaqPageProps = {};

const FaqPage: FC<FaqPageProps> = ({}) => {
  const { data } = useGetStoreQuery({});
  return (
    <Layout>
      <FAQSection data={data} />
    </Layout>
  );
};

export default FaqPage;
