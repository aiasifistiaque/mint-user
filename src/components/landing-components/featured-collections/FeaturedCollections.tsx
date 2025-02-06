import {
  BgImage,
  Column,
  SubHeading,
  Title,
  Button,
  sizes,
  IconButton,
  useColors,
} from "../..";
import React, { FC } from "react";
import { Grid, Text, Flex, Spacer, Link } from "@chakra-ui/react";
import { ArrowButton } from "../landing-products";
import NextLink from "next/link";

type ItemProps = {
  image: string;
  title: string;
  subTitle: string;
  href: string;
  type: "collection" | "product" | "category";
};

const DiscoverItem: FC<ItemProps> = ({
  image,
  title,
  subTitle,
  href,
  type,
}) => {
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
      h="580px"
      w="full"
      p="32px"
      justify="center"
      borderRadius={sizes.RADIUS}
    >
      <Column gap={8}>
        <Column gap={4}>
          <Title type="h5" color={colors?.brandText}>
            {title}
          </Title>
          <SubHeading color={colors?.brandText}>{subTitle}</SubHeading>
        </Column>
        <Spacer />
        <Flex justify="flex-end">
          {isExternal ? (
            <Link href={resolvedHref} isExternal>
              <IconButton
                as="a"
                aria-label="Arrow Button"
                w="58px"
                h="58px"
                borderRadius="full"
                bg={colors?.brandText}
                borderColor={colors?.brand}
                borderWidth={1}
                iconColor="black"
                _dark={{ iconColor: "black" }}
                _hover={{
                  bg: colors?.brandText,
                  color: colors?.brand,
                  _dark: { color: "eblack.200" },
                }}
                iconSize={24}
                iconName="arrow-right"
              />
            </Link>
          ) : (
            <NextLink href={resolvedHref} passHref>
              <IconButton
                as="a"
                aria-label="Arrow Button"
                w="58px"
                h="58px"
                borderRadius="full"
                bg={colors?.brandText}
                borderColor={colors?.brand}
                borderWidth={1}
                iconColor="black"
                _dark={{ iconColor: "black" }}
                _hover={{
                  bg: colors?.brandText,
                  color: colors?.brand,
                  _dark: { color: "eblack.200" },
                }}
                iconSize={24}
                iconName="arrow-right"
              />
            </NextLink>
          )}
        </Flex>
      </Column>
    </BgImage>
  );
};

const FeaturedCollections: FC<{ items: ItemProps[] }> = ({ items }) => {
  console.log(items);
  const renderItems = items?.map((item: ItemProps, i: number) => (
    <DiscoverItem {...item} key={i} />
  ));
  return (
    <Column gap={16}>
      <Grid gap={6} gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}>
        {renderItems}
      </Grid>
    </Column>
  );
};

export default FeaturedCollections;
