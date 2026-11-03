import type { Locale } from '../config';

export type CookiesContent = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	updated: string;
	intro: string;
	sites: { href: string; label: string; note: string }[];
	consent: string;
	whatHeading: string;
	whatP1: string;
	whatP2: string;
	howHeading: string;
	howIntro: string;
	howItems: string[];
	howNote: string;
	choicesHeading: string;
	choicesP1: string;
	choicesP2: string;
	choicesLinks: { href: string; label: string }[];
	choicesP3: string;
	moreHeading: string;
	moreIntro: string;
	moreLinks: { href: string; label: string }[];
};

export const cookies: Record<Locale, CookiesContent> = {
	en: {
		title: 'Cookies — Mapache Softworks GmbH',
		description: 'Cookies policy for Mapache Softworks GmbH and its websites and apps.',
		eyebrow: 'Cookies and similar technologies',
		h1: 'Cookies Policy',
		updated: 'Last updated: July 13, 2026',
		intro: 'Mapache Softworks GmbH ("us", "we", or "our") uses cookies on our websites and apps, including but not limited to:',
		sites: [
			{ href: 'https://mapache-soft.com', label: 'https://mapache-soft.com', note: '(the "Company Website")' },
			{ href: 'https://archiverapp.com', label: 'https://archiverapp.com', note: '(the "Archiver App")' },
			{ href: 'https://renamer.com', label: 'https://renamer.com', note: '(the "Renamer App")' },
		],
		consent:
			'By using any of our websites or apps, you consent to the use of cookies in accordance with this policy. Our Cookies Policy explains what cookies are, how we use cookies, your choices regarding cookies, and further information about cookies.',
		whatHeading: 'What are cookies',
		whatP1:
			'Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the website or a third-party to recognize you and make your next visit easier and the website more useful to you.',
		whatP2:
			'Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.',
		howHeading: 'How Mapache Softworks GmbH uses cookies',
		howIntro:
			'When you use and access our websites and apps, we may place strictly essential cookies in your web browser. We use strictly essential cookies for the following purposes:',
		howItems: [
			'To maintain the security and availability of our websites and apps',
			'To enable certain features that are necessary for the operation of our services',
		],
		howNote:
			'These cookies are necessary for the operation of our websites and apps and cannot be disabled. They do not store any personally identifiable information.',
		choicesHeading: 'What are your choices regarding cookies',
		choicesP1:
			'Since we only use strictly essential cookies, you cannot opt out of these cookies if you wish to use our websites and apps. However, you can manage cookies through your browser settings. Most browsers provide options to manage cookies, including deleting existing cookies and blocking new ones. For detailed instructions, please refer to the help section of your specific web browser.',
		choicesP2: 'You can also find general information about managing cookies on websites like:',
		choicesLinks: [
			{ href: 'http://www.allaboutcookies.org/', label: 'AllAboutCookies' },
			{ href: 'http://www.networkadvertising.org/', label: 'Network Advertising Initiative' },
		],
		choicesP3:
			'Please note that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.',
		moreHeading: 'Where can you find more information about cookies',
		moreIntro: 'You can learn more about cookies at the following third-party websites:',
		moreLinks: [
			{ href: 'http://www.allaboutcookies.org/', label: 'AllAboutCookies: http://www.allaboutcookies.org/' },
			{
				href: 'http://www.networkadvertising.org/',
				label: 'Network Advertising Initiative: http://www.networkadvertising.org/',
			},
		],
	},
	es: {
		title: 'Cookies — Mapache Softworks GmbH',
		description: 'Política de cookies de Mapache Softworks GmbH y de sus sitios y apps.',
		eyebrow: 'Cookies y tecnologías similares',
		h1: 'Política de cookies',
		updated: 'Última actualización: 13 de julio de 2026',
		intro:
			'Mapache Softworks GmbH ("nosotros") usa cookies en nuestros sitios y apps, entre ellos:',
		sites: [
			{ href: 'https://mapache-soft.com', label: 'https://mapache-soft.com', note: '(sitio de la empresa)' },
			{ href: 'https://archiverapp.com', label: 'https://archiverapp.com', note: '(app Archiver)' },
			{ href: 'https://renamer.com', label: 'https://renamer.com', note: '(app Renamer)' },
		],
		consent:
			'Al usar cualquiera de nuestros sitios o apps, aceptas el uso de cookies según esta política. Aquí explicamos qué son, cómo las usamos, qué opciones tienes y dónde saber más.',
		whatHeading: 'Qué son las cookies',
		whatP1:
			'Las cookies son pequeños fragmentos de texto que un sitio envía a tu navegador. Se guardan ahí y permiten que el sitio o un tercero te reconozca, facilite la próxima visita y mejore la experiencia.',
		whatP2:
			'Pueden ser "persistentes" o de "sesión". Las persistentes se quedan en tu computadora o celular cuando te desconectas; las de sesión se borran al cerrar el navegador.',
		howHeading: 'Cómo Mapache Softworks GmbH usa las cookies',
		howIntro:
			'Al usar nuestros sitios y apps, podemos colocar cookies estrictamente esenciales en tu navegador. Las usamos para:',
		howItems: [
			'Mantener la seguridad y disponibilidad de nuestros sitios y apps',
			'Habilitar funciones necesarias para que los servicios funcionen',
		],
		howNote:
			'Estas cookies son necesarias para el funcionamiento y no se pueden desactivar. No guardan información de identificación personal.',
		choicesHeading: 'Qué opciones tienes con las cookies',
		choicesP1:
			'Como solo usamos cookies estrictamente esenciales, no puedes rechazarlas si quieres usar nuestros sitios y apps. Sí puedes gestionarlas en la configuración de tu navegador: la mayoría permite borrar cookies existentes y bloquear nuevas. Revisa la ayuda de tu navegador para los pasos exactos.',
		choicesP2: 'También hay información general sobre cookies en sitios como:',
		choicesLinks: [
			{ href: 'http://www.allaboutcookies.org/', label: 'AllAboutCookies' },
			{ href: 'http://www.networkadvertising.org/', label: 'Network Advertising Initiative' },
		],
		choicesP3:
			'Si borras cookies o no las aceptas, es posible que no puedas usar todas las funciones, guardar preferencias o ver algunas páginas correctamente.',
		moreHeading: 'Dónde saber más sobre cookies',
		moreIntro: 'Puedes leer más en estos sitios de terceros:',
		moreLinks: [
			{ href: 'http://www.allaboutcookies.org/', label: 'AllAboutCookies: http://www.allaboutcookies.org/' },
			{
				href: 'http://www.networkadvertising.org/',
				label: 'Network Advertising Initiative: http://www.networkadvertising.org/',
			},
		],
	},
};
