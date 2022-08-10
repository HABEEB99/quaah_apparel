import Head from 'next/head';
import React, { ReactNode } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

type PagesLayoutProps = {
	title?: string;
	description?: string;
	children: ReactNode;
};

const PagesLayout: React.FC<PagesLayoutProps> = ({
	title,
	description,
	children,
}) => {
	return (
		<div className="min-h-[89vh] w-screen">
			<Head>
				<title className="font-bold text-xl text-pink-600">
					{title ? `QUAAH APPAREL - ${title}` : 'QUAAH APPAREL'}
				</title>
				<link rel="icon" href="/brand-logo.png" />
				{description && <meta name="description" content={description} />}
			</Head>
			<Header />
			<main className="min-h-[85vh] mt-[11vh] px-3 sm:px-4 md:px-12 lg:px-32">
				{children}
			</main>
			<Footer />
		</div>
	);
};
export default PagesLayout;
