export const locales = ['en', 'es'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** BCP 47 tags used in <html lang> and hreflang. */
export const localeTags: Record<Locale, string> = {
	en: 'en',
	es: 'es',
};

/** Open Graph locale codes. */
export const ogLocales: Record<Locale, string> = {
	en: 'en_US',
	es: 'es_ES',
};

export const localeLabels: Record<Locale, string> = {
	en: 'English',
	es: 'Español',
};

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}

/** URL prefix for a locale (empty for default). */
export function localePrefix(locale: Locale): string {
	return locale === defaultLocale ? '' : `/${locale}`;
}

/**
 * Strip a leading locale segment from a pathname.
 * `/es/apps/` -> { locale: 'es', path: '/apps/' }
 * `/apps/` -> { locale: 'en', path: '/apps/' }
 */
export function parseLocalePath(pathname: string): { locale: Locale; path: string } {
	const clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
	const parts = clean.split('/').filter(Boolean);
	const first = parts[0];
	if (first && isLocale(first) && first !== defaultLocale) {
		const rest = parts.slice(1).join('/');
		return {
			locale: first,
			path: rest ? `/${rest}${clean.endsWith('/') ? '/' : ''}` : '/',
		};
	}
	return { locale: defaultLocale, path: clean || '/' };
}
