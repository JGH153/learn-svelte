<script lang="ts">
	// import { crossfade } from 'svelte/types/runtime/transition';
	import { todoStore, type Todo } from './todo.store';
	import TodoElement from './TodoElement.svelte';
	// import { quintOut } from 'svelte/easing';

	// const [send, receive] = crossfade({
	// 	duration: (d) => Math.sqrt(d * 200),

	// 	fallback(node, params) {
	// 		const style = getComputedStyle(node);
	// 		const transform = style.transform === 'none' ? '' : style.transform;

	// 		return {
	// 			duration: 600,
	// 			easing: quintOut,
	// 			css: (t) => `
	// 				transform: ${transform} scale(${t});
	// 				opacity: ${t}
	// 			`
	// 		};
	// 	}
	// });

	let todoNotDone: Todo[] = [];
	let todoDone: Todo[] = [];

	todoStore.subscribe((todos) => {
		todoNotDone = todos.filter((todo) => !todo.completed);
		todoDone = todos.filter((todo) => todo.completed);
	});
</script>

<div class="board">
	<div class="todo-not-done">
		{#each todoNotDone as todo (todo.id)}
			<TodoElement {todo} />
		{/each}
	</div>
	<div class="todo-done">
		{#each todoDone as todo (todo.id)}
			<TodoElement {todo} />
		{/each}
	</div>
</div>

<style>
	.board {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1em;
		max-width: 36em;
		margin: 0 auto;
	}
</style>
