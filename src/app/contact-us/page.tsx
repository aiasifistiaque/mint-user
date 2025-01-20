"use client";

import React, { FC } from "react";
import { Layout } from "@/components";
import ContactUsSection from "@/components/contactus-components/ContactUsSection";
import ContactForm from "@/components/contactus-components/ContactForm";

type ContactPageProps = {};

const ContactPage: FC<ContactPageProps> = ({}) => {
  return (
    <Layout>
      <ContactUsSection />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
