import type { Locale } from '../config';

export type ServicesContent = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	lede: string;
	cards: { title: string; body: string }[];
	collab: {
		eyebrow: string;
		h2: string;
		items: string[];
	};
};

export const services: Record<Locale, ServicesContent> = {
	en: {
		title: 'Services — Mapache Softworks',
		description:
			'Consulting, contracting, software development, developer education, and automation strategy from Mapache Softworks.',
		eyebrow: 'Consulting and contracting',
		h1: 'Software help for teams that want useful things shipped well.',
		lede: 'Mapache Softworks can support focused engagements around product engineering, architecture, developer-facing experiences, workshops, and automation decisions.',
		cards: [
			{
				title: 'Software development',
				body: 'Hands-on implementation for web, mobile, macOS, APIs, integrations, release processes, and maintainable internal tooling.',
			},
			{
				title: 'Product and architecture',
				body: 'Decision support for scope, sequencing, technical direction, automation boundaries, and systems that should remain understandable.',
			},
			{
				title: 'Developer education',
				body: 'Workshops, onboarding material, reference implementations, documentation, and practical learning paths for engineering teams.',
			},
			{
				title: 'Developer relations',
				body: 'Technical content, product feedback loops, demos, talks, and adoption work for developer-facing products.',
			},
			{
				title: 'Automation strategy',
				body: 'Clear thinking around what to automate, what not to automate, and how to keep user trust intact when systems become more capable.',
			},
			{
				title: 'Interim technical leadership',
				body: 'Short-term support for planning, hiring signals, delivery operations, and technical clarity during transitions or growth phases.',
			},
		],
		collab: {
			eyebrow: 'Collaboration style',
			h2: 'Best fit for small, thoughtful teams.',
			items: [
				'Discovery calls that turn vague problems into concrete options.',
				'Short advisory engagements for strategy, architecture, or product direction.',
				'Implementation sprints with clear scope and useful handover material.',
				'Remote-friendly work across Europe and beyond, with Vienna as a home base.',
			],
		},
	},
	es: {
		title: 'Servicios — Mapache Softworks',
		description:
			'Consultoría, desarrollo de software, formación para equipos y estrategia de automatización con Mapache Softworks.',
		eyebrow: 'Consultoría y proyectos',
		h1: 'Apoyo de software para equipos que quieren entregar cosas útiles, bien hechas.',
		lede: 'Mapache Softworks puede acompañarte en ingeniería de producto, arquitectura, experiencias para desarrolladores, talleres y decisiones de automatización.',
		cards: [
			{
				title: 'Desarrollo de software',
				body: 'Implementación práctica para web, mobile, macOS, APIs, integraciones, procesos de publicación y herramientas internas fáciles de mantener.',
			},
			{
				title: 'Producto y arquitectura',
				body: 'Apoyo para definir alcance, orden de trabajo, dirección técnica, límites de automatización y sistemas que sigan siendo comprensibles.',
			},
			{
				title: 'Formación para equipos',
				body: 'Talleres, material de onboarding, ejemplos de referencia, documentación y rutas de aprendizaje prácticas para equipos de ingeniería.',
			},
			{
				title: 'Relaciones con desarrolladores',
				body: 'Contenido técnico, ciclos de feedback de producto, demos, charlas y adopción de productos pensados para desarrolladores.',
			},
			{
				title: 'Estrategia de automatización',
				body: 'Claridad sobre qué automatizar, qué no, y cómo cuidar la confianza de quien usa el producto cuando los sistemas se vuelven más capaces.',
			},
			{
				title: 'Liderazgo técnico temporal',
				body: 'Apoyo de corto plazo en planeación, criterios de contratación, operación de entrega y claridad técnica en momentos de cambio o crecimiento.',
			},
		],
		collab: {
			eyebrow: 'Cómo colaboramos',
			h2: 'Ideal para equipos pequeños que cuidan el detalle.',
			items: [
				'Llamadas de descubrimiento que convierten problemas difusos en opciones concretas.',
				'Asesorías cortas de estrategia, arquitectura o dirección de producto.',
				'Sprints de implementación con alcance claro y buena documentación de entrega.',
				'Trabajo remoto en Europa y más allá, con Viena como base.',
			],
		},
	},
};
