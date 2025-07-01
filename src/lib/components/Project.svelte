<script>
  import PixelIcon from "./PixelIcon.svelte";

  let { title, description, imgSrc, href, dark = false } = $props();
</script>

<div class="project" class:dark>
  <a {href} target="_blank">
    <img loading="lazy" src={imgSrc} alt="{title} Icon" />

    <br />
    <p class="title row-wrapper" style="padding-bottom: 6px;">
      <b>
        {title}
      </b>
      <PixelIcon size="1em" />
    </p>
    <p>{description}</p>
  </a>
</div>

<style>
  a {
    display: block;
    line-height: 1.2;
    cursor: pointer;
    color: inherit;
    border-bottom: none;
    padding: 1rem;

    transition: all 150ms linear;
    width: 100%;
  }

  p {
    transition: all 150ms linear;
  }

  a::after {
    content: none;
  }

  .project {
    height: fit-content;
    width: 100%;
    color: var(--text-color);
    background-color: var(--background-color);
    border-radius: var(--border-radius);

    border: 1px solid #303030;
    transition: all 150ms linear;
  }

  .project img {
    height: 68px;
    width: 68px;
    border-radius: var(--border-radius);
    transition: all 150ms linear;
  }

  .project:hover,
  .project:focus {
    border-color: var(--accent-color);
  }

  .project:hover .title {
    color: var(--accent-color);
  }

  .dark {
    color: var(--light-color);
    background-color: var(--dark-color);
  }
</style>
