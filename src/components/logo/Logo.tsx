import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo: React.FC = () => {
	return (
		<Link href="/" passHref>
			<div className="flex items-center justify-center space-x-1 cursor-pointer">
				<div className="relative w-6 h-6 rounded-[50%] overflow-hidden">
					<Image
						src="/brand-logo.png"
						layout="fill"
						objectFit="cover"
						alt="Brand Logo"
					/>
				</div>
				<h1 className="text-base md:text-xl font-bold  md:block text-red-400">
					Quaah Apparel
				</h1>
			</div>
		</Link>
	);
};
export default Logo;
