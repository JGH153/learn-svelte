import { writable } from 'svelte/store';

interface Todo {
	id: symbol;
	title: string;
	completed: boolean;
}

function createTodoStore() {
	const { subscribe, set, update } = writable<Todo[]>([]);

	const toggleTodoCompleted = (id: symbol, todos: Todo[]) => {
		return todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					completed: !todo.completed
				};
			}
			return todo;
		});
	};

	return {
		subscribe,
		addTodo: (todoText: string) => {
			const newTodo: Todo = {
				id: Symbol(),
				title: todoText,
				completed: false
			};
			update((todos) => [...todos, newTodo]);
		},
		toggleComplete: (id: symbol) => {
			update((todos) => {
				return toggleTodoCompleted(id, todos);
			});
		},
		removeTodo: (id: symbol) => {
			update((todos) => {
				return todos.filter((todo) => todo.id !== id);
			});
		},
		removeCompleted: () => {
			update((todos) => {
				return todos.filter((todo) => !todo.completed);
			});
		}
		// remove completed todos
	};
}

export const todoStore = createTodoStore();
