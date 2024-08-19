<script lang="ts">
	import { navigating, page } from '$app/stores';
	import { flag } from '$lib/utils';
	import { getPathWithLocale } from '$i18n';
	import { enhance } from '$app/forms';
	import { afterNavigate } from '$app/navigation';

	let { localization, locale: activeLocale } = $derived($page.data);

	
	let open = $state(false);

	afterNavigate(() => {
		open = false;
	});
</script>

<div class="grid gap-1 w-full relative z-[1]">
	<p class="text-xl">Country selector</p>
	<details class="w-full relative" {open}>
		<summary
			class="text-left text-2xl justify-between px-4 py-2.5 relative z-[1] hover:bg-accent-muted focus:bg-accent-muted active:bg-accent-muted w-full bg-accent transition-colors ease-linear"
		>
			{flag(localization.country)}
			{localization.label}
			<small class="opacity-50">{localization.currency}</small>
		</summary>
		{#if $page.data.countries}
			<div class="w-full bg-accent overflow-auto max-h-60 absolute top-[54px] left-0">
				{#await $page.data.countries then countries}
					{#each Object.keys(countries) as locale}
						{@const localization = countries[locale]}
						{@const redirectTo = getPathWithLocale(locale, $page.url.pathname + $page.url.search)}

						

						{#if locale != activeLocale}
							<form action="/?/locale" method="POST" use:enhance>
								<button
									disabled={Boolean($navigating)}
									type="submit"
									name="redirectTo"
									value={redirectTo}
									class="disabled:cursor-wait p-2 text-xl py-1.5 text-left w-full focus:bg-accent-muted hover:bg-accent-muted transition-colors ease-linear"
								>
									{flag(localization.country)}
									{localization.label}
									<small class="opacity-50">{localization.currency}</small>
								</button>
							</form>
						{/if}
					{/each}
				{/await}
			</div>
		{/if}
	</details>
</div>
