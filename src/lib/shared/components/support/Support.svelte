<script>
	import Dashboard from '$lib/assets/support.svg';
	const data = [
		{ text: '+2M Downloads' },
		{ text: 'Trusted by the Biggest' },
		{ text: 'Made For Ranked Players' },
		{ text: 'Low Latency Optimized' }
	];
</script>

<div class="flex flex-col items-center justify-center py-20 w-full">
	<div
		class="bg-[#161E2FEB] flex items-center justify-center max-w-[1170px] mx-auto p-16 w-full shadow-2xl rounded-3xl"
	>
		<img src={Dashboard} alt="dashboard" />
	</div>
	<div
		class="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-11 w-full mx-auto mt-10"
	>
		{#each data as item}
			<div class="flex flex-col gap-3 items-center justify-center">
				<div class="w-12 h-12 bg-[#FE3030] rounded-full flex items-center justify-center"></div>
				<span class="text-white font-semibold italic">{item.text}</span>
			</div>
		{/each}
	</div>
</div>
