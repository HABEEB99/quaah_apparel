export default {
	name: 'user',
	title: 'User',
	type: 'document',
	fields: [
		{
			name: 'userName',
			title: 'User Name',
			type: 'string',
		},
		{
			name: 'fullName',
			title: 'Full Name',
			type: 'string',
		},
		{
			name: 'email',
			title: 'Email',
			type: 'string',
		},
		{
			name: 'picture',
			title: 'Picture',
			type: 'string',
		},
		{
			name: 'orders',
			title: 'Orders',
			type: 'array',
			of: [{ type: 'order' }],
		},
	],
};
