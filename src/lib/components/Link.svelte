<script lang="ts">
	import type { Snippet } from 'svelte';

	import { page } from '$app/stores';
	import { getPathWithLocale } from '$i18n';

	let {
		href: propHref = '/',
		locale: propLocale,
		children,
		...attributes
	}: {
		href: string;
		locale?: string;
		children?: Snippet;
	} = $props();

	/**
	 * Check if the href is an internal link
	 */
	let internal = $derived.by(() => {
		try {
			new URL(propHref);
			return false;
		} catch {
			return true;
		}
	});

	/**
	 * Get the locale
	 */
	let locale = $derived(propLocale || $page.data.locale);

	/**
	 * Get the href
	 */
	let href = $derived(internal && locale ? getPathWithLocale(locale, propHref) : propHref);
</script>

{#if internal}
	<a {href} {...attributes}>
		{#if children}
			{@render children()}
		{:else}
			{href}
		{/if}
	</a>
{:else}
	<a {href} {...attributes} rel="noopener noreferrer" target="_blank">
		{#if children}
			{@render children()}
		{:else}
			{href}
		{/if}
	</a>
{/if}
