<script>
  import FlickeringTitle from "../../lib/components/FlickeringTitle.svelte";
  import Gradient from "../../lib/components/Gradient.svelte";

  export let data;
  const { projects } = data;
</script>

<svelte:head>
  <title>Side Projects | Lukas Nabholz</title>
</svelte:head>

<Gradient small={true} />

<span style="height: 2rem"></span>

<FlickeringTitle text="More Projects" />

{#each [...projects].sort(() => Math.random() - 0.5) as item}
  <p>{item.title}</p>
{/each}
