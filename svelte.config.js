import node from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: node(),
		serviceWorker: {
			register: false,
		},
	},
};
