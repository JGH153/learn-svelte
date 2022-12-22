<script>
	let count = 0;
	$: doubled = count * 2;
	$: console.log('the count is ' + count);

	$: if (count > 10) {
		count = 0;
	}

	function incrementCount() {
		count += 1;
	}

	const cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

<button on:click={incrementCount}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<br />
<h2>Double is {doubled}</h2>

{#each cats as cat (cat.id)}
	<li>
		<a target="_blank" href="https://www.youtube.com/watch?v={cat.id}" rel="noreferrer">
			{cat.name}
		</a>
	</li>
{/each}
