import React from "react";
import {
  FooterItemContainer,
  FooterIcon,
  FooterText,
  FooterTag,
  FooterContainer,
  FooterIconContainer,
} from ".";
import { useGetAllStoreQuery } from "@/store/services/storeApi";

const footerItems = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "FAQs",
    href: "/faq",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

const iconsMap: { [key: string]: string } = {
  instagram: "instagram",
  facebook: "facebook",
  twitter: "twitter",
  linkedin: "linkedin",
  youtube: "youtube",
  website: "website",
  tiktok: "tiktok",
  whatsapp: "whatsapp",
  telegram: "telegram",
};

const Footer = () => {
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

  // Filter valid icons
  const filteredIcons = Object.entries(socials).filter(
    ([, value]) => value && value.trim() !== ""
  );

  return (
    <FooterContainer>
      <FooterItemContainer>
        {footerItems.map((item, idx) => (
          <FooterText key={idx} href={item.href}>
            {item.name}
          </FooterText>
        ))}
      </FooterItemContainer>
      <FooterIconContainer>
        {/* Render filtered icons dynamically */}
        {filteredIcons.map(([name, href], idx) => (
          <FooterIcon key={idx} name={name} href={href} />
        ))}
      </FooterIconContainer>
      <FooterTag>Copyright © 2025, powered by thinkcrypt.io</FooterTag>
    </FooterContainer>
  );
};

export default Footer;
