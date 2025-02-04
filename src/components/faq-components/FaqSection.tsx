import {
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { SubHeading, Title } from "../text";

type FAQSectionProps = {
  content?: any;
  data?: any;
};

const FAQSection = (data: FAQSectionProps) => {
  const faqPage = data?.data?.content?.faqPage;
  const faq = data?.data?.content?.faq;

  return (
    <Flex direction="column" mt={10} alignItems="center" gap={6}>
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
      <Title fontSize="4xl">General Questions</Title>
      <SubHeading
        fontSize="lg"
        color="gray.600"
        maxW={{ base: "full", lg: "1000px" }}
      >
        Find answers to common questions or get in touch with us for more
        information!
      </SubHeading>
      <Accordion allowToggle w="100%" maxW={{ base: "full", lg: "1000px" }}>
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
