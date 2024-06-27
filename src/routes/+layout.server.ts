import { env } from '$env/dynamic/private'

export async function load() {
    const { OLLAMA_HOST } = env
    return { OLLAMA_HOST }
}
