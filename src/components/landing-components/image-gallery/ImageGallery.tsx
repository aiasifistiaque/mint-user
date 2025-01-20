import { ColRow, FlexChild, Column, Title, SubHeading } from "../..";
import React, { FC } from "react";
import ImageCardContainer from "./ImageCardContainer";

type ImageGalleryProps = {};

const TopContainer: FC<FlexChild> = ({ children }) => (
  <ColRow gap={6} justify="center" align="center">
    {children}
  </ColRow>
);

const ImageGallery: FC<ImageGalleryProps> = ({}) => {
  return (
    <Column>
      <TopContainer>
        <Column w="full" gap={4} textAlign={{ base: "center", md: "left" }}>
          <Title type="h4">LOVED BY 100,000 & COUNTING </Title>
          <SubHeading>Join Our 100,000+ Satisfied Customers</SubHeading>
        </Column>
      </TopContainer>
      
    </Column>
  );
};

export default ImageGallery;
