<script>
  import EmailCopy from "$lib/components/EmailCopy.svelte";
  import FlickeringTitle from "$lib/components/FlickeringTitle.svelte";
  import Gradient from "$lib/components/Gradient.svelte";
  import TitleText from "$lib/components/TitleText.svelte";
  import WorkLink from "$lib/components/WorkLink.svelte";
  import MoreShowcase from "$lib/components/MoreShowcase.svelte";

  import sunIcon from "$lib/icons/sun-icon.svg?raw";
  import Contact from "$lib/components/Contact.svelte";
  import LastFM from "$lib/components/LastFM.svelte";
  import Skills from "../lib/components/Skills.svelte";
  import Project from "../lib/components/Project.svelte";

  export let data;

  let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div class="header-container">
  <div class="header-wrapper">
    <div class="header">
      <div class="text">
        <h1>Lukas Nabholz</h1>
        <TitleText />
        <span class:hide={scrollY > 50} style="transition: all 200ms ease-in;">
          <span class="scroll-indicator"
            ><span class="icons">A</span> Scroll down</span
          >
        </span>
      </div>

      <span class="gradient-wrapper">
        <span class="gradient-container">
          <Gradient />
        </span>
      </span>
    </div>
  </div>

  <section class="column-container">
    <span>
      Multidisciplinary designer with a passion for discovery, experimentation
      and innovation.
      <br /> <br />
      Solving complex problems and helping new ideas achieve their goals by crafting
      intuitive and easy-to-use interfaces that are beautiful.
      <br /> <br />
      <EmailCopy />
    </span>
  </section>
</div>

<section class="column-wrapper" style="padding-top: var(--rem-gap);">
  <FlickeringTitle text="Works" iconSrc={sunIcon} />

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

  <p class="title" style="padding-top: 2rem;">From Dribbble</p>

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

<span class="bottom-gradient"> </span>

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
    height: calc(100vh - calc(var(--page-padding-full) * 2));
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
  }

  .header > .text {
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
    transform: rotateZ(90deg);
    margin: 0 2px 0 -2px;
    animation: float 3s ease infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(-2px) rotateZ(90deg);
    }
    50% {
      transform: translateY(2px) rotateZ(90deg);
    }
    100% {
      transform: translateY(-2px) rotateZ(90deg);
    }
  }

  .work-links-wrapper {
    padding-top: 1rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .work-links-wrapper img {
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

  @media screen and (max-width: 1200px) {
    .work-links-wrapper a:first-child {
      display: none;
    }

    .work-links-wrapper {
      gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 1020px) {
    .header-container {
      height: calc(100vh - calc(var(--page-padding-small) * 2));
    }

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
      height: 100%;
    }

    .gradient-container {
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
    .footer {
      padding-bottom: 6rem;
      gap: 3rem;
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 620px) {
    .gradient-container {
      height: 130%;
    }

    .work-links-wrapper {
      padding-top: 0.8rem;
      gap: 0.6rem;
    }
  }

  @media screen and (max-width: 460px) {
    .header-container {
      height: auto;
    }

    .header-wrapper {
      height: calc(100vh - calc(var(--page-padding-small) * 2));
    }
  }
</style>
