<script lang="ts">
	async function getRick() {
		console.log('getRick');
		const response = await fetch('https://rickandmortyapi.com/api/character/1');
		const json = await response.json();
		if (!response.ok) {
			throw new Error(json.message);
		}

		return json;
	}
</script>

{#await getRick()}
	Loading...
{:then rick}
	<h1>{rick.name}</h1>
	<img src={rick.image} alt={rick.name} />
{:catch error}
	<p>{error.message}</p>
{/await}
