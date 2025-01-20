import { Align, padding, sizes, useColors, useContent } from "@/components";
import { Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";

import { Link } from "@chakra-ui/react";

import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { useGetStoreQuery } from "@/store/services/storeApi";

const icons: { [key: string]: React.ElementType } = {
  instagram: IoLogoInstagram,
  facebook: IoLogoFacebook,
  twitter: IoLogoTwitter,
  linkedin: IoLogoLinkedin,
  youtube: IoLogoYoutube,
};

const bannerIcons = [
  {
    name: "instagram",
    href: "https://www.instagram.com/",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/",
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/",
  },
  {
    name: "twitter",
    href: "https://twitter.com/",
  },

  {
    name: "youtube",
    href: "https://www.youtube.com/",
  },
];

const BannerIcon = ({ name, href }: { name: string; href: string }) => {
  const IconComponent = icons[name] || IoLogoInstagram;
  const { brand, brandText, bannerFg, bannerBg } = useColors();

  const { data } = useGetStoreQuery({});

  console.log(data?.socials, "Socials Data:");

  return (
    <Link href={href} isExternal>
      <IconComponent size={20} color={bannerFg} />
    </Link>
  );
};

const Banner = () => {
  const { brand, brandText, bannerFg, bannerBg } = useColors();
  const { content } = useContent();
  const { data } = useGetStoreQuery({});

  // Filter bannerIcons based on the presence of keys in data?.socials
  const filteredIcons = bannerIcons.filter(
    (icon) => data?.socials && data.socials[icon.name]
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
        {/* Render only filtered icons */}
        {filteredIcons.map((icon, idx) => (
          <BannerIcon
            key={idx}
            name={icon.name}
            href={data?.socials[icon.name]}
          />
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
