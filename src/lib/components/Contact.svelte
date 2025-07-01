<script>
  import FlickeringTitle from "./FlickeringTitle.svelte";
  import EmailCopy from "./EmailCopy.svelte";
  import Anchor from "./Anchor.svelte";

  export let showLinks = false;
</script>

<section class="column-wrapper">
  <FlickeringTitle text="Contact" icon={showLinks ? "at" : "mail"} />

  <div class="column-container">
    <span>
      If you'd like to discuss your ideas or projects, explore a creative
      collaboration, or simply connect, drop me a message.
      <br /> <br />
      Currently open for freelance projects.
      <br /> <br />
      <EmailCopy />
      <br />

      <Anchor text="Open email" href="mailto:lukas@nabholz.work" icon="mail" />

      {#if showLinks}
        <div class="links">
          <span><b>Links</b></span>
          <!--<a target="_blank" href="https://medium.com/@nabholz">
                      Medium
                  </a>
                  <a target="_blank" href="https://behance.net/nabholz">
                      Behance
                  </a>-->

          <Anchor text="BuyMeACoffee" href="https://buymeacoffee.com/nabholz" />
          <Anchor text="Dribbble" href="https://dribbble.com/nabholz" />
          <Anchor text="Layers" href="https://layers.to/nabholz" />
          <Anchor text="Github" href="https://github.com/iamnabholz" />
        </div>
      {/if}
    </span>
  </div>
</section>

<style>
  .column-wrapper {
    gap: var(--rem-gap);
  }

  .links {
    padding-top: var(--rem-gap);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
</style>
