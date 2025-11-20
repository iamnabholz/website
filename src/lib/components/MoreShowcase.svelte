<script>
  import Anchor from "./Anchor.svelte";
  import FlickeringTitle from "./FlickeringTitle.svelte";
  import Project from "./Project.svelte";

  let { projects } = $props();
</script>

<section class="side-container">
  <FlickeringTitle text="Other Projects" icon="code" />

  <div class="column-container">
    <p>
      From small game-jam projects to utility-focused extensions, I love
      exploring different ways to bring ideas to life through code and design.
      <br /><br />
      These side projects are my playground for learning and experimentation.
    </p>
  </div>

  <span class="anch">
    <Anchor
      text="Explore all projects"
      href="/projects"
      darkOnly={true}
      icon="arrow"
      alwaysShow={true}
    />
  </span>

  <div class="projects-columns">
    {#each projects.slice(0, 3) as project}
      <Project
        title={project.title}
        description={project.description}
        imgSrc={project.image}
        href={project.href}
        dark={true}
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

  @media screen and (max-width: 1020px) {
    .side-container::before {
      left: -16px;
      width: calc(100% + 32px);
    }
  }

  .projects-columns {
    columns: 3;
    gap: 12px;
  }

  @media screen and (max-width: 1320px) {
    .projects-columns {
      columns: 2;
    }
  }

  @media screen and (max-width: 820px) {
    .projects-columns {
      columns: 1;
    }
  }
</style>
