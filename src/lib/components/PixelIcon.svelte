<script>
  export let name = "arrow-corner",
    size,
    rotation;

  let iconComp;

  $: if (name) {
    if (!size) {
      size = "100%";
    }
    // Dynamic import based on icon name
    import(`../icons/${name}.svelte`)
      .then((mod) => {
        iconComp = mod.default;
      })
      .catch(() => {
        console.error(`Icon "${name}" not found`);
        iconComp = "sun";
      });
  }
</script>

<span
  class="icon-container"
  style="display: inline-block; height: {size}; width: {size}; transform: rotateZ({rotation ||
    0}deg); color: inherit;"
>
  <svelte:component this={iconComp} />
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
