import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Column } from "../containers";
import { SubHeading, Title } from "../text";
import { useColors } from "../hooks";

const ContactForm = () => {
  const colors = useColors();
  return (
    <Column alignItems="center" mt={{ base: 10 }} py={10}>
      {/* Title Section */}
      <Title fontSize={{ base: "24px", lg: "40px" }} mb={2}>
        We’d Love to Help
      </Title>
      <SubHeading fontWeight={500} mb={8}>
        Get in Touch
      </SubHeading>
      <SubHeading mb={6}>
        Our friendly team would love to hear from you.
      </SubHeading>

      {/* Form */}
      <Stack spacing={6} maxW={{ base: "full", lg: "600px" }} w="100%">
        <FormControl isRequired>
          <FormLabel fontSize="md" fontFamily={colors?.primaryFont}>
            Name
          </FormLabel>
          <Input
            type="text"
            placeholder="Name"
            bg="#efefef"
            focusBorderColor="blue.500"
            _placeholder={{ color: "gray.400" }}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontFamily={colors?.primaryFont} fontSize="md">
            E-mail
          </FormLabel>
          <Input
            type="email"
            placeholder="E-mail Address"
            bg="#efefef"
            focusBorderColor="blue.500"
            _placeholder={{ color: "gray.400" }}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontFamily={colors?.primaryFont} fontSize="md">
            Your Request
          </FormLabel>
          <Textarea
            placeholder="Your Request"
            bg="#efefef"
            focusBorderColor="blue.500"
            _placeholder={{ color: "gray.400" }}
          />
        </FormControl>

        <Button
          type="submit"
          bg="black"
          color="white"
          size="lg"
          borderRadius="md"
          _hover={{ bg: "gray.800" }}
        >
          Send Message
        </Button>
      </Stack>
    </Column>
  );
};

export default ContactForm;
