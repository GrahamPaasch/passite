<script>
	//	import SiteswapPage from '$lib/SiteswapPage.svelte';
	import { defaults, useLocalStorage, siteswapUrl } from '$lib/passist.mjs';
	import { goto } from '$app/navigation';

	if (useLocalStorage) {
		goto(siteswapUrl({
			siteswapInput: (localStorage.getItem('siteswap') || defaults.siteswap),
			nJugglers: (localStorage.getItem('nJugglers') || 2),
		}), { replaceState: true });
	}
</script>

<!-- server should return empty siteswap to avoid flashing some overwritten default -->
<!-- <SiteswapPage siteswapInput="" nJugglers=2 /> -->
