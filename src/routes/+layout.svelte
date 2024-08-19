<script lang="ts">
	import '../app.css';

	import CountrySelector from '$components/CountrySelector.svelte';

	import { page } from '$app/stores';
	import { date, money } from '$lib/utils';

	let { data, children } = $props();
	let { locale, localization, now } = $derived(data);
</script>

<svelte:head>
	<title>i18n with SvelteKit</title>
	<meta
		property="og:locale"
		content="{locale.split('-')[0].toLowerCase()}_{locale.split('-')[1].toUpperCase()}"
	/>
</svelte:head>

<a href="#main" class="sr-only">Skip to main content</a>
<div class="grid place-content-center gap-8 max-w-2xl mx-auto px-5 min-h-screen">
	<div class="grid gap-1 w-full">
		<p class="text-xl">Multi-regional path</p>
		<h1 class="text-5xl">{$page.url.pathname}</h1>
	</div>
	<CountrySelector />
	<div class="grid gap-1 w-full">
		<p class="text-xl">Localization</p>
		<code class="text-lg w-full block whitespace-pre overflow-x-scroll">
			{JSON.stringify(localization)}
		</code>
	</div>
	<div class="gap-1 grid grid-cols-2 w-full">
		<div class="grid gap-1 w-full">
			<p class="text-xl">Date</p>
			<code class="text-lg">{date(now)}</code>
		</div>
		<div class="grid gap-1 w-full">
			<p class="text-xl">Currency</p>
			<code class="text-lg">
				{money({
					amount: 1000,
					currencyCode: localization.currency
				})}
			</code>
		</div>
	</div>
	<main id="main" class="contents">
		{@render children()}
	</main>
</div>
