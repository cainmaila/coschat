<script>
	import Head from '$lib/components/Head.svelte'
</script>

<main>
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
</main>

<style lang="postcss">
	.mambers {
		display: flex;
		justify-content: center;
		gap: 20px;
	}
</style>
