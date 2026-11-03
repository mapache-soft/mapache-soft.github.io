import type { Locale } from '../config';

export type HomeContent = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	lede: string;
	ctaServices: string;
	ctaApps: string;
	renamer: {
		eyebrow: string;
		title: string;
		body: string;
		tags: string[];
		visit: string;
	};
	archiver: {
		eyebrow: string;
		title: string;
		body: string;
		tags: string[];
		visit: string;
	};
	consulting: {
		eyebrow: string;
		h2: string;
		body: string;
		items: { label: string; text: string }[];
		ctaMail: string;
		ctaServices: string;
	};
};

export const home: Record<Locale, HomeContent> = {
	en: {
		title: 'Mapache Softworks — Apps and software consulting',
		description:
			'Mapache Softworks builds independent apps and offers software engineering, product strategy, automation, and developer education services.',
		eyebrow: 'Independent software from Vienna',
		h1: 'Thoughtful apps and product-minded software work.',
		lede: 'Mapache Softworks is the company behind focused software products and hands-on consulting for teams who care about building useful, trustworthy technology.',
		ctaServices: 'Work with us',
		ctaApps: 'Explore the apps',
		renamer: {
			eyebrow: 'App',
			title: 'Renamer',
			body: 'Batch rename thousands of files with reusable workflows, live previews, smart undo, and local AI Assist when you need a starting point.',
			tags: ['macOS', 'Windows', 'Batch workflows'],
			visit: 'Visit Renamer',
		},
		archiver: {
			eyebrow: 'App',
			title: 'Archiver',
			body: 'Open RAR, Zip, 7zip, and dozens more archive formats on macOS. Preview without extracting and create encrypted archives when privacy matters.',
			tags: ['macOS', 'Archive preview', 'AES-256'],
			visit: 'Visit Archiver',
		},
		consulting: {
			eyebrow: 'Consulting and contracting',
			h2: 'Help for teams building developer-facing and user-respecting software.',
			body: 'I can help with product engineering, architecture decisions, developer education, technical content, automation strategy, and the glue work that turns ideas into shipped, maintainable software.',
			items: [
				{
					label: 'Software development:',
					text: 'web, mobile, macOS, APIs, release workflows, and pragmatic architecture.',
				},
				{
					label: 'Developer enablement:',
					text: 'documentation, workshops, onboarding paths, demos, and education programs.',
				},
				{
					label: 'Automation strategy:',
					text: 'choosing what to automate, what to keep human, and how to preserve trust.',
				},
			],
			ctaMail: 'Start a conversation',
			ctaServices: 'Services structure',
		},
	},
	es: {
		title: 'Mapache Softworks — Apps y consultoría de software',
		description:
			'Mapache Softworks crea apps independientes y ofrece ingeniería de software, estrategia de producto, automatización y formación para equipos de desarrollo.',
		eyebrow: 'Software independiente desde Viena',
		h1: 'Apps bien pensadas y software con enfoque de producto.',
		lede: 'Mapache Softworks está detrás de productos de software enfocados y de consultoría práctica para equipos que quieren construir tecnología útil y confiable.',
		ctaServices: 'Colaboremos',
		ctaApps: 'Ver las apps',
		renamer: {
			eyebrow: 'App',
			title: 'Renamer',
			body: 'Renombra miles de archivos de una vez con flujos reutilizables, vista previa en vivo, deshacer inteligente y AI Assist local cuando necesitas un punto de partida.',
			tags: ['macOS', 'Windows', 'Flujos reutilizables'],
			visit: 'Ir a Renamer',
		},
		archiver: {
			eyebrow: 'App',
			title: 'Archiver',
			body: 'Abre RAR, Zip, 7zip y docenas de formatos comprimidos en macOS. Previsualiza sin extraer y crea archivos cifrados cuando la privacidad importa.',
			tags: ['macOS', 'Vista previa', 'AES-256'],
			visit: 'Ir a Archiver',
		},
		consulting: {
			eyebrow: 'Consultoría y proyectos',
			h2: 'Apoyo para equipos que construyen software para desarrolladores y para quienes lo usan.',
			body: 'Puedo ayudar con ingeniería de producto, arquitectura, formación técnica, contenido, estrategia de automatización y todo lo que hace falta para pasar de una idea a software entregado y mantenible.',
			items: [
				{
					label: 'Desarrollo de software:',
					text: 'web, mobile, macOS, APIs, procesos de publicación y arquitectura práctica.',
				},
				{
					label: 'Formación para equipos:',
					text: 'documentación, talleres, onboarding, demos y programas de aprendizaje.',
				},
				{
					label: 'Estrategia de automatización:',
					text: 'decidir qué automatizar, qué dejar en manos humanas y cómo cuidar la confianza.',
				},
			],
			ctaMail: 'Escríbenos',
			ctaServices: 'Ver servicios',
		},
	},
};
