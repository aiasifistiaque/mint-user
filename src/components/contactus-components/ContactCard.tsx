import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

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
      <Heading as="h3" fontSize="lg" fontWeight="bold" mb={2}>
        {title}
      </Heading>
      <Text fontSize="md" color="gray.600" mb={4}>
        {description}
      </Text>
      <Link href={linkHref}>
        <Text fontWeight="bold" color="blue.500">
          {linkText}
        </Text>
      </Link>
    </Flex>
  );
};

export default ContactCard;
