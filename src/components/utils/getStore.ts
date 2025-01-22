'server-only';
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND;

export async function getStore() {
	const api: string = `${BASE_URL}/user-api/store/hongo`;
	const res = await fetch(api, {
		method: 'GET',
		headers: {
			store: process.env.NEXT_PUBLIC_STORE || '0001',
		},
		next: { revalidate: 60 },
	});

	if (!res.ok) {
		console.error('Failed to fetch data');
	}

	return res.json();
}