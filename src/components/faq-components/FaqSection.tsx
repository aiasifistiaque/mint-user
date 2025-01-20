import {
  Box,
  Flex,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { faqData } from "./faqData";

const FAQSection = () => {
  return (
    <Flex
      direction="column"
      mt={10}
      alignItems="center"
      gap={6}
    >
      {/* Leading Texts */}
      <Box textAlign="center">
        <Heading fontSize="4xl" mb={4}>
          FAQs
        </Heading>
        <Text
          fontSize="lg"
          color="gray.600"
          maxW={{ base: "full", lg: "1000px" }}
        >
          Welcome to our FAQs page! Here, you'll find answers to the most common
          questions about our products, services, and policies. Whether you have
          queries about our furniture collections, delivery options, or return
          policies, we've got you covered. If you need further assistance,
          please don't hesitate to contact our customer service team. We're here
          to help make your shopping experience as smooth and enjoyable as
          possible.
        </Text>
      </Box>

      {/* Accordion */}
      <Heading fontSize="4xl">
        General Questions
      </Heading>
      <Text
        fontSize="lg"
        color="gray.600"
        maxW={{ base: "full", lg: "1000px" }}
      >
        Find answers to common questions or get in touch with us for more
        information!
      </Text>
      <Accordion allowToggle w="100%" maxW={{ base: "full", lg: "1000px" }}>
        {faqData.map((faq, index) => (
          <AccordionItem key={index}>
            <AccordionButton _expanded={{ bg: "gray.100", fontWeight: "bold" }}>
              <Box flex="1" textAlign="left" fontSize="lg">
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} fontSize="md" color="gray.700">
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

export default FAQSection;
