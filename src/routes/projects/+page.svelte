<script>
  import FlickeringTitle from "$lib/components/FlickeringTitle.svelte";
  import Gradient from "$lib/components/Gradient.svelte";
  import Project from "$lib/components/Project.svelte";
  import iconSrc from "$lib/icons/asterisk.svg?raw";

  export let data;
  const { projects } = data;

  //const sortedProjects = [...projects].sort(() => Math.random() - 0.5);
</script>

<svelte:head>
  <title>Side Projects | Lukas Nabholz</title>
</svelte:head>

<Gradient small={true} />

<span style="height: 2rem"></span>

<FlickeringTitle text="More Projects" {iconSrc} />

{#each projects as item}
  <Project
    title={item.title}
    desc={item.description}
    imgSrc={item.image}
    href={item.href}
  />
{/each}
