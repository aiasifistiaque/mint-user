import { BgImage, Column, SubHeading, Title, Button, sizes } from "../..";
import { useColors } from "@/components/hooks";
import React, { FC } from "react";
import { Grid, Link } from "@chakra-ui/react";
import NextLink from "next/link";

type ItemProps = {
  image: string;
  btnText: string;
  href: string;
  type: "collection" | "product" | "category";
};

const DiscoverItem: FC<ItemProps> = ({ image, btnText, href, type }) => {
  const colors = useColors();
  const isExternal = href?.startsWith("http");
  const resolvedHref = isExternal
    ? href
    : type === "collection"
    ? `/category/collection/${href}`
    : type === "product"
    ? `/product/${href}`
    : type === "category"
    ? `/category/${href}`
    : href;

  return (
    <BgImage
      src={image}
      h="400px"
      p="32px"
      align="flex-end"
      justify="center"
      borderRadius={sizes.RADIUS}
    >
      {isExternal ? (
        <Link href={resolvedHref} isExternal>
          <Button
            w="150px"
            variant="secondary"
            fontFamily={colors.secondaryFont || "Poppins"}
          >
            {btnText}
          </Button>
        </Link>
      ) : (
        <NextLink href={resolvedHref} passHref>
          <Button
            w="150px"
            variant="secondary"
            fontFamily={colors.secondaryFont || "Poppins"}
          >
            {btnText}
          </Button>
        </NextLink>
      )}
    </BgImage>
  );
};

const Discover: FC<{
  title: string;
  subTitle: string;
  items: {
    btnText: string;
    href: string;
    image: string;
    type: "collection" | "product" | "category";
  }[];
}> = ({ title, subTitle, items }) => {
  const renderItems = items.map((item: ItemProps, i: number) => (
    <DiscoverItem {...item} key={i} />
  ));
  return (
    <Column gap={16}>
      <Column
        textAlign="center"
        w={{ base: "full", md: "60%" }}
        mx="auto"
        gap={8}
      >
        <SubHeading>{subTitle}</SubHeading>
        <Title type="h3">{title}</Title>
      </Column>
      <Grid gap={8} gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        {renderItems}
      </Grid>
    </Column>
  );
};

export default Discover;
