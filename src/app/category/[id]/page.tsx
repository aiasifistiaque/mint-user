import React, { FC } from "react";
import { SingleCategoryPage } from "./_components";
import { Metadata, ResolvingMetadata } from "next";
import { getACategory } from "@/components/utils/getACategory";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type CategoryPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata(
  { params }: CategoryPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id: categoryId } = await params;

  const categoryData = await getACategory(categoryId);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: categoryData?.name,
    description: categoryData?.description,
    openGraph: {
      title: categoryData?.name,
      description: categoryData?.description,
      images: [categoryData?.image, ...previousImages],
      type: "website",
      locale: "en-us",
      url: `${BASE_URL}`,
      siteName: `${BASE_URL}`,
    },
  };
}

const CategoryPage: FC<CategoryPageProps> = async ({ params }) => {
  const { id } = await params;

  return <SingleCategoryPage id={id} />;
};

export default CategoryPage;
