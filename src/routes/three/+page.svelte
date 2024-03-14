<script lang="ts">
	const { data } = $props();
	let presents = $state(
		data.presents.map((gift) => {
			return { ...gift, loaded: false };
		})
	);

	let currentWeight = $derived(calculateWeight());

	function calculateWeight() {
		return presents.reduce((prevRes, curr) => {
			return curr.loaded === true ? prevRes + curr.weight : prevRes;
		}, 0);
	}
</script>

<div class="container mx-auto">
	<h1 class="text-xl font-bold text-center mb-3">Day 3</h1>
	<h2 class="text-md font-bold text-center mb-4">Santa's Sleigh Load Balancer (SLB™)</h2>
	<p>Santa's sleigh can only 100kg per journey</p>
	<p>
		Current weight: <span class:safe={currentWeight < 100} class:unsafe={currentWeight >= 100}>
			{currentWeight.toFixed(2)}
		</span> kg
	</p>
	<div class="grid grid-cols-4 gap-4 mt-4">
		{#each presents as present}
			<div class="card bg-primary text-primary-content">
				<div class="card-body">
					<h2 class="card-title text-xs">Presents for {present.name}</h2>
					<p class="text-xs">Weight: {present.weight}kg</p>
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text">Load gift</span>
							<input type="checkbox" bind:checked={present.loaded} class="checkbox" />
						</label>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.safe {
		color: green;
	}

	.unsafe {
		color: red;
	}
</style>
