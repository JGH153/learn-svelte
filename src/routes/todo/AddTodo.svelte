<script lang="ts">
	import { todoStore } from './todo.store';

	let text = '';

	function addTodo() {
		if (text.length === 0) {
			return;
		}
		todoStore.addTodo(text);
		console.log('addTodo');
	}
</script>

<input type="text" bind:value={text} on:keyup={(e) => e.key === 'Enter' && addTodo()} />
<button
class="todo-button"
	on:click={() => {
		addTodo();
	}}>Add</button
>
