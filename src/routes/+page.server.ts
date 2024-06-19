
import ollama from 'ollama'
export const load = (async () => {
    const response = await chatOllamaAsync("你好!")
    console.log(response.message.content)
    return {
        content: response.message.content
    }
})

function chatOllamaAsync(message: string) {
    return ollama.chat({
        model: 'llama3',
        messages: [{ role: 'user', content: message }],
    })
}