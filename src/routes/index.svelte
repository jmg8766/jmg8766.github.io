<script>
	import github from '/src/images/github.svg';
	import email from '/src/images/email.svg';
</script>

<svelte:head>
	<title>Justin Gottshall</title>
	<meta name="description" content="Justin Gottshall is a web developer from Cleveland, Ohio" />
</svelte:head>

<div class="flex items-center justify-center h-screen">
	<div class="inline-block tracking-wide text-center text-zinc-800">
		<h1 class="mb-2 text-5xl font-semibold tracking-wide sm:text-7xl">Justin Gottshall</h1>
		<div class="items-center justify-center sm:h-8 sm:flex">
			<p class="text-2xl font-thin tracking-wide sm:inline-block sm:text-4xl">Full-Stack Developer</p>
			<div class="inline-flex mt-8 sm:mt-0">
				<a class="mx-4 sm:mx-2" href="https://github.com/jmg8766" target="_blank" rel="noopener noreferrer">
					<img class="w-12 sm:w-8 hover:animate-spin" width={32} height={32} alt="Github" src={github} />
				</a>
				<a class="mx-4 sm:mx-2" href="mailto:justin.gottshall@gmail.com" target="_blank" rel="noopener noreferrer">
					<img class="w-12 sm:w-8 hover:animate-spin" width={32} height={32} alt="Email" src={email} />
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
