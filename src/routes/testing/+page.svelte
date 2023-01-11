<script lang="ts">
	import { Answer } from './answer.enum';
	import Child from './Child.svelte';
	import ContextParent from './ContextParent.svelte';
	import HoverableSlotProp from './HoverableSlotProp.svelte';
	import Input from './Input.svelte';
	import Lifecycle from './Lifecycle.svelte';
	import MySlot from './MySlot.svelte';
	import Nested from './Nested.svelte';
	import Rick from './Rick.svelte';
	import Store from './Store.svelte';

	let name = 'Greger';
</script>

<svelte:head>
	<title>TODO</title>
	<meta name="description" content="TODO app" />
</svelte:head>

<div class="text-column">
	<ContextParent />
	<HoverableSlotProp let:hovering={active}>
		{#if active}
			<span>Hovering</span>
		{:else}
			<span>Not hovering</span>
		{/if}
	</HoverableSlotProp>
	<MySlot>Hello</MySlot>
	<MySlot><span slot="green">Hello</span></MySlot>
	<Store />
	<Lifecycle />
	<Input on:message={(message) => console.log(message.detail)} />
	<h1>TODO app {name.toUpperCase()}</h1>
	<p>Hello</p>
	<Child />
	<Nested />
	<Nested answer={Answer.No} />
	<Rick />
</div>

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
