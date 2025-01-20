import React, { FC } from "react";
import { Column, sizes, PLACEHOLDER_IMAGE_2 } from "../../";
import { Image } from "@chakra-ui/react";
const IMAGE_SIZE = { base: "100%", md: "100%", lg: "100%" };

type ImageCardProps = {};

const ImageCard: FC<ImageCardProps> = ({}) => {
  return (
    <Column pb={4} pt={4} userSelect="none" w="full" gap={4}>
      <Image
        src={PLACEHOLDER_IMAGE_2}
        alt="name"
        objectFit="cover"
        width={IMAGE_SIZE}
        height={sizes.CATEGORY_CARD_HEIGHT}
        borderRadius={sizes.RADIUS}
      />
    </Column>
  );
};

export default ImageCard;
