<script lang="ts">
	import { todoStore } from "./todo.store";

	function removeTodo(id: symbol)	{
		todoStore.removeTodo(id);
	}
	function toggleComplete(id: symbol)	{
		todoStore.toggleComplete(id);
	}

</script>

{#each $todoStore as todo (todo.id)}
	<div class="todo">
		<input type="checkbox" checked={todo.completed} on:change={() => toggleComplete(todo.id)} />
		<span class="todo-text">{todo.title}</span>
		<button class="todo-button" on:click={() => removeTodo(todo.id)}>Remove</button>
	</div>
{/each}

