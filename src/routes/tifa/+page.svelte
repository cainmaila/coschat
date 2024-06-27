<script lang="ts">
	import Head from '$lib/components/Head.svelte'
	import { Ollama, type Message } from 'ollama/browser'
	import { ollamaHost$, model$ } from '$lib/stores'

	const ollama: Ollama = new Ollama({ host: $ollamaHost$ })

	let errorMessage = ''
	let userContent = ''
	let messages: Message[] = [
		{
			role: 'system',
			content: `你是Final Fantasy VII中的Tifa，請用繁體中文對話`
		}
	]
	let talking = false
	let loading = false
	let content = ''

	$: chatAsync(messages)

	async function chatAsync(messages: Message[]) {
		try {
			loading = true
			const response = await ollama.chat({ model: $model$, messages, stream: true })
			loading = false
			talking = true
			content = ''
			for await (const part of response) {
				content += part.message.content
			}
		} catch (error: any) {
			errorMessage = error.message
		} finally {
			talking = false
			loading = false
		}
	}
	function talk() {
		if (!userContent) return
		messages.push({ role: 'user', content: userContent })
		messages = messages
		userContent = ''
	}
</script>

<main class="container">
	<div class="error">{errorMessage}</div>
	<div class="flex">
		<div class="head"><Head name="tifa" /></div>
		<div class="message">
			{content}
			{#if loading}
				<code>Loading...</code>
			{/if}
		</div>
	</div>
	<form on:submit={talk}>
		<input type="text" bind:value={userContent} />
		<button type="submit" disabled={loading || talking} aria-busy={loading}>送出</button>
	</form>
</main>

<style lang="postcss">
	.flex {
		display: flex;
		align-items: center;
	}
	.head {
		flex: 0 0 200px;
	}
	.message {
		flex: 1;
		padding: 1rem;
	}
</style>
