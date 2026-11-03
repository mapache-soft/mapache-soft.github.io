import type { Locale } from './config';

export type UiStrings = {
	skipToContent: string;
	homeAria: string;
	primaryNav: string;
	footerNav: string;
	nav: {
		home: string;
		apps: string;
		services: string;
		about: string;
		impressum: string;
	};
	footer: {
		rights: string;
		logoCredit: string;
		privacy: string;
		cookies: string;
		terms: string;
		impressum: string;
	};
	language: string;
	ogImageAlt: string;
	defaultDescription: string;
};

export const ui: Record<Locale, UiStrings> = {
	en: {
		skipToContent: 'Skip to content',
		homeAria: 'Mapache Softworks home',
		primaryNav: 'Primary navigation',
		footerNav: 'Footer navigation',
		nav: {
			home: 'Home',
			apps: 'Apps',
			services: 'Services',
			about: 'About',
			impressum: 'Impressum',
		},
		footer: {
			rights: '© 2026 Mapache Softworks. All rights reserved.',
			logoCredit: 'Logo & colour theme by',
			privacy: 'Privacy',
			cookies: 'Cookies',
			terms: 'Terms',
			impressum: 'Impressum',
		},
		language: 'Language',
		ogImageAlt: 'Mapache Softworks — thoughtful apps and product-minded software work',
		defaultDescription:
			'Independent software company for thoughtful Mac apps and product-minded engineering consulting.',
	},
	es: {
		skipToContent: 'Saltar al contenido',
		homeAria: 'Inicio de Mapache Softworks',
		primaryNav: 'Navegación principal',
		footerNav: 'Enlaces del pie de página',
		nav: {
			home: 'Inicio',
			apps: 'Apps',
			services: 'Servicios',
			about: 'Nosotros',
			impressum: 'Aviso legal',
		},
		footer: {
			rights: '© 2026 Mapache Softworks. Todos los derechos reservados.',
			logoCredit: 'Logo y paleta de color por',
			privacy: 'Privacidad',
			cookies: 'Cookies',
			terms: 'Términos',
			impressum: 'Aviso legal',
		},
		language: 'Idioma',
		ogImageAlt: 'Mapache Softworks — apps bien pensadas y software con enfoque de producto',
		defaultDescription:
			'Empresa de software independiente: apps de Mac bien pensadas y consultoría de ingeniería con enfoque de producto.',
	},
};

export function t(locale: Locale): UiStrings {
	return ui[locale];
}
