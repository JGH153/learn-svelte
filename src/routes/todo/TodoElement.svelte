<script lang="ts">
	import { todoStore, type Todo } from './todo.store';

	export let todo: Todo;

	function removeTodo(id: symbol) {
		todoStore.removeTodo(id);
	}
	function toggleComplete(id: symbol) {
		todoStore.toggleComplete(id);
	}
</script>

<label class="todo">
	<input type="checkbox" checked={todo.completed} on:change={() => toggleComplete(todo.id)} />
	<span class="todo-text">{todo.title}</span>
	<button class="todo-remove" on:click={() => removeTodo(todo.id)}>Remove</button>
</label>

<style>
	.todo {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.todo-remove {
		/* width: 50px; */
		padding: 2px 10px;
		margin-left: 4px;
		margin-top: 4px;
		max-width: 500px;
		border: 3px solid black;
		border-radius: 5px;
	}
</style>
