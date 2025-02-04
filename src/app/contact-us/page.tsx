"use client";

import React, { FC } from "react";
import { Layout } from "@/components";
import ContactUsSection from "@/components/contactus-components/ContactUsSection";
import ContactForm from "@/components/contactus-components/ContactForm";
import { useGetStoreQuery } from "@/store/services/storeApi";
import { Center, Spinner } from "@chakra-ui/react";

type ContactPageProps = {};

const ContactPage: FC<ContactPageProps> = ({}) => {
  // const { data, isLoading } = useGetStoreQuery({});

  // const imageGalleryHide = true;

  // if (isLoading)
  //   return (
  //     <Center flex={1} h="100vh">
  //       <Spinner size="xl" />
  //     </Center>
  //   );
  return (
    <Layout>
      <ContactUsSection />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
