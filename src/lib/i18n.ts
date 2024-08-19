import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { page } from '$app/stores';

/**
 * The default locale for the app.
 * This locale is used when no specific locale is specified in the URL.
 * For example:
 * - Default locale URL: "/collections/all"
 * - Non-default locale URL: "/en-us/collections/all"
 */
export const defaultLocale = 'en-us';

/**
 * Gets the locale from a request, accepts an array of locales
 * Returns matched locale of locales e.g en-us, en-ca, fr-ca
 * Fallsback & redirects to defaultLocale /en-mx/collections/all -> /collections/all
 */
export function getLocale(request: Request, locales: string[]): string {
	const urlLocale = getLocaleFromUrl(request.url);
	const detectedLocale = locales.find((l) => l == urlLocale);

	/**
	 * If invalid locale or is defaultLocale then redirect to path without locale
	 * /en-us/collections/all -> /collections/all
	 * /en-hi/products -> /products
	 */
	if ((!detectedLocale && urlLocale) || detectedLocale === defaultLocale) {
		const requestUrl = request.url;
		const withoutLocaleUrl = requestUrl.replace(`/${urlLocale}`, '');
		redirect(307, withoutLocaleUrl);
	}

	/**
	 * Return the defaultLocale
	 */
	return detectedLocale || defaultLocale;
}

/**
 * Matches strings like "en", "fr", "en-us", etc.
 */
export const getLocaleFromUrl = (url: URL | string): string | undefined => {
	const locale = new URL(url).pathname.split('/')[1];

	return /^[a-z]{2}(-[a-z]{2})?$/.test(locale) ? locale : undefined;
};

/**
 * Translates a path with a locale
 * /collections/all -> /en-us/collections/all
 * /en-us/collections/all -> /en-jp/collections/all
 */
export function getPathWithLocale(locale: string, path: string) {
	const currentLocale = get(page).data.locale;

	let pathPrefix = `/${locale}`;
	let pathname = path.replace(`/${currentLocale}`, '').replace(pathPrefix, '');

	const isDefaultLocale = locale == defaultLocale;

	if (isDefaultLocale) {
		return pathname || '/';
	}

	return pathPrefix + pathname;
}
