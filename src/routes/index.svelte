<script>
	import github from '/src/images/github.svg';
	import email from '/src/images/email.svg';
</script>

<div class="flex items-center justify-center h-screen">
	<div class="inline-block tracking-wide text-center text-zinc-800">
		<h1 class="mb-2 text-4xl font-semibold tracking-wide sm:text-7xl">Justin Gottshall</h1>
		<div class="items-center justify-center h-8 sm:flex">
			<p class="text-xl font-thin tracking-wide sm:inline-block sm:text-4xl">
				Full-Stack Developer
			</p>
			<div class="inline-flex mt-4 sm:mt-0">
				<a href="https://github.com/jmg8766" target="_blank" rel="noopener noreferrer">
					<img class="h-12 sm:ml-2 sm:h-8 hover:animate-spin" alt="Github" src={github} />
				</a>
				<a href="mailto:justin.gottshall@gmail.com" target="_blank" rel="noopener noreferrer">
					<img class="h-12 ml-4 sm:ml-2 sm:h-8 hover:animate-spin" alt="Email" src={email} />
				</a>
			</div>
		</div>
	</div>
</div>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
