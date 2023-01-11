<script>
	import { setContext } from 'svelte';
	import ContextChild from './ContextChild.svelte';
	import { contextKey } from './ContextKey';


	setContext(contextKey, {
		value: 'hello'
	});

	const updateContext = () => {
		console.log('updateContext');
	};
</script>

<div class="wrapper">
	Context partent
	<button on:click={() => updateContext()}>Click me</button>
	<ContextChild />
</div>

<style>
	.wrapper {
		margin: 2rem 0px;
	}
</style>
