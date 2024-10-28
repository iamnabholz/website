<script>
	export let image, title, detail, color, href;
</script>

<div class="work">
	<a {href}>
		<div class="image" style="background-color: {color}">
			<img src={image} alt="Showcase of {title}" />
		</div>

		<div class="column-wrapper info">
			<p><span class="icons">E </span><b> {title}</b></p>
			<p>{detail} <span class="icons hover"> A</span></p>
		</div>
	</a>
</div>

<style>
	a {
		width: 100%;
		height: 100%;
		color: var(--text-color);
		border-bottom: none;
	}

	a::after {
		content: none;
	}

	a:hover {
		color: var(--accent-color);
	}


	.info {
		gap: 4px;
	}

	.hover {
		opacity: 0;
		transition: opacity 150ms ease;
	}

	.work {
		width: 100%;
		height: fit-content;
		position: relative;
	}

	.image {
		background-color: white;
		padding: 2rem;
		margin-bottom: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.image img {
		object-fit: contain;
		max-width: 100%;
		max-height: 580px;
		height: auto;

		filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
		transition: all 150ms ease;
	}

	.work:hover img {
		transform: scale(1.01);
	}

	.work:hover .hover {
		opacity: 1;
	}

	p {
		text-transform: capitalize;
	}

    .icons {
        padding-right: 6px;
    }

	@media screen and (max-width: 1020px) {
		.image {
			padding: 14px;
		}

		.image img {
			max-height: 480px;
		}
	}
</style>
