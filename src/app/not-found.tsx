"use client";

import React, { FC } from "react";
import { Column, HeaderText, Layout, Title } from "@/components";
import Link from "next/link";
import { IoWarningOutline } from "react-icons/io5";
import { Button } from "@chakra-ui/react";

type notFoundProps = {};

const notFound: FC<notFoundProps> = ({}) => {
  return (
    <Layout>
      <Column minH="60vh" justifyContent="center" alignItems="center" gap={4}>
        <IoWarningOutline size={200} />
        <Title fontSize="lg">404 - Page Not Found</Title>
        <Link href="/">
          <Button variant="outline">Go back to Home</Button>
        </Link>
      </Column>
    </Layout>
  );
};

export default notFound;
