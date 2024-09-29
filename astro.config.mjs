import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SignMate Docs',
			social: {
				github: 'https://github.com/saswati-26',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ 
							label: 'Introduction', 
							slug: 'introduction'
						 },
						 {
							label: 'Getting Started',
							slug: 'getting_started'
						 },
						 {
							label: 'Features',
							slug: 'features'
						 },
						 {
							label: 'Admin Website',
							slug: 'admin_website'
						 },
						 {
							label: 'User Guide',
							slug: 'user_guide'
						 },
						 {
							label: 'FAQs',
							slug: 'faqs'
						 }
					],
				}
			],
		}),
	],
});
