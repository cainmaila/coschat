<script lang="ts">
	export let name
	export let ind
	export let lv = 1
	$: path = `${name}/${pad(ind)}.png`

	//輸入數字把它變成字串不滿2位數補0
	function pad(num: number) {
		return num.toString().padStart(2, '0')
	}
</script>

<img src={path} alt="" class={`lv${lv}`} />

<style lang="postcss">
	img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* 使图像覆盖容器 */
		position: absolute;
		top: 0;
		left: 0;
	}
	.lv1 {
		animation: shake 5s infinite;
	}
	.lv2 {
		animation: shake 2s infinite;
	}
	.lv3 {
		animation: shake 1s infinite;
	}
	.lv4 {
		animation: shake 0.5s infinite;
	}
	@keyframes shake {
		0% {
			transform: translateY(0) scale(1);
		}
		50% {
			transform: translateY(10px) scale(1.05);
		}
		100% {
			transform: translateY(0) scale(1);
		}
	}
</style>
