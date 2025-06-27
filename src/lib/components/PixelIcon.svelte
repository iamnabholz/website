<script>
  export let name, size;

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
        iconComp = "sun-icon";
      });
  }
</script>

<span style="height: {size}; width: {size}; display: inline-block;">
  <svelte:component this={iconComp} />
</span>
