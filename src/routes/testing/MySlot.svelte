<div class="red">
	<slot />
</div>
<div class="green">
	<slot name="green" />
</div>

<style>
	.red {
		background-color: red;
	}
	.green {
		background-color: green;
	}
</style>
