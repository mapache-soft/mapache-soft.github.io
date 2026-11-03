import type { Locale } from '../config';

export type AboutContent = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	lede: string;
	principles: {
		eyebrow: string;
		h2: string;
		items: { label: string; text: string }[];
	};
	founder: {
		eyebrow: string;
		h2: string;
		photoAlt: string;
		p1: string;
		p2: string;
		ctaHello: string;
		ctaServices: string;
	};
	cards: {
		location: { title: string; body: string };
		company: { title: string; bodyBefore: string; impressum: string; bodyAfter: string };
		contact: { title: string; bodyBefore: string; bodyAfter: string };
	};
};

export const about: Record<Locale, AboutContent> = {
	en: {
		title: 'About — Mapache Softworks',
		description:
			'Learn about Mapache Softworks: the founder, operating principles, and how we build independent apps and software consulting services.',
		eyebrow: 'About the company',
		h1: 'Small studio, careful software.',
		lede: 'Mapache Softworks is an independent software company run from Vienna. We ship our own apps and help teams build software that is useful, understandable, and respectful of the people who use it.',
		principles: {
			eyebrow: 'Principles',
			h2: 'How we work.',
			items: [
				{
					label: 'Own the product:',
					text: 'We build things we are proud to maintain and support for years.',
				},
				{
					label: 'Respect the user:',
					text: 'Privacy defaults, local processing, and clear choices matter.',
				},
				{
					label: 'Keep it understandable:',
					text: 'Simple systems and clear code age better than clever ones.',
				},
				{
					label: 'Ship steadily:',
					text: 'Small improvements, released often, beat giant unreleased plans.',
				},
			],
		},
		founder: {
			eyebrow: 'Founder',
			h2: 'Carmen Huidobro',
			photoAlt: 'Carmen Huidobro',
			p1: 'Carmen is the founder of Mapache Softworks. She builds independent apps and helps teams create software that is useful, understandable, and respectful of the people who use it.',
			p2: 'Mapache Softworks is intentionally small, which keeps communication direct and decisions fast. For larger projects we collaborate with a trusted network of designers, engineers, and specialists.',
			ctaHello: 'Say hello',
			ctaServices: 'See services',
		},
		cards: {
			location: {
				title: 'Location',
				body: 'Based in Vienna, Austria. Remote-friendly and happy to work with teams across Europe and beyond.',
			},
			company: {
				title: 'Company',
				bodyBefore: 'Mapache Softworks is registered in Austria. For legal details, see the ',
				impressum: 'Impressum',
				bodyAfter: '.',
			},
			contact: {
				title: 'Contact',
				bodyBefore: 'Questions, project ideas, or support requests are welcome at ',
				bodyAfter: '.',
			},
		},
	},
	es: {
		title: 'Nosotros — Mapache Softworks',
		description:
			'Conoce Mapache Softworks: la fundadora, los principios de trabajo y cómo creamos apps independientes y servicios de consultoría.',
		eyebrow: 'Sobre la empresa',
		h1: 'Estudio pequeño, software con criterio.',
		lede: 'Mapache Softworks es una empresa de software independiente con base en Viena. Publicamos nuestras propias apps y ayudamos a equipos a crear software útil, claro y respetuoso con quienes lo usan.',
		principles: {
			eyebrow: 'Principios',
			h2: 'Cómo trabajamos.',
			items: [
				{
					label: 'Hacernos cargo del producto:',
					text: 'Construimos cosas que nos enorgullece mantener y dar soporte durante años.',
				},
				{
					label: 'Respetar a quien usa el producto:',
					text: 'Importan la privacidad por defecto, el procesamiento local y las opciones claras.',
				},
				{
					label: 'Mantenerlo comprensible:',
					text: 'Los sistemas simples y el código claro envejecen mejor que las soluciones rebuscadas.',
				},
				{
					label: 'Entregar con constancia:',
					text: 'Mejoras pequeñas y frecuentes ganan a planes enormes que nunca salen.',
				},
			],
		},
		founder: {
			eyebrow: 'Fundadora',
			h2: 'Carmen Huidobro',
			photoAlt: 'Carmen Huidobro',
			p1: 'Carmen es la fundadora de Mapache Softworks. Crea apps independientes y ayuda a equipos a construir software útil, claro y respetuoso con quienes lo usan.',
			p2: 'Mapache Softworks es pequeña a propósito: la comunicación es directa y las decisiones, rápidas. En proyectos más grandes colaboramos con una red de confianza de diseñadores, ingenieros y especialistas.',
			ctaHello: 'Escríbenos',
			ctaServices: 'Ver servicios',
		},
		cards: {
			location: {
				title: 'Ubicación',
				body: 'Con base en Viena, Austria. Trabajamos en remoto y con equipos en Europa y más allá.',
			},
			company: {
				title: 'Empresa',
				bodyBefore: 'Mapache Softworks está registrada en Austria. Para detalles legales, consulta el ',
				impressum: 'Aviso legal',
				bodyAfter: '.',
			},
			contact: {
				title: 'Contacto',
				bodyBefore: 'Preguntas, ideas de proyecto o soporte: escríbenos a ',
				bodyAfter: '.',
			},
		},
	},
};
