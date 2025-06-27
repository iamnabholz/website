<script>
  import PixelIcon from "./PixelIcon.svelte";

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
  <span>
    <PixelIcon name="copy" size="26px" />
  </span>
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

  button:hover,
  button:active,
  button:hover > span,
  button:active > span {
    color: var(--accent-color);
  }

  button:active > span {
    transform: scale(1.4);
  }
</style>
