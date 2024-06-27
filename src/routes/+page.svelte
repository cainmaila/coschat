<script lang="ts">
	import Head from '$lib/components/Head.svelte'
	import { ollamaHost$, model$ } from '$lib/stores'
</script>

<main class="container">
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
	<div>
		<h2>Ollama服務設定</h2>
		<code>你可以使用自己本地的服務器</code>
		<form>
			<div class="grid">
				<label for="name">Ollama Host<input type="text" bind:value={$ollamaHost$} /></label>
				<label for="name">Ollama Host<input type="text" bind:value={$model$} /></label>
			</div>
		</form>
	</div>
</main>

<style lang="postcss">
	.mambers {
		display: flex;
		justify-content: center;
		gap: 20px;
	}
</style>
