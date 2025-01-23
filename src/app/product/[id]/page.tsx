import React, { FC } from "react";
import { Metadata, ResolvingMetadata } from "next";
import SingleProductPage from "./_components/SingleProductPage";
import { getAProduct } from "@/components/utils/getAProduct";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id: productId } = await params;

  const productData = await getAProduct(productId);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: productData?.name,
    description: productData?.description,
    openGraph: {
      title: productData?.name,
      description: productData?.description,
      images: [productData?.image, ...previousImages],
      type: "website",
      locale: "en-us",
      url: `${BASE_URL}`,
      siteName: `${BASE_URL}`,
    },
  };
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  const { id } = await params;

  return <SingleProductPage id={id} />;
};

export default ProductPage;
