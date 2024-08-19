import { countries } from '$lib/countries.server';
import { getLocale } from '$i18n';

export const handle = async ({ event, resolve }) => {
	const { locals, request } = event;

	/**
	 * Use countries as locales,
	 * get locale from request & add to locals
	 */
	locals.locale = getLocale(request, Object.keys(countries));

	/**
	 * Pass the current localization
	 */
	locals.localization = countries[locals.locale];

	return await resolve(event, {
		/**
		 * Preload assets
		 */
		preload: ({ type }) => ['js', 'css', 'font'].includes(type),
		/**
		 * Replace %lang% placeholder in HTML with the current locale
		 */
		transformPageChunk: ({ html }) => html.replace('%lang%', locals.localization.language)
	});
};
