import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsCart2 } from 'react-icons/bs';

const Banner: React.FC = () => {
	return (
		<div className="px-2 md:px-6 lg:px-10 space-y-4 md:space-y-0 py-4 min-h-[25rem] bg-lightBg dark:bg-darkBg flex flex-col-reverse md:flex-row items-center justify-between shadow-md shadow-darkBg dark:shadow-lightBg rounded-lg ">
			<div className="space-y-2 md:space-y-4">
				<h1 className="text-4xl font-bold md:text-5xl lg:text-8xl">
					QUAAH APPAREL
				</h1>
				<p className="text-lg md:text-xl italic">
					Adorn your beauty with elegant fashion
				</p>
				<Link href="/products" passHref>
					<button className="bg-btn hover:bg-btnHov h-12 w-full md:w-96 text-white rounded-full text-xl font-bold">
						SHOP NOW
					</button>
				</Link>
			</div>

			<div className="w-[12rem] h-[12rem] md:w-[20rem] md:h-[20rem] relative animate-pulse ">
				<Image
					objectFit="cover"
					src="/brand-logo.png"
					alt="banner1"
					layout="fill"
				/>
			</div>
		</div>
	);
};

export default Banner;
