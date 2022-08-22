import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import PagesLayout from '../../components/layout/PagesLayout';
import Stages from '../../components/stages/Stages';
import { useOrderDetails } from '../../store/orderDetailsStore';

type SelectPaymentProps = {};

const SelectPayment: React.FC<SelectPaymentProps> = () => {
	const { methodOfPayment, addMethodOfPayment } = useOrderDetails();
	const router = useRouter();
	const [paymentMethod, setPaymentMethod] = useState<string>('');

	const placeOrder = (e: any) => {
		e.preventDefault();
		if (paymentMethod !== 'paypal') {
			return toast.error('Sorry! We only support payment with Paypal for now!');
		} else {
			addMethodOfPayment(paymentMethod);
			router.push('/placeOrder');
		}
	};

	useEffect(() => {}, []);
	return (
		<PagesLayout title="SELECT PAYMENT" description="Select payment page">
			<div className="w-full">
				<Stages stage={2} />
				<div className="w-full  h-[70vh] flex flex-col items-center justify-center ">
					<div>
						<h2 className="text-3xl font-bold mb-2">Select Payment Method</h2>
						<form className="flex flex-col space-y-3">
							<div className="flex items-center space-x-2">
								<input
									className="w-6 h-6"
									type="radio"
									id="cash"
									value="cash"
									checked={paymentMethod === 'cash'}
									onChange={(e) => setPaymentMethod(e.target.value)}
								/>
								<label htmlFor="cash" className="text-2xl">
									Cash
								</label>
							</div>

							<div className="flex items-center space-x-2">
								<input
									className="w-6 h-6"
									type="radio"
									id="paypal"
									value="paypal"
									checked={paymentMethod === 'paypal'}
									onChange={(e) => setPaymentMethod(e.target.value)}
								/>
								<label htmlFor="paypal" className="text-2xl">
									Paypal
								</label>
							</div>

							<div className="flex items-center space-x-2">
								<input
									className="w-6 h-6"
									type="radio"
									id="stripe"
									value="stripe"
									checked={paymentMethod === 'stripe'}
									onChange={(e) => setPaymentMethod(e.target.value)}
								/>
								<label htmlFor="stripe" className="text-2xl">
									Stripe
								</label>
							</div>

							<div className="flex items-center space-x-2">
								<input
									className="w-6 h-6"
									type="radio"
									id="bitcoin"
									value="bitcoin"
									checked={paymentMethod === 'bitcoin'}
									onChange={(e) => setPaymentMethod(e.target.value)}
								/>
								<label htmlFor="bitcoin" className="text-2xl">
									Bitcoin
								</label>
							</div>

							<div className="flex justify-between pt-8">
								<Link href="/checkout" passHref>
									<button className="w-28 h-10 rounded-full bg-slate-600 hover:bg-slate-800 text-white font-bold">
										Back
									</button>
								</Link>

								<button
									onClick={placeOrder}
									className="w-28 h-10 rounded-full bg-btn hover:bg-btnHov text-white font-bold"
								>
									Place Order
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</PagesLayout>
	);
};
export default SelectPayment;
