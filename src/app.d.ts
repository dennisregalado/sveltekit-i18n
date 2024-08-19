import type { Localization } from '$lib/countries.server';

declare global {
	namespace App {
		interface Locals {
			locale: string;
			localization: Localization;
		}

		interface PageData {
			locale: string;
			localization: Localization;
			now: Date;
			countries: Promise<Record<string, Localization>>;
		}
	}
}

export {};
