import type { Locale } from '../config';

export type AppsContent = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	lede: string;
	renamer: {
		eyebrow: string;
		title: string;
		body: string;
		tags: string[];
		open: string;
		download: string;
	};
	archiver: {
		eyebrow: string;
		title: string;
		body: string;
		tags: string[];
		open: string;
		download: string;
	};
};

export const apps: Record<Locale, AppsContent> = {
	en: {
		title: 'Apps — Mapache Softworks',
		description: 'Renamer and Archiver are independent productivity apps published by Mapache Softworks.',
		eyebrow: 'Products',
		h1: 'Independent tools for everyday file work.',
		lede: 'The current product line focuses on utility software that helps people work faster without hiding important choices from them.',
		renamer: {
			eyebrow: 'Renamer 7',
			title: 'Batch File Renamer',
			body: 'Rename thousands of files at once with reusable workflows, live previews, smart undo, and support for common photo, music, extension, CSV, and regular-expression tasks.',
			tags: ['macOS 15+', 'Windows 10+', 'Local AI Assist'],
			open: 'Open Renamer',
			download: 'Download for Mac',
		},
		archiver: {
			eyebrow: 'Archiver 5',
			title: 'Archive Utility for macOS',
			body: 'Open RAR, Zip, 7zip, and dozens more formats. Preview archives before extracting, create password-protected archives, split large files, and handle multiple archives in parallel.',
			tags: ['macOS 26+', 'Archive preview', 'Encrypted archives'],
			open: 'Open Archiver',
			download: 'Download',
		},
	},
	es: {
		title: 'Apps — Mapache Softworks',
		description: 'Renamer y Archiver son apps de productividad independientes de Mapache Softworks.',
		eyebrow: 'Productos',
		h1: 'Herramientas independientes para el trabajo diario con archivos.',
		lede: 'Hoy nos enfocamos en utilidades que te ayudan a trabajar más rápido, sin esconderte las decisiones importantes.',
		renamer: {
			eyebrow: 'Renamer 7',
			title: 'Renombrador de archivos por lotes',
			body: 'Renombra miles de archivos de una vez con flujos reutilizables, vista previa en vivo, deshacer inteligente y soporte para fotos, música, extensiones, CSV y expresiones regulares.',
			tags: ['macOS 15+', 'Windows 10+', 'AI Assist local'],
			open: 'Abrir Renamer',
			download: 'Descargar para Mac',
		},
		archiver: {
			eyebrow: 'Archiver 5',
			title: 'Utilidad de archivos comprimidos para macOS',
			body: 'Abre RAR, Zip, 7zip y docenas de formatos más. Previsualiza antes de extraer, crea archivos con contraseña, divide archivos grandes y procesa varios a la vez.',
			tags: ['macOS 26+', 'Vista previa', 'Archivos cifrados'],
			open: 'Abrir Archiver',
			download: 'Descargar',
		},
	},
};
