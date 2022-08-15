import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../utils/sanity';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const user = req.body;

		client
			.createIfNotExists(user)
			.then(() => res.status(200).json('Logged in successfully'));
	}
};

export default handler;
