<script lang="ts">
	import { onDestroy } from 'svelte';
	import { count, time, elapsed, count2, name, greeting } from './store';

	let countValue = 0;

	const unsubscribe = count.subscribe((value) => {
		countValue = value;
	});

	const formatter = new Intl.DateTimeFormat('no', {
		hour12: false,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

	onDestroy(() => {
		console.log('onDestroy');
		unsubscribe();
	});
</script>

<h1>{$greeting}</h1>
<input bind:value={$name}>

<h1 on:click={() => count2.reset()}>Count 2: {$count2}</h1>
<button on:click={() => count2.decrement()}>Decrement</button>

<h1>{formatter.format($time)}</h1>
<p>
	This page has been open for
	{$elapsed}
	{$elapsed <= 1 ? 'second' : 'seconds'}
</p>
<h1 on:click={() => count.set(0)}>Hello {countValue}, double: {$count * 2}</h1>
<button on:click={() => count.update((value) => value + 1)}>Increment</button>
<br /><br />
