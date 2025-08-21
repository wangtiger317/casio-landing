<script lang="ts">
	export let label = '';
	export let progressWidths: string[] = [];
</script>

<div class="flex flex-col gap-1.5 w-full">
	<div class="flex items-center gap-1.5">
		<span class="text-white font-medium text-xl">
			{label}
		</span>
	</div>
	<div class="flex flex-col gap-5 w-full">
		{#each progressWidths as w, i}
			<div class="flex items-center gap-2">
				<div class="bg-[#1412127D] rounded-full flex-1 w-full h-4 shadow-black">
					<div
						class="bg-red-500 h-4 rounded-full text-right text-xs text-white pr-2"
						style="width: {w};"
					>
						{w}
					</div>
				</div>
				<span class="text-white font-medium text-sm w-[100px]">
					{i === 0 ? 'Without Rago' : 'With Rago'}
				</span>
			</div>
		{/each}
	</div>
</div>
