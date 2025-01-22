import React from "react";
import {
  FooterItemContainer,
  FooterIcon,
  FooterText,
  FooterTag,
  FooterContainer,
  FooterIconContainer,
} from ".";
import { useColors } from "@/components/hooks";
import { useGetStoreQuery } from "@/store/services/storeApi";

const footerItems = [
  {
    name: "About Us",
    href: "#",
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

const footerIcons = [
  {
    name: "instagram",
    href: "https://www.instagram.com/",
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
    name: "linkedin",
    href: "https://www.linkedin.com/",
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/",
  },
];

const Footer = () => {
  const { data } = useGetStoreQuery({});
  
  // Filter footerIcons based on the presence of keys in data?.socials
  const filteredIcons = footerIcons.filter(
    (icon) => data?.socials && data.socials[icon.name]
  );

  return (
    <FooterContainer>
      <FooterItemContainer>
        {footerItems.map((item, idx) => (
          <FooterText key={idx} href={item?.href}>
            {item?.name}
          </FooterText>
        ))}
      </FooterItemContainer>
      <FooterIconContainer>
        {filteredIcons.map((icon, idx) => (
          <FooterIcon
            key={idx}
            name={icon.name}
            href={data?.socials[icon.name]} // Use the dynamic href
          />
        ))}
      </FooterIconContainer>
      <FooterTag>Copyright © 2024, powered by thinkcrypt.io</FooterTag>
    </FooterContainer>
  );
};

export default Footer;
