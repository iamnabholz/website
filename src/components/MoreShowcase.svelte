<script>
	import FlickeringTitle from './FlickeringTitle.svelte';

	import timesetsIcon from '$lib/icons/timesets-icon.webp';
	import itchioIcon from '$lib/icons/itchio-icon.webp';
	import luckyIcon from '$lib/icons/lucky-icon.webp';
	import fabricIcon from '$lib/icons/fabric-icon.webp';

	import eyeIcon from '$lib/icons/eye-icon.svg?raw';

	import Project from './Project.svelte';
</script>

<div class="side-container hidden">
	<FlickeringTitle text="Experiments" iconSrc={eyeIcon} />
	<div class="column-container" style="padding-bottom: 24px;">
		<p>
			Some side projects I've started on my free time, from time managing webapps to videogames.
			<br />
			<br />
			I enjoy exploring a lot of fields that relate to programming and design.
		</p>
	</div>

	<!--<a href="/side">Explore side projects</a> -->

	<div class="column-container">
		<Project
			title="Fabric Visions"
			desc="Videogames I've developed over the past few years."
			imgSrc={fabricIcon}
			href="https://fabricvisions.itch.io/"
		/>

		<Project
			title="Timesets"
			desc="Pomodoro-like timer and stopwatch that you can fully customize."
			imgSrc={timesetsIcon}
			href="https://timesets.netlify.app/"
		/>

		<!--<Project
                title="LUCKYSCREENS"
                desc="Sharing graphics, wallpapers and more."
                imgSrc={luckyIcon}
                href="https://luckyscreens.netlify.app/"
        />-->

		<Project
			title="Panorama Tab"
			desc="Browser extension that replaces your new tab with a new customizable design."
			imgSrc="/favicon.png"
			href="https://panoramatab.netlify.app/"
		/>
	</div>
</div>

<style>
	.side-container {
		display: flex;
		flex-direction: column;
		background-color: var(--dark-color);
		color: var(--light-color);
		position: relative;

		padding: 2rem 0;
	}

	.side-container::before {
		content: '';
		position: absolute;
		left: -4rem;
		top: 0;
		background-color: var(--dark-color);
		width: calc(100% + 8rem);
		height: 100%;
		z-index: -5;
	}

	.column-container {
		padding-top: 2rem;
	}

	@media screen and (max-width: 1020px) {
		.side-container::before {
			left: -16px;
			width: calc(100% + 32px);
		}
	}
</style>
