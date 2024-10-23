<script>
  import FlickeringTitle from "./FlickeringTitle.svelte";
  import EmailCopy from "./EmailCopy.svelte";
  import mailIcon from "$lib/icons/mail-icon.svg?raw";

  export let showLinks = false;
</script>

<FlickeringTitle text="Contact" iconSrc={mailIcon} />

<div class="column-container hidden">
  <span>
    <p>
      Currently open to freelance, if you are curious to hear more about my
      work, have an unhinged idea, or simply want to chat you can contact me at:
    </p>
    <br />
    <EmailCopy />
    <br />
    <a id="mailto-link" href="mailto:lukas@nabholz.work">Open email</a>

    {#if showLinks}
      <div class="links">
        <p><b>Links</b></p>
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

<style>
  .links {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 12px;
  }
</style>
