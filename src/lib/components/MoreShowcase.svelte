<script>
  import FlickeringTitle from "./FlickeringTitle.svelte";
  import Project from "./Project.svelte";
  import icon from "$lib/icons/asterisk.svg?raw";

  import { onMount } from "svelte";

  let projects = [];

  onMount(async () => {
    const response = await fetch("/api/projects");
    projects = await response.json();
  });
</script>

<section class="side-container">
  <FlickeringTitle text="Side Projects" iconSrc={icon} />

  <div class="column-container">
    <p>
      From small game-jam projects to utility-focused extensions, I love
      exploring different ways to bring ideas to life through code and design.
      <br /><br />
      These side projects are my playground for learning and experimentation.
    </p>
  </div>

  <a href="/projects">Explore all projects</a>

  <div class="column-container">
    {#each projects.slice(0, 3) as project}
      <Project
        title={project.title}
        desc={project.description}
        imgSrc={project.image}
        href={project.href}
      />
    {/each}
  </div>
</section>

<style>
  .side-container {
    display: flex;
    flex-direction: column;
    background-color: var(--dark-color);
    color: var(--light-color);
    position: relative;
    padding: 2.5rem 0 4rem 0;
    gap: var(--rem-gap);
  }

  .side-container::before {
    content: "";
    position: absolute;
    left: -4rem;
    top: 0;
    background-color: var(--dark-color);
    width: calc(100% + 8rem);
    height: 100%;
    z-index: -5;
  }

  a {
    color: var(--light-color);
    border-bottom: 0.09em solid currentColor;
  }

  a:hover {
    color: var(--accent-color);
  }

  a::after {
    font-family: "Icons";
    content: "A";
  }

  @media screen and (max-width: 1020px) {
    .side-container::before {
      left: -16px;
      width: calc(100% + 32px);
    }
  }
</style>
