<script>
	import Gallery01 from '$lib/assets/feature-01.svg';
	import Gallery02 from '$lib/assets/feature-02.svg';
	import Gallery03 from '$lib/assets/feature-03.svg';
	import Gallery04 from '$lib/assets/feature-04.svg';
</script>

<div class="flex flex-col gap-6 lg:gap-12 px-5 lg:px-10 w-full">
	<div class="flex flex-col lg:flex-row lg:items-center justify-center gap-7 lg:gap-14">
		<img src={Gallery01} alt="Gallery-01" />
		<img src={Gallery02} alt="Gallery-02" />
	</div>
	<div class="flex flex-col lg:flex-row lg:items-center justify-center gap-7 lg:gap-14">
		<img src={Gallery03} alt="Gallery-03" />
		<img src={Gallery04} alt="Gallery-04" />
	</div>
</div>
