// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGiscus from 'starlight-giscus'
// https://astro.build/config
export default defineConfig({
	site: 'http://localhost:4321/',
	base: '/',
	integrations: [
		starlight({
			plugins: [
				starlightGiscus({
					repo: 'dragomano/starlight-giscus',
					repoId: 'R_kgDONyBz0w',
					category: 'Q&A',
					categoryId: 'DIC_kwDONyBz084Cme94',
					inputPosition: 'top'
				})
			],
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],

		}),
	],
});
