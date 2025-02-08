// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: "@import '@/assets/styles/main.scss';",
				},
			},
		},
	},
	imports: {
		dirs: ['types/constants'],
		presets: [
			{
				from: 'vue',
				imports: ['withDefaults', 'defineProps', 'defineEmits'],
			},
			{
				from: 'date-fns',
				imports: ['format'],
			},
			{
				from: '@splinetool/runtime',
				imports: ['Application'],
			},
		],
	},
	modules: ['nuxt-icons'],
	plugins: [{ src: '~/plugins/aos.js', mode: 'client' }],

	app: {
		head: {
			title: 'LeoParts - sklep motoryzacyjny',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					hid: 'description',
					name: 'description',
					content:
						'LeoParts- Sklep motoryzacyjny Gorzów Wielkopolski,  części samochodowe,opony, warsztaty, tanie części do auta',
				},
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
			script: [
				{
					src: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js',
					type: 'text/javascript',
				},
				{
					type: 'text/javascript',
					children: `
            (function(){
              emailjs.init({
                publicKey: "GnmHBjiFEu_ST15NK",
              });
            })();
          `,
				},
			],
		},
	},
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
});
