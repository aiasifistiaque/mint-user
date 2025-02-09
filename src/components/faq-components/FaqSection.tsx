import { FC } from "react";
import {
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Skeleton,
} from "@chakra-ui/react";
import { SubHeading, Title } from "../text";

type FAQSectionProps = {
  content?: any;
  data?: any;
  isLoading?: any;
};

const FAQSection: FC<FAQSectionProps> = ({ data, isLoading }) => {
  const faqPage = data?.content?.faqPage;
  const faq = data?.content?.faq;

  

  return (
    <Flex
      direction="column"
      mt={10}
      alignItems="center"
      gap={6}
      p={{ base: 6, lg: 16 }}
    >
      {/* Leading Texts */}
      <Box textAlign="center">
        <Title fontSize="4xl" mb={4}>
          {faqPage?.title}
        </Title>
        <SubHeading
          fontSize="lg"
          color="gray.600"
          maxW={{ base: "full", lg: "1000px" }}
        >
          {faqPage?.subTitle}
        </SubHeading>
      </Box>

      {/* Accordion */}
      {/* <Title fontSize="4xl">General Questions</Title>
      <SubHeading
        fontSize="lg"
        color="gray.600"
        maxW={{ base: "full", lg: "1000px" }}
      >
        Find answers to common questions or get in touch with us for more
        information!
      </SubHeading> */}
      <Accordion
        mt={6}
        allowToggle
        w="100%"
        maxW={{ base: "full", lg: "1000px" }}
      >
        {faq?.map((faq: any, id: number) => (
          <AccordionItem key={faq?.id}>
            <AccordionButton _expanded={{ bg: "gray.100", fontWeight: "bold" }}>
              <SubHeading flex="1" textAlign="left" fontSize="lg">
                {faq?.title}
              </SubHeading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} color="gray.700">
              <SubHeading fontSize="md">{faq?.description}</SubHeading>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

export default FAQSection;
