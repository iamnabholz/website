<script>
	import { onMount } from 'svelte';

	let container;
	export let text;
	export let iconSrc;

	// Function to start the "bitmapped" animation
	const startSwitch = () => {
		if (!container) return;
		const letters = container.querySelectorAll('.letter');

		if (letters.length === 0) return;

		// Pick a random letter
		const randomIndex = Math.floor(Math.random() * letters.length);
		const randomLetter = letters[randomIndex];

		// Apply the "bitmapped" class to the random letter
		randomLetter.classList.add('bitmapped');

		// Set a duration to remove the class again
		const duration = Math.max(3000, Math.floor(Math.random() * 5000));

		setTimeout(() => {
			randomLetter.classList.remove('bitmapped');
		}, duration);

		// Set a delay before starting the next switch
		const delay = Math.max(500, Math.floor(Math.random() * 2000));

		setTimeout(startSwitch, delay);
	};

	// Start the animation once the component is mounted
	onMount(startSwitch);
</script>

<div class="titles hidden">
	<h1 bind:this={container}>
		{#each text as letter}
			<span class="letter">{letter}</span>
		{/each}
	</h1>

	{#if iconSrc}
		<div class="icon">
			{@html iconSrc}
		</div>
	{/if}
</div>

<style>
	.titles {
		height: 4rem;
		position: relative;
		overflow-y: hidden;
	}

	.icon {
		position: absolute;
		top: -8px;
		right: 0;
		height: 96px;
		width: 96px;
		max-width: none;
	}

	@media screen and (max-width: 620px) {
		.icon {
			top: -10px;
			height: 60px;
			width: 60px;
		}
	}
</style>
