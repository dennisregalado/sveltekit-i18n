export const load = async ({ locals }) => {
	const { locale, localization } = locals;

	return {
		locale,
		localization,
		now: new Date(),
		/**
		 * Stream countries to reduce TTFB
		 */
		countries: import('$lib/countries.server.js').then(({ countries }) => countries)
	};
};
