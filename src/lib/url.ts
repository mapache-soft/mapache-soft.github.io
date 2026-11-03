import { defaultLocale, localePrefix, type Locale } from '../i18n/config';

const BASE = (import.meta.env.BASE_URL ?? '').replace(/\/+$/, '');

function isAssetPath(path: string): boolean {
	return /\.[a-z0-9]+$/i.test(path);
}

/**
 * Build a site-relative URL, optionally scoped to a locale.
 * Page paths get a trailing slash; asset paths (with a file extension) do not.
 * Default locale has no prefix.
 */
export function url(path: string, locale: Locale = defaultLocale): string {
	if (!path.startsWith('/')) return path;

	const prefix = localePrefix(locale);
	if (path === '/') {
		return prefix ? `${BASE}${prefix}/` : `${BASE}/`;
	}

	if (isAssetPath(path)) {
		return `${BASE}${path}`;
	}

	const normalized = path.endsWith('/') ? path : `${path}/`;
	return `${BASE}${prefix}${normalized}`;
}

/** Absolute canonical URL for a locale + path. */
export function absoluteUrl(path: string, locale: Locale, site: URL | undefined): string {
	const relative = url(path, locale);
	if (!site) return relative;
	return new URL(relative, site).href;
}
