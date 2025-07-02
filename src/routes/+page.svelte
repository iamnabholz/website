<script>
  import EmailCopy from "$lib/components/EmailCopy.svelte";
  import FlickeringTitle from "$lib/components/FlickeringTitle.svelte";
  import Gradient from "$lib/components/Gradient.svelte";
  import TitleText from "$lib/components/TitleText.svelte";
  import WorkLink from "$lib/components/WorkLink.svelte";
  import MoreShowcase from "$lib/components/MoreShowcase.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import LastFM from "$lib/components/LastFM.svelte";
  import Skills from "../lib/components/Skills.svelte";
  import Project from "../lib/components/Project.svelte";
  import PixelIcon from "../lib/components/PixelIcon.svelte";

  export let data;

  let scrollY = 0;
  let spanHeight = 0;
</script>

<svelte:window bind:scrollY />

<div class="header-container">
  <div class="header-wrapper" style="--span-height: {spanHeight}px;">
    <div class="header">
      <div class="text">
        <h1>Lukas Nabholz</h1>
        <TitleText />
        <span
          class="scroll-indicator"
          class:hide={scrollY >= 50}
          style="transition: all 200ms ease-in;"
        >
          <span><PixelIcon name="arrow" size="16px" rotation="90" /></span>
          Scroll down
        </span>
      </div>

      <span style="height: 100%">
        <span class="gradient-wrapper">
          <Gradient />
        </span>
      </span>
    </div>
  </div>

  <section class="column-container">
    <span>
      <p bind:clientHeight={spanHeight}>
        Multidisciplinary designer with a passion for discovery, experimentation
        and innovation.
        <br /> <br />
      </p>
      <span>
        Solving complex problems and helping new ideas achieve their goals by
        crafting intuitive and easy-to-use interfaces that are beautiful.
        <br /> <br />
      </span>
      <EmailCopy />
    </span>
  </section>
</div>

<section class="column-wrapper" style="padding-top: var(--rem-gap);">
  <FlickeringTitle text="Works" icon="briefcase" />

  <span class="works-wrapper">
    {#each data.posts as post}
      <WorkLink
        title={post.title}
        href={post.href}
        detail={post.detail}
        color={post.color}
        image={post.image}
      />
    {/each}
  </span>

  <p class="title" style="padding-top: 2rem;">More Projects</p>

  <span class="work-links-wrapper">
    <a
      target="_blank"
      href="https://dribbble.com/shots/10868604-Bunny-Book-Landing-Page"
    >
      <img alt="Bunny Book page" src="/img/dribbble/dribbble-1.webp" />
    </a>
    <a
      target="_blank"
      href="https://dribbble.com/shots/18196217-ADAT-Home-Page-Design"
    >
      <img alt="ADAT Project Cover" src="/img/dribbble/dribbble-2.webp" />
    </a>
    <a target="_blank" href="https://dribbble.com/nabholz">
      <img alt="homme concept" src="/img/dribbble/dribbble-3.webp" />
    </a>
  </span>
</section>

<span style="height: 1vw"></span>

<Skills />

<span style="height: 1vw"></span>

<MoreShowcase />

<Contact showLinks={true} />

<section class="column-wrapper">
  <p>
    Santa Cruz, Bolivia
    <br />
    <b style="font-size: 1.4rem;">
      {new Date().toLocaleTimeString("default", {
        timeZone: "America/La_Paz",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}
    </b>
  </p>

  <div class="footer">
    <span class="column-wrapper" style="gap: 14px">
      <p class="title">I've been listening to—</p>
      <LastFM />
    </span>
    <span class="column-wrapper" style="gap: 14px">
      <p class="title">And working on—</p>
      <Project
        title="Squircles Plugin"
        description="Penpot plugin to generate squircle shapes"
        imgSrc="/img/icons/squircles-icon.webp"
        href="https://github.com/iamnabholz/penpot-squircle-plugin"
      />
    </span>
  </div>
</section>

<style>
  .footer {
    padding: 4rem 0;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  .title {
    font-family: "PP Editorial New";
    font-size: 1.6rem;
  }

  .header-container {
    height: calc(100vh - calc(var(--current-default-padding) * 2));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }

  .header-wrapper {
    height: 100%;
  }

  .header {
    position: sticky;
    top: 4rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: space-between;
  }

  .header > .text {
    width: 100%;
    grid-column: span 2;
    position: relative;
  }

  .scroll-indicator {
    position: relative;
    bottom: 0;
    left: 0;
    display: none;
    opacity: 0;
    font-size: 0.8rem;
  }

  .scroll-indicator > span {
    display: inline-block;
    margin: 0 2px 0 -2px;
    animation: float 3s ease infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(-1px);
    }
    50% {
      transform: translateY(3px);
    }
    100% {
      transform: translateY(-1px);
    }
  }

  .work-links-wrapper {
    padding-top: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .work-links-wrapper img {
    object-fit: cover;
    width: 100%;
    transition: 1s ease-out;
  }

  .work-links-wrapper a {
    border: none;
    border-radius: 6px;
    overflow: hidden;
  }

  .work-links-wrapper :last-child {
    position: relative;
  }

  .work-links-wrapper :last-child::after {
    content: "View More";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-family: "PP Editorial New";
  }

  .work-links-wrapper a:hover img {
    transform: scale(1.05);
  }

  .work-links-wrapper a::after {
    content: "";
  }

  @media screen and (max-width: 1020px) {
    .header {
      position: relative;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: normal;
      row-gap: 2rem;
      height: 100%;
    }

    .gradient-wrapper {
      position: sticky;
      top: var(--page-padding-small);
    }

    .header > .text {
      align-self: self-start;
      order: 2;
    }

    .scroll-indicator {
      display: block;
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 820px) {
    .work-links-wrapper a:first-child {
      display: none;
    }

    .work-links-wrapper {
      grid-template-columns: 1fr;
    }

    .work-links-wrapper a {
      height: 180px;
    }

    .footer {
      padding-bottom: 6rem;
      gap: 3rem;
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 460px) {
    .header-container {
      height: auto;
    }

    .header-wrapper {
      height: calc(
        100dvh - env(safe-area-inset-bottom, 0px) -
          calc(var(--page-padding-small) * 2) - var(--span-height)
      );
    }
  }
</style>
