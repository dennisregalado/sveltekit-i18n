import type { CountryCode, CurrencyCode } from '$lib/countries.server';
import { page } from '$app/stores';
import { get } from 'svelte/store';

/**
 * Formats a date string according to the current locale and specified options.
 *
 * @param dateString - The date string to format
 * @param options - Optional Intl.DateTimeFormatOptions to customize the output
 * @returns A localized date string
 */
export function date(dateString: Date, options?: Intl.DateTimeFormatOptions): string {
	const { locale } = get(page).data;
	const date = new Date(dateString);

	return date.toLocaleString(
		locale,
		options ?? {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		}
	);
}

/**
 * Formats a monetary value according to the given currency code and locale.
 *
 * @param options An object containing the currency code and amount.
 * @param options.currencyCode The currency code (e.g., 'USD'). Defaults to 'USD'.
 * @param options.amount The monetary amount as a string or number.
 * @returns A formatted string representation of the monetary value.
 */
export function money({ currencyCode = 'USD', amount }: {
	currencyCode: CurrencyCode;
	amount: number;
}): string {
	const { locale } = get(page).data;

	const formatter = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currencyCode
	});

	return formatter.format(Number(amount)).replace(/\D00(?=\D*$)/, '');
}

/**
 * Converts a two-letter country code to its corresponding flag emoji.
 *
 * @param countryCode A two-letter ISO 3166-1 alpha-2 country code.
 * @returns The flag emoji for the given country code.
 */
export function flag(countryCode: CountryCode): string {
	return countryCode
		.toUpperCase()
		.split('')
		.map((char: string) => String.fromCodePoint(127397 + char.charCodeAt(0)))
		.join('');
}
