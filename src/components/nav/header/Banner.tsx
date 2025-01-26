"use client";

import { Align, padding, sizes, useColors, useContent } from "@/components";
import { Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";

import { Link } from "@chakra-ui/react";

import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import {
  useGetAllStoreQuery,
  useGetStoreQuery,
} from "@/store/services/storeApi";

const icons: { [key: string]: React.ElementType } = {
  instagram: IoLogoInstagram,
  facebook: IoLogoFacebook,
  twitter: IoLogoTwitter,
  linkedin: IoLogoLinkedin,
  youtube: IoLogoYoutube,
  website: GrLanguage,
  tiktok: FaTiktok,
  whatsapp: FaWhatsapp,
  telegram: FaTelegram,
};

const BannerIcon = ({ name, href }: { name: string; href: string }) => {
  const IconComponent = icons[name] || IoLogoInstagram;
  const { bannerFg } = useColors();

  return (
    <Link href={href} isExternal>
      <IconComponent size={20} color={bannerFg} />
    </Link>
  );
};

const Banner = () => {
  const { bannerFg, bannerBg } = useColors();
  const { content } = useContent();
  const { data: shopData } = useGetAllStoreQuery({});

  // Extract social media links from `shopData?.shop`
  const socials = shopData?.shop
    ? {
        instagram: shopData.shop.instagram,
        facebook: shopData.shop.facebook,
        twitter: shopData.shop.twitter,
        linkedin: shopData.shop.linkedin,
        youtube: shopData.shop.youtube,
        website: shopData.shop.website,
        tiktok: shopData.shop.tiktok,
        whatsapp: shopData.shop.whatsapp,
        telegram: shopData.shop.telegram,
      }
    : {};

  // Filter icons with valid links
  const filteredIcons = Object.entries(socials).filter(
    ([, value]) => value && value.trim() !== ""
  );

  return (
    <Grid
      {...(content?.banner?.hide && { display: "none" })}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
      px={padding.LAYOUT_X}
      bg={bannerBg}
      h={{ base: sizes.BANNER_HEIGHT_BASE, md: sizes.BANNER_HEIGHT }}
    >
      <Flex align="center" gap={4} display={{ base: "none", md: "flex" }}>
        {/* Render filtered icons */}
        {filteredIcons.map(([name, href], idx) => (
          <BannerIcon key={idx} name={name} href={href} />
        ))}
      </Flex>
      <Align
        h={{ base: sizes.BANNER_HEIGHT_BASE, md: sizes.BANNER_HEIGHT }}
        justify="center"
        flex={1}
      >
        <Text
          textAlign="center"
          letterSpacing="2px"
          color={bannerFg}
          fontSize=".8rem"
        >
          {content?.banner?.centerText}
        </Text>
      </Align>

      <Align justify="flex-end">
        <Text
          textAlign="right"
          display={{ base: "none", md: "flex" }}
          letterSpacing="2px"
          color={bannerFg}
          fontSize=".8rem"
        >
          {content?.banner?.rightText}
        </Text>
      </Align>
    </Grid>
  );
};

export default Banner;
