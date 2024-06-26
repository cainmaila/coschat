<script lang="ts">
	import She from '$lib/components/She.svelte'
	import { loveAction } from '$lib/actions/uselove'

	export let name
	export let ind = 1
	export let lv = 0
	export let wd = ''
</script>

<div class={`head ${wd ? 'pcx' : ''}`} style={`width:${wd};`} use:loveAction>
	<She {name} {ind} {lv}></She>
</div>

<style lang="postcss">
	.head {
		width: 300px;
		height: auto;
		border-radius: 50%;
		overflow: hidden;
	}
	.pcx {
		border-radius: 50px;
		border: 5px solid #fdc7ffaa;
	}
</style>
