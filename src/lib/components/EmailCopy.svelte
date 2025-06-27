<script>
  import copy from "$lib/icons/copy.svg?raw";
  const address = "lukas@nabholz.work";

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      console.log("Email address copied successfully!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
</script>

<button onclick={copyAddress}>
  {address.toString()}
  <span style="height: 28px; width: 28px;">
    {@html copy}
  </span>
  <!-- <span class="icons">C</span>-->
</button>

<style>
  button {
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 14px;
    color: var(--text-color);
    background-color: transparent;
    margin: 0;
    border: none;
    padding: 0;
    outline: none;
  }

  button > * {
    transition: 150ms ease-out;
  }

  /*.icons {
    transition: 150ms ease-out;
    }*/

  button:hover,
  button:active,
  button:hover > *,
  button:active > * {
    color: var(--accent-color);
  }

  button:active > * {
    transform: scale(1.4);
  }
</style>
