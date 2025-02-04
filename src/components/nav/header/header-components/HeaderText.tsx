"use client";
import React, { FC, ReactNode } from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { useColors } from "@/components/hooks";

const TextStyle = ({ children }: { children: ReactNode }) => {
  const colors = useColors();
  return (
    <Text
      fontSize=".9rem"
      color={colors.headerFg}
      fontFamily={colors.secondaryFont || "Poppins"}
      fontWeight="500"
    >
      {children}
    </Text>
  );
};

const HeaderText: FC<{ children: string; href?: string }> = ({
  children,
  href,
}) => {
  if (!href) return <TextStyle>{children}</TextStyle>;
  return (
    <Link href={href}>
      <TextStyle>{children}</TextStyle>
    </Link>
  );
};

export default HeaderText;
