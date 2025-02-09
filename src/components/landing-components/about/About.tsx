import React, { FC } from "react";
import { Column, SubHeading, Title, Button, sizes } from "../..";
import { Grid, Image, Box, Link } from "@chakra-ui/react";

import NextLink from "next/link";

type AboutProps = {
  image: string;
  title: string;
  subTitle: string;
  href: string;
  type: "collection" | "product" | "category";
};

// const aboutData = {
// 	title: 'Transform Your Workout Experience',
// 	subTitle:
// 		'At Mint Fashion, we specialize in blending style with sustainability. Our unique designs are crafted from premium, eco-friendly materials, ensuring comfort and quality. We focus on timeless fashion that reflects your individuality, making every piece a statement of personal expression and environmental consciousness.',
// 	image:
// 		'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// };

const About: FC<AboutProps> = ({ image, title, subTitle, href, type }) => {
  // const { image, title, subTitle } = aboutData;
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
    <Grid
      py={16}
      gap={16}
      w="full"
      alignItems="center"
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
    >
      <Image
        alt="About Us"
        w="full"
        borderRadius={sizes.RADIUS}
        h={{ base: "40vh", md: "70vh" }}
        objectFit="cover"
        src={image}
      />
      <Column
        flex={1}
        justify="center"
        px={{ base: 4, md: 0 }}
        gap={{ base: 8, md: 12 }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Title type="h3">{title}</Title>
        <SubHeading fontSize="1.1rem">{subTitle}</SubHeading>
        <Box>
          {isExternal ? (
            <Link href={resolvedHref} isExternal>
              <Button as="a" variant="primary">
                Shop Now
              </Button>
            </Link>
          ) : (
            <NextLink href={resolvedHref} passHref>
              <Button variant="primary">Shop Now</Button>
            </NextLink>
          )}
        </Box>
      </Column>
    </Grid>
  );
};

export default About;
