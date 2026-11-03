import type { Locale } from '../config';

export type ImpressumContent = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	legalHeading: string;
	fields: { dt: string; dd: string; href?: string }[];
	contentHeading: string;
	contentBody: string;
	disputeHeading: string;
	disputeBefore: string;
	disputeAfter: string;
	linksHeading: string;
	linksBody: string;
};

export const impressum: Record<Locale, ImpressumContent> = {
	en: {
		title: 'Impressum — Mapache Softworks GmbH',
		description: 'Legal notice for Mapache Softworks GmbH.',
		eyebrow: 'Legal notice',
		h1: 'Impressum',
		legalHeading: 'Angaben gemäß § 5 ECG und § 14 UGB',
		fields: [
			{ dt: 'Company', dd: 'Mapache Softworks GmbH' },
			{ dt: 'Legal form', dd: 'Gesellschaft mit beschränkter Haftung' },
			{ dt: 'Registered seat', dd: 'Wien, Austria' },
			{ dt: 'Registered address', dd: 'Leopoldine-Padaurek-Straße 17/3, 1210 Wien, Austria' },
			{ dt: 'Managing director', dd: 'Carmen Violeta Huidobro Peltier' },
			{ dt: 'Commercial register', dd: 'Firmenbuch Wien, FN 681866w' },
			{ dt: 'Share capital', dd: 'EUR 10.000, fully paid up' },
			{
				dt: 'Business purpose',
				dd: 'Software development, trade in software and digital applications (apps), and IT services',
			},
			{ dt: 'Email', dd: 'hola@mapache-soft.com', href: 'mailto:hola@mapache-soft.com' },
			{ dt: 'Website', dd: 'mapache-soft.com', href: 'https://mapache-soft.com' },
		],
		contentHeading: 'Responsible for content',
		contentBody: 'Mapache Softworks GmbH, represented by the managing director listed above.',
		disputeHeading: 'Dispute resolution',
		disputeBefore: 'The European Commission provides an online dispute resolution platform at ',
		disputeAfter: '.',
		linksHeading: 'Liability for external links',
		linksBody:
			'External links are provided for convenience. Mapache Softworks GmbH is not responsible for the content of external websites.',
	},
	es: {
		title: 'Aviso legal — Mapache Softworks GmbH',
		description: 'Aviso legal de Mapache Softworks GmbH.',
		eyebrow: 'Aviso legal',
		h1: 'Aviso legal',
		legalHeading: 'Datos según § 5 ECG y § 14 UGB',
		fields: [
			{ dt: 'Empresa', dd: 'Mapache Softworks GmbH' },
			{ dt: 'Forma jurídica', dd: 'Gesellschaft mit beschränkter Haftung' },
			{ dt: 'Domicilio social', dd: 'Viena, Austria' },
			{ dt: 'Dirección registrada', dd: 'Leopoldine-Padaurek-Straße 17/3, 1210 Wien, Austria' },
			{ dt: 'Directora general', dd: 'Carmen Violeta Huidobro Peltier' },
			{ dt: 'Registro mercantil', dd: 'Firmenbuch Wien, FN 681866w' },
			{ dt: 'Capital social', dd: 'EUR 10.000, totalmente desembolsado' },
			{
				dt: 'Objeto social',
				dd: 'Desarrollo de software, comercio de software y aplicaciones digitales (apps), y servicios de TI',
			},
			{ dt: 'Correo', dd: 'hola@mapache-soft.com', href: 'mailto:hola@mapache-soft.com' },
			{ dt: 'Sitio web', dd: 'mapache-soft.com', href: 'https://mapache-soft.com' },
		],
		contentHeading: 'Responsable del contenido',
		contentBody: 'Mapache Softworks GmbH, representada por la directora general indicada arriba.',
		disputeHeading: 'Resolución de controversias',
		disputeBefore: 'La Comisión Europea ofrece una plataforma de resolución de controversias en línea en ',
		disputeAfter: '.',
		linksHeading: 'Responsabilidad por enlaces externos',
		linksBody:
			'Los enlaces externos se incluyen por comodidad. Mapache Softworks GmbH no responde por el contenido de sitios de terceros.',
	},
};
