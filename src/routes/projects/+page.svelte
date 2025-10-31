<script>
  import FlickeringTitle from "$lib/components/FlickeringTitle.svelte";
  import Gradient from "$lib/components/Gradient.svelte";
  import Project from "$lib/components/Project.svelte";
  import Contact from "$lib/components/Contact.svelte";

  let { data } = $props();
  const { projects } = data;
</script>

<svelte:head>
  <title>Side Projects | Lukas Nabholz</title>
</svelte:head>

<div class="project-header">
  <Gradient short />
</div>

<FlickeringTitle text="Side Projects" icon="code" />

<div class="column-container">
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

<span class="bottom-gradient"> </span>
