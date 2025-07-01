<script>
  import Anchor from "../lib/components/Anchor.svelte";
  import FlickeringTitle from "../lib/components/FlickeringTitle.svelte";
  import Gradient from "../lib/components/Gradient.svelte";
</script>

<div>
  <Gradient short />
  <FlickeringTitle text="404" />
  <p>Oops! You've landed on a page that doesn't exist.</p>

  <br /><br />

  <Anchor text="Back home" href="/" autoHide={false} icon="arrow" />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
