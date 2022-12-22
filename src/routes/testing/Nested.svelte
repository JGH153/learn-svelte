<script lang="ts">
	import { Answer } from "./answer.enum";



	export let answer:Answer  = Answer.Yes;

	console.log($$props)

</script>

<h1>TODO app {answer.toUpperCase()}</h1>

{#if answer === Answer.Yes}
	<p>Yes was correct!</p>
{/if}