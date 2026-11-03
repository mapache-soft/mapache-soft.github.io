import type { Locale } from '../config';

export type PrivacyContent = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	whoHeading: string;
	whoIntro: string;
	whatHeading: string;
	whatIntro: string;
	whatItems: { label: string; text: string }[];
	basisHeading: string;
	basisBody: string;
	retainHeading: string;
	retainBody: string;
	rightsHeading: string;
	rightsBody: string;
	thirdHeading: string;
	thirdBody: string;
	changesHeading: string;
	changesBody: string;
};

export const privacy: Record<Locale, PrivacyContent> = {
	en: {
		title: 'Privacy — Mapache Softworks GmbH',
		description: 'Privacy policy for Mapache Softworks GmbH and its apps and services.',
		eyebrow: 'Data protection',
		h1: 'Privacy Policy',
		whoHeading: 'Who is responsible',
		whoIntro: 'The data controller for this website and the services offered here is:',
		whatHeading: 'What data we collect and why',
		whatIntro:
			'We only collect and process personal data when there is a specific purpose and a valid legal basis for doing so.',
		whatItems: [
			{
				label: 'Contact emails:',
				text: 'When you email us, we process your address and message content to respond and correspond with you.',
			},
			{
				label: 'Website visits:',
				text: 'This static site does not use analytics cookies or trackers by default. Hosting infrastructure may log technical data such as IP address, browser type, and requested pages for security and availability.',
			},
			{
				label: 'App usage:',
				text: 'Our apps process files locally on your device by default and do not send file contents or filenames to our servers unless a feature explicitly requires it.',
			},
		],
		basisHeading: 'Legal basis',
		basisBody:
			'Processing is based on your consent, contract performance, legal obligations, or our legitimate interest to operate the website and communicate with visitors, depending on the specific situation.',
		retainHeading: 'How long we keep data',
		retainBody:
			'We retain personal data only as long as necessary for the purpose it was collected, or as required by law.',
		rightsHeading: 'Your rights',
		rightsBody:
			'Under the GDPR, you have the right to access, rectify, erase, restrict processing, object to processing, and request data portability. You can contact us at any time to exercise these rights.',
		thirdHeading: 'Third-party services',
		thirdBody:
			'We may link to external websites or use hosting and communication providers. Those providers process data under their own privacy policies.',
		changesHeading: 'Changes to this policy',
		changesBody:
			'We may update this policy as the website, apps, or legal requirements change. The current version is always available on this page.',
	},
	es: {
		title: 'Privacidad — Mapache Softworks GmbH',
		description: 'Política de privacidad de Mapache Softworks GmbH y de sus apps y servicios.',
		eyebrow: 'Protección de datos',
		h1: 'Política de privacidad',
		whoHeading: 'Quién es responsable',
		whoIntro: 'El responsable del tratamiento de este sitio web y de los servicios ofrecidos aquí es:',
		whatHeading: 'Qué datos recopilamos y por qué',
		whatIntro:
			'Solo recopilamos y procesamos datos personales cuando hay un propósito específico y una base legal válida.',
		whatItems: [
			{
				label: 'Correos de contacto:',
				text: 'Cuando nos escribes, procesamos tu dirección y el contenido del mensaje para responder y mantener la correspondencia.',
			},
			{
				label: 'Visitas al sitio:',
				text: 'Este sitio estático no usa cookies de analítica ni rastreadores por defecto. El hosting puede registrar datos técnicos como IP, tipo de navegador y páginas solicitadas, por seguridad y disponibilidad.',
			},
			{
				label: 'Uso de las apps:',
				text: 'Nuestras apps procesan archivos en tu dispositivo por defecto y no envían contenidos ni nombres de archivo a nuestros servidores, salvo que una función lo pida de forma explícita.',
			},
		],
		basisHeading: 'Base legal',
		basisBody:
			'El tratamiento se basa en tu consentimiento, la ejecución de un contrato, obligaciones legales o nuestro interés legítimo de operar el sitio y comunicarnos con quienes nos visitan, según el caso.',
		retainHeading: 'Cuánto tiempo conservamos los datos',
		retainBody:
			'Conservamos datos personales solo el tiempo necesario para el fin con el que se recopilaron, o el que exija la ley.',
		rightsHeading: 'Tus derechos',
		rightsBody:
			'Según el RGPD, tienes derecho de acceso, rectificación, eliminación, limitación del tratamiento, oposición y portabilidad. Puedes escribirnos en cualquier momento para ejercerlos.',
		thirdHeading: 'Servicios de terceros',
		thirdBody:
			'Podemos enlazar a sitios externos o usar proveedores de hosting y comunicación. Esos proveedores tratan datos según sus propias políticas de privacidad.',
		changesHeading: 'Cambios a esta política',
		changesBody:
			'Podemos actualizar esta política si cambian el sitio, las apps o los requisitos legales. La versión vigente siempre está en esta página.',
	},
};
