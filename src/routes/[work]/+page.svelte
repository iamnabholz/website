<script>
	import { onMount } from "svelte";
	import Gradient from "../../components/Gradient.svelte";

	import Contact from "../../components/Contact.svelte";

	export let data;

	let cover;

	const parallax = () => {
		var yPos = 0 - window.scrollY / 10;
		if (cover) {
			cover.style.top = 30 + yPos + "%";
		}
	};

	onMount(() => {
		window.addEventListener("scroll", function () {
			parallax();
		});
	});
</script>

<svelte:head>
	<title>{data.meta.title} | Lukas Nabholz</title>
</svelte:head>

<div class="project-header">
	<Gradient small="true" />
</div>

<div class="title-container hidden">
	<h1>
		{data.meta.title}:
		{data.meta.subtitle}
	</h1>
	<div style="display: flex; gap: 6px; padding-top: 2px;">
		<p><span class="icons">E</span> {data.meta.detail}</p>
	</div>
</div>

<div
	class="cover-image image-container hidden"
	style="background-color: {data.meta.color}"
>
	<img
		bind:this={cover}
		id="cover"
		src={data.meta.image}
		alt={data.meta.title + " screenshots"}
	/>
</div>

<div class="content hidden" style="--themeColor: {data.meta.color}">
	<svelte:component this={data.content} />
	<!--{@html content}-->
</div>

<div style="height: 2rem;"></div>

<Contact />

<div style="height: 1px;"></div>

<div class="post-buttons hidden">
	<a href={data.previousPost?.href || "/"}>
		<div class="button">
			<div>
				<span class="icons">D </span>
				{data.previousPost ? "Previous post" : "Back home"}
			</div>
			{#if data.previousPost}
				<h2>{data.previousPost.title}</h2>
			{/if}
		</div>
	</a>

	<a href={data.nextPost?.href || "/"}>
		<div class="button" style="align-items: flex-end;">
			<div>
				{data.nextPost ? "Next post" : "Back home"}
				<span class="icons"> A</span>
			</div>
			{#if data.nextPost}
				<h2>{data.nextPost.title}</h2>
			{/if}
		</div>
	</a>
</div>

<style is:global>
	.title-container > h1 {
		line-height: 1.2;
		text-transform: unset;
	}

	:global(.image-container) {
		background-color: var(--themeColor);
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		height: 420px;
		width: 100%;
	}

	.cover-image {
		background-color: transparent !important;
		padding: 0;
		width: min(720px, 100%);
		align-self: flex-end;
		margin: -6rem 0;
		overflow: visible;

		position: relative;

		z-index: -1;
	}

	.cover-image img {
		position: absolute;
		top: 30%;
	}

	.post-buttons {
		border-top: 1px solid var(--text-color);
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}

	.post-buttons a {
		display: block;
		border: none;
	}

	.post-buttons a::after {
		content: none;
	}

	.button {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 12px;
		height: 100%;
		padding: 1rem 0;
	}

	.button:hover {
		border-color: var(--accent-color);
	}

	.project-header {
		height: 12rem;
	}

	@media screen and (max-width: 1020px) {
		.post-buttons {
			flex-direction: column;
		}

		.post-buttons > :last-child {
			align-self: flex-end;
		}
	}

	:global(.project-header > *) {
		position: sticky !important;
		top: var(--page-padding-full);
	}

	:global(.content > *) {
		margin-top: 12px;
		width: min(100%, 620px);
		margin-left: 10vw;
	}

	:global(.content > h1, .content > h2, .content > h3) {
		margin-top: 1em;
	}

	:global(.content > img) {
		background-color: var(--themeColor);
		overflow: hidden;

		height: 100%;
		width: 100%;
		margin: 56px 0;
	}

	.image-container img {
		object-fit: contain;
		max-width: 100%;
		max-height: 100%;
		height: auto;

		filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
	}

	@media screen and (max-width: 1020px) {
		:global(.project-header > *) {
			top: var(--page-padding-small);
		}

		:global(.content > *) {
			margin-left: 0;
		}
	}
</style>
