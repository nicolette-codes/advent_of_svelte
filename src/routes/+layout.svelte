<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Advent of Svelte</title>
</svelte:head>
<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</div>
			<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				<li><a href="/">Day 1</a></li>
				<li><a href="/two">Day 2</a></li>
				<li><a href="/three">Day 3</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost text-xl">Advent of svelte</a>
	</div>
	<div class="navbar-end"></div>
</div>
<slot />
