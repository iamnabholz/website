import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeUnwrapImages from 'rehype-unwrap-images';

export default {
	kit: {
		adapter: adapter({
			strict: true
		})
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			rehypePlugins: [rehypeUnwrapImages],
			extensions: ['.md']
		})
	]
};