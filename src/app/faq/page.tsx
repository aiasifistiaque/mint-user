"use client";

import { Layout } from "@/components";
import FAQSection from "@/components/faq-components/FaqSection";
import React, { FC } from "react";

type FaqPageProps = {};

const FaqPage: FC<FaqPageProps> = ({}) => {
  return (
    <Layout>
      <FAQSection />
    </Layout>
  );
};

export default FaqPage;
