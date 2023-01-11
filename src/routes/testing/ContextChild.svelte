<script lang="ts">
	import { getContext } from 'svelte';
	import { contextKey } from './ContextKey';

	const data = getContext(contextKey);
	console.log('getContext', data);
</script>

<div>Context child</div>
