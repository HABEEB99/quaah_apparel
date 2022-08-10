export default {
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		{ name: 'name', title: 'Name', type: 'string' },
		{ name: 'description', title: 'Descrition', type: 'string' },
		{ name: 'price', title: 'Price', type: 'number' },
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: 'true' },
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 200, // will be ignored if slugify is set
			},
		},
		{
			name: 'numInStock',
			title: 'Number In Stock',
			type: 'number',
		},
		{ name: 'category', title: 'Category', type: 'string' },
		{ name: 'brand', title: 'Brand', type: 'string' },
		{
			name: 'likes',
			title: 'Likes',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'user' }],
				},
			],
		},
		{
			name: 'comments',
			title: 'Comments',
			type: 'array',
			of: [{ type: 'comment' }],
		},
	],
};
