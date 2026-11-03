import type { Locale } from '../config';

export type NotFoundContent = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	lede: string;
	home: string;
	contact: string;
};

export const notFound: Record<Locale, NotFoundContent> = {
	en: {
		title: 'Page not found — Mapache Softworks',
		description: 'Sorry, requested page could not be found.',
		eyebrow: '404',
		h1: 'Page not found',
		lede: 'The page you are looking for does not exist or has moved.',
		home: 'Back to home',
		contact: 'Get in touch',
	},
	es: {
		title: 'Página no encontrada — Mapache Softworks',
		description: 'Lo sentimos, no encontramos la página que buscas.',
		eyebrow: '404',
		h1: 'Página no encontrada',
		lede: 'La página que buscas no existe o cambió de lugar.',
		home: 'Volver al inicio',
		contact: 'Escríbenos',
	},
};
