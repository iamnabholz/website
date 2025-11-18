<script>
  import "../global.css";

  import PixelIcon from "../lib/components/PixelIcon.svelte";

  let { children } = $props();

  const darkThemeSelectionColors = ["#ff6361", "#2bff88", "#f9ce34", "#4854f9"];

  const lightThemeSelectionColors = ["#ff6361", "#4854f9", "#06BEE1"];

  const darkThemeColor =
    darkThemeSelectionColors[
      Math.floor(Math.random() * darkThemeSelectionColors.length)
    ];

  const lightThemeColor =
    lightThemeSelectionColors[
      Math.floor(Math.random() * lightThemeSelectionColors.length)
    ];

  $effect(() => {
    // Select the root element
    const root = document.documentElement;

    // Update CSS variables
    root.style.setProperty("--dark-theme", darkThemeColor);
    root.style.setProperty("--light-theme", lightThemeColor);
  });

  let scrollY = $state(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
</script>

<svelte:head>
  <title>Lukas Nabholz | UX Designer</title>
</svelte:head>

<svelte:window bind:scrollY />

<main>
  {@render children?.()}

  {#if scrollY >= 500}
    <button onclick={scrollToTop} class:hide={scrollY <= 550}>
      <PixelIcon name="up-chevron" />
    </button>
  {/if}

  <span style="height:4rem"></span>
  <span class="bottom-gradient"> </span>
</main>

<style>
  main {
    min-height: 100vh;
  }

  button {
    position: fixed;
    right: var(--current-default-padding);
    bottom: var(--current-default-padding);
    z-index: 5;

    color: var(--background-color);
    background-color: var(--text-color);
    border-radius: 100%;

    height: 64px;
    width: 64px;

    transition: 150ms ease;
  }

  button:hover {
    color: var(--accent-color);
  }

  .bottom-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 240px;
    background: var(--background-color);
    background: linear-gradient(
      0deg,
      var(--accent-color) 0%,
      var(--background-color) 100%
    );
    z-index: -10;
  }
</style>
