"use client";

import { FlexChild, padding } from "../../..";
import React, { FC } from "react";
import { Center, Text } from "@chakra-ui/react";
import { useColors } from "@/components";

const FooterTag: FC<FlexChild> = ({ children, ...props }) => {
  const { footerBannerFg, footerBannerBg, secondaryFont } = useColors();
  return (
    <Center
      w="full"
      bg={footerBannerBg}
      flex={1}
      p={padding.LAYOUT_X}
      py={2}
      {...props}
    >
      <Text
        fontSize="14px"
        letterSpacing="2px"
        fontFamily={secondaryFont || "Poppins"}
        color={footerBannerFg}
      >
        {children}
      </Text>
    </Center>
  );
};

export default FooterTag;
