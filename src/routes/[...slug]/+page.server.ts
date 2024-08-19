import { redirect } from '@sveltejs/kit';

export const load = async () => {
	return {
		/**
		 * Routes for testing with Link component
		 */
		routes: [
			{
				href: '/'
			},
			{
				href: '/abc'
			},
			{
				href: '/hello-world'
			}, 
			{
				href: '/123'
			}
		]
	};
};

export const actions = {
	/**
	 * Redirect to a specified localized route
	 */
	locale: async ({ request }) => {
		const formData = await request.formData();

		const redirectTo = formData.get('redirectTo');

		/**
		 * Execute any server side logic here
		 * e.g. update session, Shopify buyerIdentity, etc.
		 */

		if (redirectTo && typeof redirectTo === 'string') {
			redirect(307, redirectTo);
		}
	}
};
