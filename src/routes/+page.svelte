<script>
	import Gallery from '$lib/shared/components/gallery/Gallery.svelte';
	import Hero from '$lib/shared/components/hero/Hero.svelte';
	import Result from '$lib/shared/components/result/Result.svelte';
	import Support from '$lib/shared/components/support/Support.svelte';
	export let data;
</script>

<div class="flex flex-col relative bg-[#1E273B] h-full w-full">
	<Hero user={data.user} />
	<Support />
	<Gallery />
	<Result />
</div>
