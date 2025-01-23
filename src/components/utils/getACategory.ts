"server-only";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND;

export async function getACategory(categoryId: string) {
  const api: string = `${BASE_URL}/user-api/categories/${categoryId}`;
  const res = await fetch(api, { next: { revalidate: 60 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error('Failed to fetch data');
    console.error("Failed to fetch data");
  }

  return res.json();
}
