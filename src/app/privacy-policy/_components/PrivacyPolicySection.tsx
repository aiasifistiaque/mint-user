import React, { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { SubHeading, Title } from "@/components";
import privacyPolicyData from "./privacyPolicydata";

type PrivacyPolicySectionProps = {};

const PrivacyPolicySection: FC<PrivacyPolicySectionProps> = ({}) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      gap={6}
      px={{ base: 4, lg: 8 }}
      py={{ base: 4, lg: 12 }}
    >
      <Box textAlign="center">
        <Title fontSize="4xl" mb={4}>
          {privacyPolicyData?.title}
        </Title>
        <SubHeading
          fontSize="lg"
          color="gray.600"
          maxW={{ base: "full", lg: "1000px" }}
        >
          {privacyPolicyData?.description}
        </SubHeading>
      </Box>
      {privacyPolicyData?.privacyPolicy?.map((item, index) => (
        <Box key={index} mt={4}>
          <Title fontSize="md" mb={4}>
            {item?.title}
          </Title>
          <SubHeading
            fontSize="sm"
            color="gray.600"
            maxW={{ base: "full", lg: "1000px" }}
          >
            {item?.desc}
          </SubHeading>
        </Box>
      ))}
    </Flex>
  );
};

export default PrivacyPolicySection;
