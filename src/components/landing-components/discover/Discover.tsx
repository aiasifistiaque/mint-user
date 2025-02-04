import {
  BgImage,
  Column,
  SubHeading,
  Title,
  Button,
  sizes,
} from "../..";
import { useColors } from '@/components/hooks';
import React, { FC } from "react";
import { Grid } from "@chakra-ui/react";

type ItemProps = {
  image: string;
  btnText: string;
  href: string;
};

const DiscoverItem: FC<ItemProps> = ({ image, btnText, href }) => {
  const colors = useColors();
  return (
    <BgImage
      src={image}
      h="400px"
      p="32px"
      align="flex-end"
      justify="center"
      borderRadius={sizes.RADIUS}
    >
      <>
        <Button
          w="150px"
          href={href}
          variant="secondary"
          fontFamily={colors.secondaryFont || "Poppins"}
        >
          {btnText}
        </Button>
      </>
    </BgImage>
  );
};

const Discover: FC<{
  title: string;
  subTitle: string;
  items: { btnText: string; href: string; image: string }[];
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
