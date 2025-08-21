<script>
	import ping from '$lib/assets/result.png';
	import ProgressBar from '$lib/shared/ui/components/progress/ProgressBar.svelte';
</script>

<div class="w-full mx-auto max-w-[1232px] py-20 px-5 lg:px-0">
	<div
		class="bg-[#161E2FEB] shadow-2xl rounded-[35px] flex flex-col items-center justify-center py-12 px-7 relative"
	>
		<div class="flex items-center justify-center gap-2 w-full">
			<svg
				width="68"
				height="68"
				viewBox="0 0 68 68"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<rect width="68" height="68" fill="url(#pattern0_166_367)" />
				<defs>
					<pattern
						id="pattern0_166_367"
						patternContentUnits="objectBoundingBox"
						width="1"
						height="1"
					>
						<use xlink:href="#image0_166_367" transform="scale(0.0133333)" />
					</pattern>
					<image
						id="image0_166_367"
						width="75"
						height="75"
						preserveAspectRatio="none"
						xlink:href="data:image/png;base64,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"
					/>
				</defs>
			</svg>

			<span class="font-semibold text-2xl lg:text-[40px] text-white"> Ping Result </span>
			<img src={ping} alt="casio ping" class="absolute right-0 top-20 hidden lg:block" />
		</div>
		<div class="flex w-full">
			<div class="flex flex-col items-start gap-8 w-full lg:w-2/3">
				<ProgressBar label="Packet Loose" progressWidths={['21%', '4%']} />
				<ProgressBar label="Adapter Performance" progressWidths={['42%', '79%']} />
				<ProgressBar label="Lag Spike" progressWidths={['90%', '18%']} />
				<ProgressBar label="Reactivity and Priority" progressWidths={['8%', '79%']} />
				<div class="mx-auto w-full flex flex-col items-center justify-center">
					<div class="flex flex-wrap items-center">
						<span class="text-white font-semibold"> General Ping </span>
						<span class="text-white mx-2">-</span>
						<span class="text-red-500 font-semibold"> LOSS OF 10ms </span>
					</div>
					<div class="flex flex-wrap justify-center items-center">
						<span class="text-white font-semibold"> Network Stabilization </span>
						<span class="text-white mx-2">-</span>
						<span class="text-red-500 font-semibold"> 45% MORE STABLE </span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
