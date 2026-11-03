import type { Locale } from '../config';

export type TermsSection = { heading: string; paragraphs: string[] };

export type TermsContent = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	updated: string;
	intro: string[];
	sections: TermsSection[];
	contactHeading: string;
	contactBefore: string;
	contactLink: string;
	contactAfter: string;
};

export const terms: Record<Locale, TermsContent> = {
	en: {
		title: 'Terms — Mapache Softworks GmbH',
		description: 'Terms of Service for Mapache Softworks GmbH and the mapache-soft.com website.',
		eyebrow: 'Terms and conditions',
		h1: 'Terms of Service',
		updated: 'Last updated: July 13, 2026',
		intro: [
			'These Terms of Service ("Terms", "Terms of Service") govern your relationship with the https://mapache-soft.com website (the "Service") operated by Mapache Softworks GmbH ("us", "we", or "our").',
			'Please read these Terms of Service carefully before using the Service. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.',
		],
		sections: [
			{
				heading: 'Purchases',
				paragraphs: [
					'If you wish to purchase any product, license, or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your payment information, billing address, and account or licensing details.',
					'You represent and warrant that: (i) you have the legal right to use any payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete. By submitting such information, you grant us the right to provide the information to third parties for purposes of facilitating the completion of Purchases.',
					'We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons. We reserve the right to refuse or cancel your order if fraud or an unauthorised or illegal transaction is suspected.',
				],
			},
			{
				heading: 'Availability, Errors and Inaccuracies',
				paragraphs: [
					'We are constantly updating our offerings of products and services on the Service. The products or services available on our Service may be mispriced, described inaccurately, or unavailable, and we may experience delays in updating information on the Service and in our advertising on other web sites. We cannot and do not guarantee the accuracy or completeness of any information, including prices, product images, specifications, availability, and services. We reserve the right to change or update information and to correct errors, inaccuracies, or omissions at any time without prior notice.',
				],
			},
			{
				heading: 'Contests, Sweepstakes and Promotions',
				paragraphs: [
					'Any contests, sweepstakes or other promotions (collectively, "Promotions") made available through the Service may be governed by rules that are separate from these Terms. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms, the Promotion rules will apply.',
				],
			},
			{
				heading: 'Intellectual Property',
				paragraphs: [
					'The Service and its original content, features and functionality are and will remain the exclusive property of Mapache Softworks GmbH and its licensors. The Service is protected by copyright, trademark, and other laws of both Austria and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Mapache Softworks GmbH.',
				],
			},
			{
				heading: 'Links To Other Web Sites',
				paragraphs: [
					'Our Service may contain links to third-party web sites or services that are not owned or controlled by Mapache Softworks GmbH. Mapache Softworks GmbH has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.',
					'You further acknowledge and agree that Mapache Softworks GmbH shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.',
				],
			},
			{
				heading: 'Termination',
				paragraphs: [
					'We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.',
				],
			},
			{
				heading: 'Limitation Of Liability',
				paragraphs: [
					'In no event shall Mapache Softworks GmbH, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.',
				],
			},
			{
				heading: 'Disclaimer',
				paragraphs: [
					'Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.',
					'Mapache Softworks GmbH, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.',
				],
			},
			{
				heading: 'Governing Law',
				paragraphs: [
					'These Terms shall be governed and construed in accordance with the laws of Austria, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.',
				],
			},
			{
				heading: 'Changes',
				paragraphs: [
					'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.',
				],
			},
		],
		contactHeading: 'Contact Us',
		contactBefore: 'If you have any questions about these Terms, please ',
		contactLink: 'contact us',
		contactAfter: '.',
	},
	es: {
		title: 'Términos — Mapache Softworks GmbH',
		description: 'Términos de servicio de Mapache Softworks GmbH y del sitio mapache-soft.com.',
		eyebrow: 'Términos y condiciones',
		h1: 'Términos de servicio',
		updated: 'Última actualización: 13 de julio de 2026',
		intro: [
			'Estos Términos de servicio ("Términos") rigen tu relación con el sitio https://mapache-soft.com (el "Servicio") operado por Mapache Softworks GmbH ("nosotros" o "nuestro").',
			'Lee estos Términos con cuidado antes de usar el Servicio. Tu acceso y uso del Servicio están condicionados a la aceptación y cumplimiento de estos Términos. Aplican a todos los visitantes, usuarios y demás personas que accedan o usen el Servicio. Al acceder o usar el Servicio aceptas quedar obligado por estos Términos. Si no estás de acuerdo con alguna parte, no debes acceder al Servicio.',
		],
		sections: [
			{
				heading: 'Compras',
				paragraphs: [
					'Si deseas comprar cualquier producto, licencia o servicio disponible a través del Servicio ("Compra"), se te puede pedir información relevante para tu Compra, incluida, entre otra, información de pago, dirección de facturación y detalles de cuenta o licencia.',
					'Declaras y garantizas que: (i) tienes el derecho legal de usar cualquier método de pago en conexión con cualquier Compra; y (ii) la información que nos proporcionas es verdadera, correcta y completa. Al enviar esa información, nos otorgas el derecho de proporcionarla a terceros para facilitar la finalización de las Compras.',
					'Nos reservamos el derecho de rechazar o cancelar tu pedido en cualquier momento por motivos que incluyen, entre otros: disponibilidad del producto o servicio, errores en la descripción o precio, error en tu pedido u otros motivos. También podemos rechazar o cancelar tu pedido si se sospecha fraude o una transacción no autorizada o ilegal.',
				],
			},
			{
				heading: 'Disponibilidad, errores e inexactitudes',
				paragraphs: [
					'Actualizamos de forma continua la oferta de productos y servicios en el Servicio. Los productos o servicios pueden estar mal cotizados, descritos de forma inexacta o no disponibles, y puede haber demoras al actualizar la información en el Servicio y en publicidad en otros sitios. No garantizamos la exactitud ni la integridad de ninguna información, incluidos precios, imágenes, especificaciones, disponibilidad y servicios. Nos reservamos el derecho de cambiar o actualizar información y de corregir errores, inexactitudes u omisiones en cualquier momento sin aviso previo.',
				],
			},
			{
				heading: 'Concursos, sorteos y promociones',
				paragraphs: [
					'Cualquier concurso, sorteo u otra promoción (en conjunto, "Promociones") disponible a través del Servicio puede regirse por reglas separadas de estos Términos. Si participas en alguna Promoción, revisa las reglas aplicables y nuestra Política de privacidad. Si las reglas de una Promoción entran en conflicto con estos Términos, prevalecen las reglas de la Promoción.',
				],
			},
			{
				heading: 'Propiedad intelectual',
				paragraphs: [
					'El Servicio y su contenido original, funciones y funcionalidad son y seguirán siendo propiedad exclusiva de Mapache Softworks GmbH y sus licenciantes. El Servicio está protegido por derechos de autor, marcas y otras leyes de Austria y de otros países. Nuestras marcas y la imagen comercial no pueden usarse en relación con ningún producto o servicio sin el consentimiento previo por escrito de Mapache Softworks GmbH.',
				],
			},
			{
				heading: 'Enlaces a otros sitios web',
				paragraphs: [
					'Nuestro Servicio puede contener enlaces a sitios o servicios de terceros que no son propiedad ni están controlados por Mapache Softworks GmbH. Mapache Softworks GmbH no tiene control ni asume responsabilidad por el contenido, las políticas de privacidad o las prácticas de sitios o servicios de terceros.',
					'Reconoces y aceptas que Mapache Softworks GmbH no será responsable, directa o indirectamente, de ningún daño o pérdida causado o alegadamente causado por o en conexión con el uso o la confianza en cualquier contenido, bienes o servicios disponibles en o a través de dichos sitios o servicios. Te recomendamos leer los términos y las políticas de privacidad de cualquier sitio o servicio de terceros que visites.',
				],
			},
			{
				heading: 'Terminación',
				paragraphs: [
					'Podemos terminar o suspender tu acceso de inmediato, sin aviso previo ni responsabilidad, por cualquier motivo, incluido si incumples los Términos. Tras la terminación, tu derecho a usar el Servicio cesará de inmediato.',
				],
			},
			{
				heading: 'Limitación de responsabilidad',
				paragraphs: [
					'En ningún caso Mapache Softworks GmbH, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluidos, entre otros, pérdida de ganancias, datos, uso, reputación comercial u otras pérdidas intangibles, resultantes de (i) tu acceso o uso o la imposibilidad de acceder o usar el Servicio; (ii) cualquier conducta o contenido de terceros en el Servicio; (iii) cualquier contenido obtenido del Servicio; y (iv) acceso, uso o alteración no autorizados de tus transmisiones o contenido, ya sea por garantía, contrato, responsabilidad extracontractual (incluida la negligencia) u otra teoría legal, hayamos sido o no informados de la posibilidad de tal daño, e incluso si un remedio previsto aquí falla en su propósito esencial.',
				],
			},
			{
				heading: 'Descargo de responsabilidad',
				paragraphs: [
					'Tu uso del Servicio es bajo tu exclusivo riesgo. El Servicio se ofrece "TAL CUAL" y "SEGÚN DISPONIBILIDAD", sin garantías de ningún tipo, expresas o implícitas, incluidas, entre otras, las de comerciabilidad, idoneidad para un fin particular, no infracción o curso de ejecución.',
					'Mapache Softworks GmbH, sus subsidiarias, afiliados y licenciantes no garantizan que a) el Servicio funcione de forma ininterrumpida, segura o disponible en un momento o lugar particular; b) se corrijan errores o defectos; c) el Servicio esté libre de virus u otros componentes dañinos; o d) los resultados de usar el Servicio cumplan tus requisitos.',
				],
			},
			{
				heading: 'Ley aplicable',
				paragraphs: [
					'Estos Términos se rigen e interpretan de acuerdo con las leyes de Austria, sin tener en cuenta sus disposiciones sobre conflicto de leyes. Nuestra falta de hacer valer cualquier derecho o disposición no se considerará una renuncia a esos derechos. Si alguna disposición se declara inválida o inaplicable por un tribunal, las demás seguirán en vigor. Estos Términos constituyen el acuerdo completo entre nosotros respecto al Servicio y sustituyen cualquier acuerdo previo al respecto.',
				],
			},
			{
				heading: 'Cambios',
				paragraphs: [
					'Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, intentaremos dar al menos 30 días de aviso antes de que entren en vigor. Qué constituye un cambio material lo determinamos a nuestra sola discreción. Al seguir accediendo o usando el Servicio después de que esas revisiones entren en vigor, aceptas quedar obligado por los términos revisados. Si no estás de acuerdo con los nuevos términos, deja de usar el Servicio.',
				],
			},
		],
		contactHeading: 'Contáctanos',
		contactBefore: 'Si tienes preguntas sobre estos Términos, por favor ',
		contactLink: 'contáctanos',
		contactAfter: '.',
	},
};
