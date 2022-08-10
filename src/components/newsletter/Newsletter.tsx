import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { AiFillInstagram } from 'react-icons/ai';
import {
	BsFacebook,
	BsFillHandThumbsUpFill,
	BsInstagram,
	BsTwitter,
} from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

type NewsletterProps = {};

const Newsletter: React.FC<NewsletterProps> = () => {
	const [value, setValue] = useState<string>('');
	const [subscribed, setSubscribed] = useState<boolean>(false);

	const handleChange = (e: any) => {
		e.preventDefault();
		setValue(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setValue('');
		setSubscribed(true);
	};

	useEffect(() => {
		if (subscribed) {
			setTimeout(() => {
				setSubscribed(false);
			}, 5000);
		}
	}, [subscribed]);

	return (
		<div className="my-4 w-full h-96 px-2 md:px-6 lg:px-20 bg-gray-300  space-y-2 lg:space-y-4 flex flex-col items-center justify-center relative">
			<h3 className="text-gray-600 font-bold text-2xl md:text-5xl mb-1 lg:mb-6">
				Subscribe to our newsletter
			</h3>

			<form onSubmit={handleSubmit} className=" w-full  space-y-2">
				<div className="flex flex-col relative ">
					<input
						value={value}
						onChange={handleChange}
						type="email"
						required
						name="newsletter"
						id="newsletter"
						placeholder="Input your email to subscribe"
						className="h-10 peer bg-white px-2 placeholder-transparent text-gray-400"
					/>
					<label
						htmlFor="newsletter"
						className="peer-placeholder-shown:text-gray-400 text-gray-600 font-bold text-xl peer-placeholder-shown:text-base peer-placeholder-shown:top-2 -top-8 absolute peer-placeholder-shown:left-2 peer-focus:-top-8"
					>
						Input your email to subscribe
					</label>
				</div>
				{subscribed ? (
					<div className="w-full flex items-center justify-center space-x-2">
						<BsFillHandThumbsUpFill className="text-green-500" />
						<span className="text-green-400 text-xl font-bold">
							Thanks for subscribing
						</span>
					</div>
				) : (
					<button
						onClick={handleSubmit}
						type="submit"
						className="h-10 w-full rounded-full bg-btn hover:bg-btnHov text-white text-2xl font-bold"
					>
						Subscribe
					</button>
				)}
			</form>

			<div className="flex items-center space-x-2 absolute bottom-2 right-2 ">
				<Link href="/" passHref>
					<BsInstagram className="text-3xl cursor-pointer text-gray-700 hover:text-red-600 ease-out" />
				</Link>
				<Link href="/" passHref>
					<BsFacebook className="text-3xl cursor-pointer text-gray-700 hover:text-blue-600 ease-out" />
				</Link>
				<Link href="/" passHref>
					<FaTiktok className="text-3xl cursor-pointer text-gray-700 hover:text-purple-600 ease-out" />
				</Link>

				<Link href="/" passHref>
					<BsTwitter className="text-3xl cursor-pointer text-gray-700 hover:text-sky-400 ease-out" />
				</Link>
			</div>
		</div>
	);
};
export default Newsletter;
