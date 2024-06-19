<script lang="ts">
	import ollama from 'ollama/browser'
	import { onMount } from 'svelte'
	let content = ''

	onMount(async () => {
		const data = await chatOllamaAsync('你好')
		content = data.message.content
	})

	function chatOllamaAsync(message: string) {
		return ollama.chat({
			model: 'llama3',
			messages: [{ role: 'user', content: message }]
		})
	}
</script>

<div>{content}</div>
