<script>
  let {
    text,
    href,
    icon = "arrow-corner",
    selfTab,
    darkOnly,
    alwaysShow,
  } = $props();

  import PixelIcon from "./PixelIcon.svelte";
</script>

<span class="row-wrapper" class:darkOnly>
  <a {href} target={selfTab ? "_blank" : "_self"}>
    {text}
  </a>
  <span class="icon" class:alwaysShow>
    <PixelIcon name={icon} size="1em" />
  </span>
</span>

<style>
  .row-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    color: var(--text-color);
  }

  a {
    line-height: 1.1;
    display: block;
    width: fit-content;
    position: relative;

    text-decoration: none;

    cursor: pointer;
    color: currentColor;
    border-bottom: 0.09em solid currentColor;

    transition:
      color 150ms ease-out,
      border-color 150ms ease-out;
  }

  a:visited {
    color: inherit;
  }

  .darkOnly {
    color: var(--light-color);
  }

  .icon {
    display: inline-flex;
    align-items: center;
    opacity: 0;
    color: currentColor;
    transition:
      opacity 250ms ease-out,
      color 150ms ease-out;
    pointer-events: none;
  }

  .alwaysShow {
    opacity: 1;
  }

  .row-wrapper:hover a,
  .row-wrapper:focus-within a {
    color: var(--accent-color);
    border-color: var(--accent-color);
  }

  .row-wrapper:hover .icon,
  .row-wrapper:focus-within .icon {
    opacity: 1;
    color: var(--accent-color);
  }

  /* Ensure the icon inherits the color properly */
  .icon :global(svg) {
    color: inherit;
    fill: currentColor;
  }
</style>
