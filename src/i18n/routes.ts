import type { Locale } from './config';
import { defaultLocale, locales } from './config';

/** Logical page id → path segment(s) after the locale prefix. Empty = home. */
export const pageRoutes = [
	{ id: 'home', segments: [] as string[] },
	{ id: 'apps', segments: ['apps'] },
	{ id: 'services', segments: ['services'] },
	{ id: 'about', segments: ['about'] },
	{ id: 'impressum', segments: ['impressum'] },
	{ id: 'privacy', segments: ['privacy'] },
	{ id: 'cookies', segments: ['cookies'] },
	{ id: 'terms', segments: ['terms'] },
] as const;

export type PageId = (typeof pageRoutes)[number]['id'];

export type PagePathProps = {
	locale: Locale;
	pageId: PageId;
};

/**
 * Static paths for every locale × page.
 * Default locale is unprefixed; others use `/{locale}/...`.
 * Used by `src/pages/[...slug].astro` (`slug: undefined` = site root).
 */
export function allPageStaticPaths(): {
	params: { slug: string | undefined };
	props: PagePathProps;
}[] {
	return locales.flatMap((locale) =>
		pageRoutes.map((route) => {
			const segments =
				locale === defaultLocale ? [...route.segments] : [locale, ...route.segments];
			return {
				params: {
					slug: segments.length > 0 ? segments.join('/') : undefined,
				},
				props: {
					locale,
					pageId: route.id,
				},
			};
		}),
	);
}
