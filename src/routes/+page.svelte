<script lang="ts">
	import Head from '$lib/components/Head.svelte'
	import { ollamaHost$, model$ } from '$lib/stores'
	import { page } from '$app/stores'

	function reset() {
		ollamaHost$.set($page.data.OLLAMA_HOST)
		model$.set('llama3:instruct')
	}
</script>

<main class="container">
	<section>
		<h2>選擇你要對話的角色</h2>
		<div class="mambers">
			<a href="/tifa">
				<Head name="tifa" />
			</a>
			<a href="/aerith">
				<Head name="aerith" />
			</a>
			<a href="/cidney">
				<Head name="cidney" />
			</a>
		</div>
	</section>
	<section>
		<h2>Ollama服務設定</h2>
		<code>你可以使用自己本地的服務器</code>
		<form>
			<div class="grid">
				<label for="name">Ollama Host<input type="text" bind:value={$ollamaHost$} /></label>
				<label for="name">Ollama Host<input type="text" bind:value={$model$} /></label>
			</div>
			<button on:click={reset}>重置設定</button>
		</form>
	</section>
</main>

<style lang="postcss">
	.mambers {
		display: flex;
		justify-content: center;
		gap: 20px;
	}
</style>
