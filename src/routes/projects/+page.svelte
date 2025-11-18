<script>
  import FlickeringTitle from "$lib/components/FlickeringTitle.svelte";
  import Gradient from "$lib/components/Gradient.svelte";
  import Project from "$lib/components/Project.svelte";
  import Contact from "$lib/components/Contact.svelte";

  let { data } = $props();
  let { projects } = data;

  /* function shuffleArray(array) {
    const shuffled = [...array]; // Create a copy
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }*/
</script>

<svelte:head>
  <title>Side Projects | Lukas Nabholz</title>
</svelte:head>

<div class="project-header">
  <Gradient short />
</div>

<FlickeringTitle text="Side Projects" icon="code" />

<div class="projects-container">
  {#each projects as item}
    <Project
      title={item.title}
      description={item.description}
      imgSrc={item.image}
      href={item.href}
    />
  {/each}
</div>

<span style="height: 1vw"></span>

<Contact showLinks={true} />

<span style="height: 5rem"></span>

<style>
  .projects-container {
    column-count: 3;
    column-gap: 15px;
  }

  @media (max-width: 1166px) {
    .projects-container {
      column-count: 2;
    }
  }

  @media (max-width: 766px) {
    .projects-container {
      column-count: 1;
    }
  }
</style>
