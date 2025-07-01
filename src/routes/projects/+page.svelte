<script>
  import FlickeringTitle from "$lib/components/FlickeringTitle.svelte";
  import Gradient from "$lib/components/Gradient.svelte";
  import Project from "$lib/components/Project.svelte";
  import ProjectBig from "../../lib/components/ProjectBig.svelte";
  import Contact from "$lib/components/Contact.svelte";

  export let data;
  const { projects } = data;

  //const sortedProjects = [...projects].sort(() => Math.random() - 0.5);
</script>

<svelte:head>
  <title>Side Projects | Lukas Nabholz</title>
</svelte:head>

<div class="project-header">
  <Gradient short />
</div>

<FlickeringTitle text="More Projects" icon="eye" />

<div class="column-container">
  {#each projects as item}
    {#if !item.links}
      <Project
        title={item.title}
        description={item.description}
        imgSrc={item.image}
        href={item.href}
      />
    {:else}
      <ProjectBig
        title={item.title}
        description={item.description}
        links={item.links}
      />
    {/if}
  {/each}
</div>

<span style="height: 1vw"></span>

<Contact showLinks={true} />

<span style="height: 5rem"></span>

<span class="bottom-gradient"> </span>
