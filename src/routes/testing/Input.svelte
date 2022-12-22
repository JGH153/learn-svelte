<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let value = 'Test';
	let yes = true;
	$: helloValue = 'Hello ' + value;
	let textfield: HTMLInputElement;

	function handleClick() {
		console.log('click');
	}

	const dispatch = createEventDispatcher();
	function emitMessage() {
		console.log('emit');
		dispatch('message', 'Hello');
	}

	function focus() {
		textfield.focus();
	}
</script>

<button on:click|once|self|trusted={() => handleClick()}> Click me twice </button>

<button on:click={() => emitMessage()}>Click to emit </button>
<button on:click={() => focus()}>Click to focus </button>
<br />
<input bind:value type="text" bind:this={textfield} /> <input type="checkbox" bind:checked={yes} />
<br />
{helloValue}
{yes}
