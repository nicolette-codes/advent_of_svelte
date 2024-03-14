<script lang="ts">
	import type { Filters } from '$lib/types.js';

	const { data } = $props();
	const tallys = $state(data.tallys);

	let searchedName = $state('');
	let filter = $state<Filters>('all');
	let filteredTallys = $derived(filterTallys());

	function setFilter(newFilter: Filters): void {
		filter = newFilter;
	}

	function filterTallys() {
		switch (filter) {
			case 'all':
				return tallys.filter((tally) => tally.name.includes(searchedName));
			case 'nice':
				return tallys.filter((tally) => tally.tally > 0 && tally.name.includes(searchedName));
			case 'naughty':
				return tallys.filter((tally) => tally.tally < 0 && tally.name.includes(searchedName));
		}
	}
</script>

<div class="container mx-auto">
	<h1 class="text-xl font-bold text-center mb-3">Day 1</h1>
	<h1 class="text-lg text-center mb-3">Tally of the kids</h1>

	<label for="nameSearch" class="form-control w-full max-w-xs mb-3">
		<div class="label">
			<span class="label-text">Enter name:</span>
		</div>
		<input
			type="text"
			name="nameSearch"
			bind:value={searchedName}
			placeholder="Search for kid name"
			class="input input-bordered input-sm input-secondary w-full max-w-xs"
		/>
	</label>

	<button
		class:btn-active={filter === 'all'}
		class="btn btn-secondary"
		onclick={() => setFilter('all')}>All</button
	>
	<button
		class:btn-active={filter === 'nice'}
		class="btn btn-secondary"
		onclick={() => setFilter('nice')}>Nice</button
	>
	<button
		class:btn-active={filter === 'naughty'}
		class="btn btn-secondary"
		onclick={() => setFilter('naughty')}>Naughty</button
	>
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th></th>
				<th>Name</th>
				<th>Tally</th>
			</tr>
		</thead>
		<tbody>
			<!-- row 1 -->
			{#each filteredTallys as tally, index}
				<tr>
					<th>{index + 1}</th>
					<td>{tally.name}</td>
					<td>{tally.tally}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
