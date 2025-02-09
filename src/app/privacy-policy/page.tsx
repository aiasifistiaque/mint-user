"use client";

import React, { FC } from "react";
import { Layout } from "@/components";
import { PrivacyPolicySection } from "./_components";

type PrivacyPolicyProps = {};

const PrivacyPolicy: FC<PrivacyPolicyProps> = ({}) => {
  return (
    <Layout>
      <PrivacyPolicySection />
    </Layout>
  );
};

export default PrivacyPolicy;
