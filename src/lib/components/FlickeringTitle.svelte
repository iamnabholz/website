<script>
  import { onMount } from "svelte";
  import eyeIcon from "$lib/icons/eye-icon.svg?raw";

  let container;

  let { text, iconSrc } = $props();

  // Function to start the "bit-mapped" animation
  const startSwitch = () => {
    if (!container) return;
    const letters = container.querySelectorAll(".letter");

    if (letters.length === 0) return;

    // Pick a random letter
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters[randomIndex];

    // Apply the "bit-mapped" class to the random letter
    randomLetter.classList.add("bit-mapped");

    // Set a duration to remove the class again
    const duration = Math.max(3000, Math.floor(Math.random() * 5000));

    setTimeout(() => {
      randomLetter.classList.remove("bit-mapped");
    }, duration);

    // Set a delay before starting the next switch
    const delay = Math.max(500, Math.floor(Math.random() * 2000));

    setTimeout(startSwitch, delay);
  };

  // Start the animation once the component is mounted
  onMount(startSwitch);
</script>

<div class="row-wrapper title">
  <h1 bind:this={container}>
    <span class="text-height">|</span>
    {#each text as letter}
      <span class="letter">{letter}</span>
    {/each}
  </h1>

  <div class="icon">
    {#if iconSrc}
      {@html iconSrc}
    {:else}
      {@html eyeIcon}
    {/if}
  </div>
</div>

<style>
  h1 {
    height: 1.25em;
    white-space: nowrap;
    overflow-y: visible;
    text-transform: none;
    position: relative;
  }

  .row-wrapper {
    justify-content: space-between;
  }

  .icon {
    height: 96px;
    width: 96px;
  }

  .text-height {
    visibility: hidden;
    position: absolute;
    height: 100%; /* Retain height while hidden */
    width: auto; /* Ensure it doesn't occupy width */
    overflow: hidden;
  }

  @media screen and (max-width: 620px) {
    .icon {
      height: 60px;
      width: 60px;
    }
  }
</style>
