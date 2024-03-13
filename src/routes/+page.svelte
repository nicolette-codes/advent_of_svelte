<script lang="ts">
	export let data;
	const { tallys } = data;
</script>

<div class="container mx-auto">
	<h1>Tally of the kids</h1>
	<ul>
		{#each tallys as tally}
			<li>Name: {tally.name} - Tally: {tally.tally}</li>
		{/each}
	</ul>
</div>
