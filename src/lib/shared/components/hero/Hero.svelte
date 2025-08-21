<script>
	import heroLogo from '$lib/assets/hero-logo.png';
	import reviews from '$lib/assets/reviews.svg';
	import Header from '$lib/shared/ui/components/headers/Header.svelte';
</script>

<div class="flex flex-col items-center justify-center w-full" id="hero">
	<Header />
	<img src={heroLogo} alt="" />
	<div class="flex flex-col items-center justify-center w-full">
		<span class="font-bold text-white text-[36px] text-center"> Rago Optimizer </span>
		<span class="text-white font-normal text-[32px] text-center">
			The Best Latency and Ping Optimizer
		</span>
	</div>
	<div class="flex items-center justify-center gap-8 mt-11 w-full">
		<button
			class="p-3.5 flex items-center justify-center text-center text-white font-extrabold bg-red-500 rounded-lg border-4 border-[#76B7784A]"
		>
			Download Now
		</button>
		<button
			class="border border-[#DBDBDB] flex items-center justify-center italic font-semibold text-center text-white rounded-lg p-3.5"
		>
			Try 3 days Free
		</button>
	</div>
	<div
		class="border border-[#CFCACA] rounded-full flex items-center justify-between mt-6 px-6 py-1.5 max-w-[367px] mx-auto w-full"
	>
		<span class="text-white font-semibold italic"> 400,000+ satisfied gamers </span>
		<img src={reviews} alt="reviews" class="mt-2" />
	</div>
</div>

<style>
	#hero {
		height: 768px;
		background-repeat: no-repeat;
		background-size: cover;
		background-image:
			linear-gradient(
				180deg,
				rgba(30, 39, 59, 0) 26.69%,
				rgba(30, 39, 59, 0.55) 50.51%,
				#1e273b 95.29%
			),
			url('$lib/assets/hero.png');
	}
</style>
