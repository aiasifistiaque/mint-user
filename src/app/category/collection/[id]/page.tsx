import React, { FC } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { SingleCollectionPage } from "./_components";
import { getACollection } from "@/components/utils/getACollection";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type CollectionPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata(
  { params }: CollectionPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id: collectionId } = await params;

  const collectionData = await getACollection(collectionId);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: collectionData?.name,
    description: collectionData?.description,
    openGraph: {
      title: collectionData?.name,
      description: collectionData?.description,
      images: [collectionData?.image, ...previousImages],
      type: "website",
      locale: "en-us",
      url: `${BASE_URL}`,
      siteName: `${BASE_URL}`,
    },
  };
}

const CategoryPage: FC<CollectionPageProps> = async ({ params }) => {
  const { id } = await params;

  return <SingleCollectionPage id={id} />;
};

export default CategoryPage;
