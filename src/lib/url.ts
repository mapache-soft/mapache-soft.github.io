const BASE = (import.meta.env.BASE_URL ?? '').replace(/\/+$/, '');

export function url(path: string): string {
	if (!path.startsWith('/')) return path;
	if (path === '/') return `${BASE}/`;
	return `${BASE}${path}`;
}
