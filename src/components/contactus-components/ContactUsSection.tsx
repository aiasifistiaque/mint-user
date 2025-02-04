import React from "react";
import { Grid } from "@chakra-ui/react";
import { contactCardData } from "./contactData";
import ContactCard from "./ContactCard";
import { SubHeading, Title } from "../text";
import { Column } from "../containers";

const ContactUsSection = () => {
  return (
    <Column textAlign="center" mt={10}>
      {/* Leading Title and Subtitle */}
      <Title fontSize={{ base: "24px", lg: "40px" }}>
        Contact Our Friendly Team
      </Title>
      <SubHeading>Let us know how we can help.</SubHeading>

      {/* Contact Options */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
        px={4}
        mt={10}
      >
        {contactCardData.map((card, index) => (
          <ContactCard
            key={index}
            title={card?.title}
            description={card?.description}
            linkText={card?.linkText}
            linkHref={card?.linkHref}
          />
        ))}
      </Grid>
    </Column>
  );
};

export default ContactUsSection;
