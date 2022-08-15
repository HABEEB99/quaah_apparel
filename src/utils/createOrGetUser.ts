import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { userProp } from '../../typings';
import { BASE_URL } from './baseUrl';

export const createOrGetUser = async (response: any, addUser: any) => {
	const decodedJwt: userProp = jwt_decode(response.credential);
	console.log(decodedJwt);
	const { given_name, name, email, picture, sub } = decodedJwt;

	const user = {
		_id: sub,
		_type: 'user',
		userName: given_name,
		fullName: name,
		email: email,
		picture: picture,
	};

	addUser(user);

	await axios.post(`${BASE_URL}/api/login`, user);
};
