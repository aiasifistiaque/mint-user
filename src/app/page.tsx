import React, { FC } from "react";
import { HomeLayout } from "@/components";
import { Metadata, ResolvingMetadata } from "next";
import { getStore } from "@/components/utils/getStore";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type HomePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata(
  { params }: HomePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id: productId } = await params;
  const storeData = await getStore();
  const previousImages = (await parent).openGraph?.images || [];

  const metaData = storeData?.shop?.meta;
  const basicStoreData = storeData?.basic;
  const shopData = storeData?.shop;

  return {
    title: metaData?.title ? metaData?.title : basicStoreData?.name,
    description: metaData?.description
      ? metaData?.description
      : shopData?.description,
    openGraph: {
      title: metaData?.title ? metaData?.title : basicStoreData?.name,
      description: metaData?.description
        ? metaData?.description
        : shopData?.description,
      images: [
        metaData?.metaImage ? metaData?.metaImage : basicStoreData?.logo,
        ...previousImages,
      ],
      type: "website",
      locale: "en-us",
      url: `${BASE_URL}`,
      siteName: `${BASE_URL}`,
    },
  };
}

const HomePage: FC<HomePageProps> = ({ params }) => {
  return <HomeLayout />;
};

export default HomePage;
