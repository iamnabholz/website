<script>
  import "../global.css";

  import PixelIcon from "../lib/components/PixelIcon.svelte";
  import Anchor from "../lib/components/Anchor.svelte";

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
</main>

<footer>
  <div class="footer-content">
    <div class="footer-icon">
      <PixelIcon name="mark" />
    </div>

    <p>
      Lukas Nabholz.
      <br />
      Fonts by <Anchor
        text="PangramPangram."
        href="https://pangrampangram.com/"
      />
    </p>
  </div>
</footer>

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

  footer {
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

  .footer-content {
    padding: var(--current-default-padding);
    margin: 0 auto;
    max-width: min(100%, 1720px);

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 16px;
  }

  .footer-content :global(.row-wrapper :hover),
  .footer-content :global(.row-wrapper:hover > .icon) {
    color: var(--light-color);
    border-color: var(--light-color);
  }

  .footer-icon {
    margin-bottom: 24px;
    height: 48px;
    width: 48px;
  }
</style>
