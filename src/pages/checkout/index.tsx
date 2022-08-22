import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { SubmitErrorHandler, useForm } from 'react-hook-form';
import PagesLayout from '../../components/layout/PagesLayout';
import Stages from '../../components/stages/Stages';
import {
	useOrderDetails,
	UserOrderDetailsProp,
} from '../../store/orderDetailsStore';

type CheckoutProps = {};

const Checkout: React.FC<CheckoutProps> = () => {
	const { addUserOrderDetails, userOrderDetails } = useOrderDetails();
	const router = useRouter();
	const {
		register,
		reset,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<UserOrderDetailsProp>();

	const submitForm: SubmitErrorHandler<UserOrderDetailsProp> = (data) => {
		addUserOrderDetails(data);
		reset();
		router.push('/selectPayment');
	};

	useEffect(() => {
		setValue('fullName', userOrderDetails.fullName);
		setValue('address', userOrderDetails.address);
		setValue('country', userOrderDetails.country);
		setValue('city', userOrderDetails.city);
		setValue('postalCode', userOrderDetails.postalCode);
	}, [setValue, userOrderDetails]);

	return (
		<PagesLayout title="CHECKOUT PAGE" description="Checkout Page">
			<Stages stage={1} />

			<div className="w-full lg:w-[80%] py-6 mx-auto">
				<form onSubmit={handleSubmit(submitForm)} className="w-full">
					<div className="w-full relative my-8">
						<input
							type="text"
							id="fullName"
							{...register('fullName', { required: true, minLength: 3 })}
							placeholder="Full Name"
							className="peer placeholder-transparent px-2 w-full h-8 bg-sky-200 text-gray-600 rounded-md outline-none"
						/>
						<label
							htmlFor="fullName"
							className="absolute  font-bold -top-6 left-0 peer-focus:-top-6 peer-focus:text-sky-500 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-placeholder-shown:left-2"
						>
							Full Name
						</label>
						{errors.fullName && (
							<span className="text-xs font-bold text-red-600 animate-pulse">
								{errors.fullName.type === 'required' && 'Full Name is required'}
								{errors.fullName.type === 'minLength' &&
									'Full Name must be more than 3 characters'}
							</span>
						)}
					</div>

					<div className="w-full relative my-8">
						<input
							type="text"
							id="address"
							{...register('address', { required: true, minLength: 6 })}
							placeholder="Address"
							className="peer placeholder-transparent px-2 w-full h-8 bg-sky-200 text-gray-600 rounded-md outline-none"
						/>
						<label
							htmlFor="address"
							className="absolute  font-bold -top-6 left-0 peer-focus:-top-6 peer-focus:text-sky-500 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-placeholder-shown:left-2"
						>
							Address
						</label>
						{errors.address && (
							<span className="text-xs font-bold text-red-600 animate-pulse">
								{errors.address.type === 'required' && 'Full Name is required'}
								{errors.address.type === 'minLength' &&
									'Full Name must be more than 6 characters'}
							</span>
						)}
					</div>

					<div className="w-full relative my-8">
						<input
							type="text"
							id="country"
							{...register('country', { required: true, minLength: 2 })}
							placeholder="Country"
							className="peer placeholder-transparent px-2 w-full h-8 bg-sky-200 text-gray-600 rounded-md outline-none"
						/>
						<label
							htmlFor="country"
							className="absolute  font-bold -top-6 left-0 peer-focus:-top-6 peer-focus:text-sky-500 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-placeholder-shown:left-2"
						>
							Country
						</label>
						{errors.country && (
							<span className="text-xs font-bold text-red-600 animate-pulse">
								{errors.country.type === 'required' && 'Full Name is required'}
								{errors.country.type === 'minLength' &&
									'Full Name must be more than 2 characters'}
							</span>
						)}
					</div>

					<div className="w-full relative my-8">
						<input
							type="text"
							id="city"
							{...register('city', { required: true, minLength: 3 })}
							placeholder="City"
							className="peer placeholder-transparent px-2 w-full h-8 bg-sky-200 text-gray-600 rounded-md outline-none"
						/>
						<label
							htmlFor="city"
							className="absolute  font-bold -top-6 left-0 peer-focus:-top-6 peer-focus:text-sky-500 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-placeholder-shown:left-2"
						>
							City
						</label>
						{errors.city && (
							<span className="text-xs font-bold text-red-600 animate-pulse">
								{errors.city.type === 'required' && 'Full Name is required'}
								{errors.city.type === 'minLength' &&
									'Full Name must be more than 3 characters'}
							</span>
						)}
					</div>

					<div className="w-full relative my-8">
						<input
							type="text"
							id="postalcode"
							{...register('postalCode', {
								required: true,
								minLength: 6,
								maxLength: 6,
							})}
							placeholder="Postal Code"
							className="peer placeholder-transparent px-2 w-full h-8 bg-sky-200 text-gray-600 rounded-md outline-none"
						/>
						<label
							htmlFor="postalCode"
							className="absolute  font-bold -top-6 left-0 peer-focus:-top-6 peer-focus:text-sky-500 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-placeholder-shown:left-2"
						>
							Postal Code
						</label>
						{errors.postalCode && (
							<span className="text-xs font-bold text-red-600 animate-pulse">
								{errors.postalCode.type === 'required' &&
									'Full Name is required'}
								{errors.postalCode.type === 'minLength' &&
									'Postal Code must not be less than 6 numbers'}
								{errors.postalCode.type === 'maxLength' &&
									'Postal Code must not be more than 6 characters'}
							</span>
						)}
					</div>

					<button
						type="submit"
						className="h-10 w-full bg-btn hover:bg-btnHov text-white text-2xl font-bold rounded-full"
					>
						Proceed
					</button>
				</form>
			</div>
		</PagesLayout>
	);
};
export default Checkout;
