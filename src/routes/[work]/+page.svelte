<script>
  import { onMount } from "svelte";
  import Gradient from "$lib/components/Gradient.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import PixelIcon from "../../lib/components/PixelIcon.svelte";

  export let data;
  const { content, meta, previousPost, nextPost } = data;

  let cover;

  const parallax = () => {
    let yPos = 0 - window.scrollY / 10;
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
  <title>{meta.title} | Lukas Nabholz</title>
</svelte:head>

<div class="project-header">
  <Gradient small="true" />
</div>

<div class="title-container hidden">
  <h1>
    {meta.title}:
    {meta.subtitle}
  </h1>
  <div style="display: flex; gap: 6px; padding-top: 2px; align-items: center;">
    <PixelIcon name="folder" size="32px" />
    <p>{meta.detail}</p>
  </div>
</div>

<div class="cover-image image-container" style="background-color: {meta.color}">
  <img
    bind:this={cover}
    id="cover"
    src={meta.image}
    alt={meta.title + " screenshots"}
  />
</div>

<div class="content" style="--themeColor: {meta.color}">
  <svelte:component this={content} />
  <!--{@html content}-->
</div>

<div style="height: 2rem;"></div>

<Contact />

<div style="height: 1px;"></div>

<div class="post-buttons">
  <a href={previousPost?.href || "/"}>
    <div class="button">
      <div>
        <span class="icons">D </span>
        {previousPost ? "Previous post" : "Back home"}
      </div>
      {#if previousPost}
        <h2>{previousPost.title}</h2>
      {/if}
    </div>
  </a>

  <a href={nextPost?.href || "/"}>
    <div class="button" style="align-items: flex-end;">
      <div>
        {nextPost ? "Next post" : "Back home"}
        <span class="icons"> A</span>
      </div>
      {#if nextPost}
        <h2>{nextPost.title}</h2>
      {/if}
    </div>
  </a>
</div>

<style>
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
    backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
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

  @media screen and (max-width: 1020px) {
    .post-buttons {
      flex-direction: column;
    }

    .post-buttons > :last-child {
      align-self: flex-end;
    }
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

  :global(.side-by-side) {
    margin: 5rem 0 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    align-items: center;
  }

  :global(.side-text) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: min(100%, 620px);
  }

  :global(.side-image) {
    background-color: var(--themeColor);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    height: 660px;
    width: 100%;
  }

  :global(.side-image > img) {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    height: auto;
  }

  .image-container img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    height: auto;

    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
  }

  @media screen and (max-width: 1020px) {
    :global(.content > *) {
      margin-left: 0;
    }

    :global(.side-by-side) {
      margin: 5rem 0 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4rem;
    }
  }
</style>
