<script>
	import logo from '$lib/assets/logo.png';
	import discord from '$lib/assets/discord.png';
	export let user;
</script>

<div
	class="flex items-center justify-between max-w-[860px] w-full mx-auto px-5 rounded-full bg-[#1E273BE5] absolute top-10"
>
	<div class="flex items-center text-white bg-transparent">
		<img src={logo} alt="site Logo" class="h-[62px] w-[62px]" />
		<a class="text-base font-medium mr-8" href="/price">Pricing</a>
		<a class="text-base font-medium mr-3" href="/about">About</a>
		<a class="text-base font-medium" href="/contact">Contact</a>
	</div>
	<div class="flex items-center gap-2">
		<img src={discord} alt="discord Logo" class="mt-2" />
		{#if user}
			<form method="POST" action="/logout">
				<button
					type="submit"
					class="bg-[#FE3030] rounded-full py-2.5 px-3.5 text-white font-semibold"
				>
					Log out
				</button>
			</form>
		{:else}
			<a href="/register" class="bg-[#FE3030] rounded-full py-2.5 px-3.5 text-white font-semibold">
				Register
			</a>
		{/if}
	</div>
</div>
