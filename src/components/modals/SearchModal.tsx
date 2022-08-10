import React from 'react';
import { ImSearch } from 'react-icons/im';

type SearchModalProps = {};

const SearchModal: React.FC<SearchModalProps> = () => {
	return (
		<div className="w-[20rem] px-4 rounded-lg h-20 flex items-center justify-center bg-cta absolute top-[11vh] right-4">
			<div className="flex h-10 space-x-3 flex-1 items-center rounded-full border-2 border-gray-300 bg-gray-200 px-4 hover:border-btn ">
				<ImSearch className="text-xl font-bold text-btn" />
				<input
					type="text"
					placeholder="Search for a movie"
					className=" flex-1 bg-transparent outline-none"
				/>
			</div>
		</div>
	);
};
export default SearchModal;
