<script lang="ts">
	let showPassword = false;
	export let form;
	$: password = showPassword ? 'text' : 'password';
</script>

<div
	class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-800 sm:px-6 lg:px-8"
>
	<div class="w-full max-w-md space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
				Register
			</h2>
		</div>
		<form action="?/register" method="POST" class="mt-8 space-y-6">
			<div>
				<label for="username" class="sr-only">Username</label>
				<input
					id="username"
					name="username"
					type="text"
					required
					placeholder="Username"
					class="border rounded-md px-3 py-2 w-full"
				/>
			</div>
			<div>
				<label for="password" class="sr-only">Password</label>
				<input
					id="password"
					name="password"
					type={password}
					required
					placeholder="Password"
					class="border rounded-md px-3 py-2 w-full"
				/>
			</div>
			<div class="flex items-center py-5">
				<input
					type="checkbox"
					bind:checked={showPassword}
					id="showPassword"
					class="form-checkbox h-5 w-5 text-indigo-600"
				/>
				<label
					for="showPassword"
					class="ml-2 text-sm text-gray-700 hover:cursor-pointer dark:text-gray-200"
				>
					Show Password
				</label>
			</div>
			<button
				type="submit"
				class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:focus:ring-indigo-700"
			>
				Register
			</button>
		</form>
		{#if form?.user}
			<p class="error">Username is taken.</p>
		{/if}
	</div>
</div>
