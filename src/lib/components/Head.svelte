<script lang="ts">
	import ShakeImg from './ShakeImg.svelte'

	export let name
	export let ind = 1
	export let lv = 0
	export let wd = ''
</script>

<div class={`head ${wd ? 'pcx' : ''}`} style={`width:${wd};`}>
	<ShakeImg {name} {ind} {lv}></ShakeImg>
</div>

<style lang="postcss">
	.head {
		width: 120px;
		height: 120px;
		position: relative;
		border-radius: 50%;
		overflow: hidden; /* 隐藏超出的部分 */
		transition: all 0.5s;
		filter: brightness(0.8);
		&:hover {
			scale: 1.2;
			filter: brightness(1.2);
		}
	}
	.pcx {
		border-radius: 50px;
		border: 5px solid #fdc7ffaa;
	}
</style>
