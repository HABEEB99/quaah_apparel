import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import { BiLogInCircle } from 'react-icons/bi';
import { FaAddressCard } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';

type StagesProps = {
	stage: number;
};

const data = [
	{ name: 'Login', logo: <BiLogInCircle /> },
	{ name: 'User Details', logo: <FaAddressCard /> },
	{ name: 'Payment Method', logo: <MdPayment /> },
	{ name: 'Place Order', logo: <AiFillCar /> },
];

const Stages: React.FC<StagesProps> = ({ stage }) => {
	return (
		<div className="flex flex-wrap mb-6">
			{data.map((item, idx) => (
				<div
					key={idx}
					className={`border-b-2 flex-1 text-center flex items-center justify-center space-x-1 ${
						idx <= stage
							? 'border-btn text-btn font-bold text-[0.5rem] md:text-xl'
							: 'border-gray-500 text-gray-500 text-[0.5rem] md:text-xl'
					}`}
				>
					<div>{item.logo}</div>
					<h3>{item.name}</h3>
				</div>
			))}
		</div>
	);
};
export default Stages;
