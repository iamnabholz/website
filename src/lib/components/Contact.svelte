<script>
  import FlickeringTitle from "./FlickeringTitle.svelte";
  import EmailCopy from "./EmailCopy.svelte";
  import mailIcon from "$lib/icons/mail-icon.svg?raw";
  import atIcon from "$lib/icons/at-icon.svg?raw";

  export let showLinks = false;
</script>

<section class="column-wrapper">
  <FlickeringTitle text="Contact" iconSrc={showLinks ? atIcon : mailIcon} />

  <div class="column-container">
    <span>
      Currently open to freelance, if you are curious to hear more about my
      work, have an unhinged idea, or simply want to chat you can contact me at:
      <br /> <br />
      <EmailCopy />
      <br />
      <a id="mailto-link" href="mailto:lukas@nabholz.work">Open email</a>

      {#if showLinks}
        <div class="links">
          <span><b>Links</b></span>
          <!--<a target="_blank" href="https://medium.com/@nabholz">
                      Medium
                  </a>
                  <a target="_blank" href="https://behance.net/nabholz">
                      Behance
                  </a>-->
          <a target="_blank" href="https://buymeacoffee.com/nabholz">
            BuyMeACoffee
          </a>
          <a target="_blank" href="https://dribbble.com/nabholz"> Dribbble </a>
          <a target="_blank" href="https://layers.to/nabholz"> Layers </a>
          <a target="_blank" href="https://github.com/iamnabholz"> Github </a>
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
