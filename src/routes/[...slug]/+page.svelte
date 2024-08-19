<script lang="ts">
	import Link from '$components/Link.svelte';

	let { data } = $props();

	let { routes } = $derived(data);
</script>

<div class="grid gap-1 w-full relative">
	<p class="text-xl">Link component with locale</p>
	<code class="grid w-full text-lg">
		{#each routes as link}
			 <Link {...link}></Link> 
		{/each}
	</code>
</div>
