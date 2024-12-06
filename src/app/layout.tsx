import type { Metadata } from 'next';
import {
	Inter,
	Montserrat,
	Playfair_Display,
	Roboto_Mono,
	Raleway,
	Bebas_Neue,
	Oswald,
	Lato,
	Poppins,
	Nunito,
	Open_Sans,
} from 'next/font/google';
import './globals.css';
import { Providers } from '@/components';
import 'swiper/css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'MINT',
	description: 'MINT',
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
