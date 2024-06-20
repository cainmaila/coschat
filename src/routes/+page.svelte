<script lang="ts">
	import { Ollama, type Message } from 'ollama/browser'

	const IMP = '(使用繁體中文與我對話)'

	let ollama: Ollama = new Ollama({ host: 'http://127.0.0.1:11434' })

	let errorMessage = ''
	let userContent = ''
	let messages: Message[] = [
		{
			role: 'user',
			content: `你扮演一個角色Final Fantasy VII中的Tifa，請用她的口吻回答我問題!${IMP}`
		}
	]
	let loading = false
	let content = ''

	$: chatAsync(messages)

	async function chatAsync(messages: Message[]) {
		loading = true
		try {
			const response = await ollama.chat({ model: 'llama3:instruct', messages })
			content = response.message.content
			messages.push(response.message)
		} catch (error: any) {
			errorMessage = error.message
		} finally {
			loading = false
		}
	}
	function talk() {
		if (!userContent) return
		messages.push({ role: 'user', content: userContent + IMP })
		messages = messages
		userContent = ''
	}
</script>

<main class="container">
	<div class="error">{errorMessage}</div>
	<div class="flex">
		<div>
			<img src="tifa.png" alt="" />
		</div>
		<div>
			{content}
			{#if loading}
				<code>Loading...</code>
			{/if}
		</div>
	</div>
	<form on:submit={talk}>
		<input type="text" bind:value={userContent} />
		<button type="submit" disabled={loading} aria-busy={loading}>送出</button>
	</form>
</main>

<style lang="postcss">
	.flex {
		display: flex;
		& img {
			max-width: 100px;
			border-radius: 50%;
			overflow: hidden;
		}
		& div {
			margin: 10px;
		}
	}
</style>
