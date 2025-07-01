<script>
  let { name = "arrow-corner", size, rotation } = $props();

  let IconComp = $state();

  $effect(() => {
    if (name) {
      // Dynamic import based on icon name
      import(`../icons/${name}.svelte`)
        .then((mod) => {
          IconComp = mod.default;
        })
        .catch(() => {
          console.error(`Icon "${name}" not found`);
          IconComp = "sun";
        });
    }
  });

  const iconSize = $derived(size || "100%");
</script>

<span
  class="icon-container"
  style="display: inline-block; height: {iconSize}; width: {iconSize}; transform: rotateZ({rotation ||
    0}deg); color: inherit;"
>
  <IconComp />
</span>

<style>
  .icon-container {
    color: inherit;
  }

  .icon-container :global(svg) {
    width: 100%;
    height: 100%;
    color: inherit;
    fill: currentColor;
  }
</style>
