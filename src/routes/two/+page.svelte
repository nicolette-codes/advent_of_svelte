<script lang="ts">
	import { createCounter } from '$lib/counter.svelte';
	const cookieCounter = createCounter();
</script>

<div class="container mx-auto">
	<h1 class="text-xl font-bold text-center mb-3">Day 2</h1>
	<p class="mb-3">Santa's mood increases by eating cookies.</p>
	<p class="mb-3">
		Santa eat {cookieCounter.count} cookies.
	</p>
	<button class="btn btn-secondary" onclick={() => cookieCounter.increment()}>Add</button>
	<button class="btn btn-secondary" onclick={cookieCounter.decrement}>Remove</button>
	<button class="btn btn-secondary" onclick={cookieCounter.reset}>Rest</button>
	<br />
	{#if cookieCounter.count < 5}
		<p class="mt-3">Santa's mood is 🎅☹️</p>
	{:else if cookieCounter.count >= 5 && cookieCounter.count < 10}
		<p class="mt-3">Santa's mood is 🎅😐</p>
	{:else}
		<p class="mt-3">Santa's mood is 🎅😀</p>
	{/if}
</div>
