<script>
	const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let contactFormOpen = true;
	let email = '';
	let message = '';
	let formSubmissionStatus /** @type 'idle' | 'submitting' | 'success' */ = 'idle';

	function toggleContactFormOpen() {
		if (formSubmissionStatus === 'idle') {
			contactFormOpen = !contactFormOpen;
		}
	}

	async function submitContactForm(/** @type SubmitEvent & {target: HTMLFormElement} */ e) {
		if (formSubmissionStatus !== 'idle') return;

		formSubmissionStatus = 'submitting';

		// display a loading indicator for at least 1 second
		await Promise.all([
			fetch('https://formspree.io/f/mgebrjjj', {
				method: 'POST',
				body: new FormData(e.target),
				headers: { Accept: 'application/json' }
			}),
			new Promise((r) => setTimeout(() => r(''), 1000))
		]);

		formSubmissionStatus = 'success';
		// close form after 1 second
		setTimeout(() => (contactFormOpen = false), 1000);
	}
</script>

<svelte:head>
	<title>Justin Gottshall</title>
	<meta name="description" content="Justin Gottshall is a web developer from Cleveland, Ohio" />
</svelte:head>

<div class="flex items-center justify-center h-screen text-zinc-800">
	<div class="relative inline-block tracking-wide text-center">
		<h1 class="mb-2 text-5xl font-semibold tracking-wide sm:text-7xl">Justin Gottshall</h1>
		<div class="items-center justify-center sm:h-8 sm:flex">
			<p class="text-2xl font-thin tracking-wide sm:inline-block sm:text-4xl">
				Developer at
				<a
					href="https://trustle.com/"
					class="font-light underline underline-offset-8 decoration-dashed hover:decoration-solid"
					rel="noreferrer"
					target="_blank"
				>
					Trustle
				</a>
			</p>
			<div class="inline-flex mt-8 sm:mt-0 z-10">
				<a class="sm:ml-4" href="https://github.com/jmg8766" rel="noopener noreferrer">
					<svg class="w-12 hover:animate-spin sm:w-8" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
						<title>Github</title>
						<path
							d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
						/>
					</svg>
				</a>
				<button
					class="ml-4 relative z-10 disabled:opacity-10"
					on:click={toggleContactFormOpen}
					disabled={formSubmissionStatus !== 'idle'}
				>
					<svg
						class={`w-12 sm:w-8 ${formSubmissionStatus === 'idle' ? 'hover:animate-spin' : ''}`}
						viewBox="0 0 448 512"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Contact</title>
						<path
							d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"
						/>
					</svg>
					<svg class={`absolute z-20 transition-all ${contactFormOpen ? '' : 'opacity-0'}`} viewBox="0 0 100 100">
						<polygon
							class={`transition-all ${contactFormOpen ? '' : 'opacity-0'} ${
								formSubmissionStatus !== 'idle' ? 'opacity-10' : ''
							}`}
							points="50 15, 100 100, 0 100"
						/>
					</svg>
					<svg class="absolute z-30" viewBox="0 0 100 100">
						<polygon fill="white" points="50 25, 95 100, 5 100" />
					</svg>
				</button>
			</div>
		</div>
		<form
			class={`${contactFormOpen ? '' : 'opacity-0'} relative transition-all`}
			id="contact-form"
			on:submit|preventDefault={submitContactForm}
		>
			<div
				class={`border-2 border-black rounded mt-10 sm:mt-8 p-6 flex flex-col w-full z-0 ${
					formSubmissionStatus !== 'idle' ? 'opacity-10' : ''
				}`}
			>
				<h2 class="font-semibold text-3xl mb-4 border-b-2 border-gray-900 px-4 pb-2 mx-auto tracking-wide">
					Contact Me
				</h2>
				<label class="mb-2 text-left uppercase font-bold" for="email">Email: </label>
				<input
					class="border border-black rounded p-2 pl-4 mb-4"
					id="email"
					name="email"
					type="text"
					placeholder="Your email"
					bind:value={email}
				/>
				<label class="mb-2 text-left uppercase font-bold" for="msg">Message: </label>
				<textarea
					class="border border-black h-48 mb-4 p-2 rounded"
					id="msg"
					name="message"
					placeholder="Your message"
					bind:value={message}
				/>
				<button
					class="p-2 rounded border-2 border-black w-32 ml-auto uppercase disabled:cursor-not-allowed flex justify-center"
					type="submit"
					disabled={email.length === 0 ||
						!email.match(validEmailRegex) ||
						message.length === 0 ||
						formSubmissionStatus !== 'idle'}
				>
					{#if formSubmissionStatus === 'idle'}
						Send
					{:else if formSubmissionStatus === 'submitting'}
						<span>Sending</span>
						<span class="overflow-hidden whitespace-nowrap animate-typing">...</span>
					{:else}
						<span class="mr-2">Sent</span>
					{/if}
				</button>
			</div>
			{#if formSubmissionStatus !== 'idle'}
				<div class="absolute inset-0 flex justify-center items-center">
					{#if formSubmissionStatus === 'success'}
						<svg class="ml-2" width="64" height="64" viewBox="0 0 24 24" fill="green">
							<path
								d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"
							/>
						</svg>
					{:else}
						<svg
							class="animate-spin"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							width="64"
							height="64"
							viewBox="0 0 24 24"
						>
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							/>
						</svg>
					{/if}
				</div>
			{/if}
		</form>
	</div>
</div>
