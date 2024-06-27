<script lang="ts">
	import { ollamaHost$ } from '$lib/stores'
	import { get } from 'svelte/store'

	export let data
	const { OLLAMA_HOST } = data

	if (!get(ollamaHost$)) {
		ollamaHost$.set(OLLAMA_HOST)
	}
</script>

<slot />
