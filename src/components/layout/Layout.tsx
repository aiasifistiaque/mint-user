import { Center, Flex, FlexProps, Spinner, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { Header, Body, Footer, Banner } from "..";
import { ColorMode, useColors } from "@/components";
import { useScroll } from "framer-motion";
import { useGetStoreQuery } from "@/store/services/storeApi";

type LayoutProps = FlexProps & {
  children: React.ReactNode;
  isLoading?: boolean;
};

const Layout: FC<LayoutProps> = ({ children, isLoading, ...props }) => {
  const { secondaryFont, bg } = useColors();
  const { data, isLoading: isStoreLoading } = useGetStoreQuery({});

  if (isStoreLoading)
    return (
      <Center flex={1} h="100vh">
        <Spinner size="xl" />
      </Center>
    );

  return (
    <>
      <Banner />
      <Header />

      <Body minH={"80vh"}>
        {isLoading ? (
          <Center w="full" flex={1} h="100%">
            <Spinner />
          </Center>
        ) : (
          children
        )}
      </Body>
      <Footer />
    </>
  );
};

export default Layout;
