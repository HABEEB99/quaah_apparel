export default {
	name: 'order',
	title: 'Order',
	type: 'document',
	fields: [
		{
			name: 'userName',
			title: 'User Name',
			type: 'string',
		},
		{
			name: 'address',
			title: 'Address',
			type: 'string',
		},
		{
			name: 'city',
			title: 'City',
			type: 'string',
		},
		{
			name: 'postalCode',
			title: 'Postal Code',
			type: 'string',
		},
		{
			name: 'orderedItems',
			title: 'Ordered Items',
			type: 'array',
			of: [
				{
					type: 'orderedItem',
				},
			],
		},
		{
			name: 'itemsPrice',
			title: 'Items Price',
			type: 'number',
		},
		{
			name: 'shippingPrice',
			title: 'Shipping Price',
			type: 'number',
		},
		{
			name: 'totalPrice',
			title: 'Total Price',
			type: 'number',
		},
	],
};
