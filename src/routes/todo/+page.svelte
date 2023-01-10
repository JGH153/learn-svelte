<script lang="ts">
	import AddTodo from './AddTodo.svelte';
	import { todoStore } from './todo.store';
	import TodoList from './TodoList.svelte';
</script>

<h1>TODO app</h1>

<div class="text-column">
	<AddTodo />
	<TodoList />
	<br>
	<br>
	<button class="todo-button" on:click={() => todoStore.removeCompleted()}>Remove completed</button>
</div>
