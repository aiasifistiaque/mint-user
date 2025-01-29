import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import { SubHeading, Title } from "../text";

type ContactCardProps = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
};

const ContactCard: FC<ContactCardProps> = ({
  title,
  description,
  linkText,
  linkHref,
}) => {
  return (
    <Flex
      flexDirection="column"
      bg="gray.100"
      borderRadius="md"
      p={4}
      align="center"
    >
      <Title as="h3" fontSize="lg" fontWeight="bold" mb={2}>
        {title}
      </Title>
      <SubHeading fontSize="md" color="gray.600" mb={4}>
        {description}
      </SubHeading>
      <Link href={linkHref}>
        <SubHeading fontSize="md" color="blue.500">
          {linkText}
        </SubHeading>
      </Link>
    </Flex>
  );
};

export default ContactCard;
