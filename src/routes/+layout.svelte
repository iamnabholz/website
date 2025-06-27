<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  import chevron from "$lib/icons/up-chevron.svg?raw";

  export let data;

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

  onMount(() => {
    // Select the root element
    const root = document.documentElement;

    // Update CSS variables
    root.style.setProperty("--dark-theme", darkThemeColor);
    root.style.setProperty("--light-theme", lightThemeColor);
  });

  let scrollY;
</script>

<svelte:head>
  <title>Lukas Nabholz | UX Designer</title>
</svelte:head>

<svelte:window bind:scrollY />

{#key data.pathname}
  <main
    in:fly={{ y: 100, duration: 350, delay: 400 }}
    out:fly={{ y: 100, duration: 350 }}
    id="top"
  >
    <slot />

    <div class="BTT-button" class:hide={scrollY <= 550}>
      <a class="clean-anchor" href="#top"> {@html chevron} </a>
    </div>

    <span style="height:4rem"></span>
    <span class="bottom-gradient"> </span>
  </main>
{/key}

<style>
  .BTT-button {
    position: fixed;
    right: var(--current-default-padding);
    bottom: var(--current-default-padding);
    z-index: 5;

    background-color: var(--text-color);
    border-radius: 100%;

    height: 64px;
    width: 64px;

    transition: 150ms ease;
  }

  .clean-anchor {
    padding: 4px;
    padding-bottom: 6px;
    color: var(--background-color);
  }

  .clean-anchor:hover {
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
