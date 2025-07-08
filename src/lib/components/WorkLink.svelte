<script>
  import PixelIcon from "./PixelIcon.svelte";

  let { image, title, detail, color, href } = $props();
</script>

<div class="work">
  <a {href}>
    <div class="image" style="background-color: {color}">
      <img src={image} alt="Showcase of {title}" />
    </div>

    <div class="column-wrapper info">
      <span class="row-wrapper" style="gap: 2px; margin-left: -2px;">
        <PixelIcon name="folder" size="1.2em" />
        <b> {title}</b>
      </span>
      <span class="row-wrapper" style="gap: 2px;">
        {detail}
        <span class="hover" style="display: flex;">
          <PixelIcon name="arrow" size="1.2em" />
        </span>
      </span>
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
    cursor: pointer;
    color: var(--accent-color);
  }

  .info {
    gap: 2px;
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
    min-height: 420px;
    max-height: 580px;
    height: auto;

    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
    transition: transform 2s ease-out;
  }

  .work:hover img {
    transform: scale(1.04);
  }

  .work:hover .hover {
    opacity: 1;
  }

  span {
    text-transform: capitalize;
  }

  @media screen and (max-width: 1020px) {
    .image {
      padding: 14px;
      min-height: 20rem;
    }

    .image img {
      max-height: 480px;
    }
  }
</style>
