import { getLocaleFromUrl } from '$i18n';

/**
 * Reroutes sub-path URLs into defined routes
 * /en-us -> /
 * /en-mx/products -> /products
 * /en-ca/collections/all -> /collections/all
 * https://kit.svelte.dev/docs/hooks#universal-hooks-reroute
 */
export function reroute({ url }) {
	const locale = getLocaleFromUrl(url);

	if (locale) {
		const path = url.pathname.replace(`/${locale}`, '');
		return path || '/';
	}
}
