<script lang="ts">
	import { onMount } from 'svelte';
	import { todoStore } from './todo.store';

	let text = '';

	function addTodo() {
		if (text.length === 0) {
			return;
		}
		todoStore.addTodo(text);
		console.log('addTodo');
	}

	onMount(() => {
		todoStore.addTodo('Do this app');
		todoStore.addTodo('Make good design');
		todoStore.addTodo('Kill it with this');
	});
</script>

<input type="text" bind:value={text} on:keyup={(e) => e.key === 'Enter' && addTodo()} />
<button
	class="todo-button"
	on:click={() => {
		addTodo();
	}}>Add</button
>
