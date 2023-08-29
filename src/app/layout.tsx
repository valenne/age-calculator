import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ weight: ['400', '700', '800'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Age Calculator',
	description: 'Calculate the time you have been in this world'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} transition-all duration-150 ease-linear h-screen `}>
				{children}
			</body>
		</html>
	);
}
