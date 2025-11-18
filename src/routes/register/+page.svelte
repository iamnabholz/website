<script>
  import { onMount } from "svelte";
  import Gradient from "$lib/components/Gradient.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import PixelIcon from "../../lib/components/PixelIcon.svelte";

  let cover;

  const meta = {
    title: "Domain Register",
    subtitle: "Simplifying domain management on mobile",
    href: "/register",
    detail: "App Design",
    image: "/img/domain-register.webp",
    color: "#5419B6",
  };

  const parallax = () => {
    let yPos = 0 - window.scrollY / 10;
    if (cover) {
      cover.style.top = 30 + yPos + "%";
    }
  };

  onMount(() => {
    window.addEventListener("scroll", function () {
      parallax();
    });
  });
</script>

<svelte:head>
  <title>{meta.title} | Lukas Nabholz</title>
</svelte:head>

<div class="project-header">
  <Gradient short />
</div>

<div class="title-container hidden">
  <h1>
    {meta.title}:
    {meta.subtitle}
  </h1>
  <div style="display: flex; gap: 6px; padding-top: 2px; align-items: center;">
    <PixelIcon name="folder" size="1.6em" />
    <p>{meta.detail}</p>
  </div>
</div>

<div class="cover-image image-container" style="background-color: {meta.color}">
  <img
    bind:this={cover}
    id="cover"
    src={meta.image}
    alt={meta.title + " screenshots"}
  />
</div>

<div class="content" style="--themeColor: {meta.color}">
  <h2>Overview</h2>
  <p>
    Domain management on mobile can turn into a frustrating experience.
    <br /> <br />
    Constantly needing to switch to desktop to complete different tasks like updating
    DNS records, renewing or purchasing new domains or upgrades like custom email
    addresses, extra security and more.
    <br /> <br />
    I worked on a native mobile app that puts all essential domain management tools
    at users' fingertips.
    <br /> <br />
    The app prioritizes speed and simplicity, allowing users to have more control
    over their domains while on mobile.
  </p>

  <div class="side-by-side">
    <span class="side-text">
      <h2>Quick Access Dashboard</h2>
      <p>The homepage provides instant access to all key functions:</p>
      <ul>
        <li>Search for new domains</li>
        <li>Transfer of existing domains</li>
        <li>View wishlisted domains</li>
        <li>Manage shopping cart</li>
        <li>Overview of registered domains</li>
        <li>
          Notifications for wishlisted items or other information about your
          domains
        </li>
      </ul>
      <p>Everything is one tap away.</p>
    </span>

    <span class="side-image">
      <img
        src="/img/register/home.webp"
        alt="Screenshot showcasing homepage in the app"
      />
    </span>
  </div>

  <div class="side-by-side">
    <span class="side-text">
      <h2>Smart Domain Search</h2>
      <p>Search results show:</p>
      <ul>
        <li>Real-time availability</li>
        <li>Current discounts</li>
        <li>Save-for-later option</li>
        <li>Intelligent recommendations</li>
      </ul>
      <p>Users can quickly compare options and make decisions on the spot.</p>
    </span>

    <span class="side-image">
      <img
        src="/img/register/search.webp"
        alt="Screenshot showcasing search functionality in the app"
      />
    </span>
  </div>

  <div class="side-by-side">
    <span class="side-text">
      <h2>Streamlined Checkout</h2>
      <p>The cart management flow is also designed for simplicity:</p>
      <ul>
        <li>Adjust registration years with quick controls</li>
        <li>Add services like email hosting</li>
        <li>Clear pricing breakdown</li>
        <li>Fast checkout process</li>
      </ul>
      <p>No more abandoned carts due to mobile friction.</p>
    </span>

    <span class="side-image">
      <img
        src="/img/register/add-to-cart.webp"
        alt="Screenshot showing Add to cart functionality"
      />
    </span>
  </div>

  <h2>Key Features</h2>
  <ul>
    <li><b>One-tap actions</b> Common tasks require minimal steps</li>
    <li><b>Push notifications</b> Renewal reminders and status updates</li>
    <li>
      <b>Advanced options</b> View and update advanced options directly from the
      app
    </li>
    <li><b>Secure authentication</b> Biometric login support</li>
    <li><b>Offline capability</b> View domain info without internet</li>
  </ul>
  <br />

  <p>
    The design eliminates the need for desktop access for 90% of domain
    management tasks, making domain management more accessible to mobile-first
    users and improving overall user satisfaction.
  </p>
</div>

<div style="height: 2rem;"></div>

<Contact />

<div style="height: 1px;"></div>

<div class="post-buttons">
  <a href="/stoop">
    <div class="button">
      <div class="row-wrapper">
        <PixelIcon name="arrow" size="1em" rotation="180" />
        Stoop Inbox
      </div>
    </div>
  </a>

  <a href="/">
    <div class="button">
      <div class="row-wrapper">
        Back home
        <PixelIcon name="arrow" size="1em" rotation="0" />
      </div>
    </div>
  </a>
</div>

<style>
  .title-container > h1 {
    line-height: 1.2;
    text-transform: unset;
  }

  :global(.image-container) {
    background-color: var(--themeColor);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    height: 420px;
    width: 100%;
  }

  a:hover {
    color: var(--accent-color);
  }

  .cover-image {
    background-color: transparent !important;
    padding: 0;
    width: min(720px, 100%);
    align-self: flex-end;
    margin: -6rem 0;
    overflow: visible;

    position: relative;

    z-index: -1;
    backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }

  .cover-image img {
    position: absolute;
    top: 30%;
  }

  .post-buttons {
    border-top: 1px solid var(--text-color);
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .button {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 12px;
    height: 100%;
    padding: 1rem 0;
  }

  .button:hover {
    border-color: var(--accent-color);
  }

  @media screen and (max-width: 1020px) {
    .post-buttons {
      flex-direction: column;
    }

    .post-buttons > :last-child {
      align-self: flex-end;
    }
  }

  :global(.content > *) {
    margin-top: 12px;
    width: min(100%, 620px);
    margin-left: 10vw;
  }

  :global(.content > h1, .content > h2, .content > h3) {
    margin-top: 1em;
  }

  :global(.content > img) {
    background-color: var(--themeColor);
    overflow: hidden;

    height: 100%;
    width: 100%;
    margin: 56px 0;
  }

  :global(.side-by-side) {
    margin: 5rem 0 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    align-items: center;
  }

  :global(.side-text) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: min(100%, 620px);
  }

  :global(.side-image) {
    background-color: var(--themeColor);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    height: 660px;
    width: 100%;
  }

  :global(.side-image > img) {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    height: auto;
  }

  .image-container img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    height: auto;

    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
  }

  @media screen and (max-width: 1020px) {
    :global(.content > *) {
      margin-left: 0;
    }

    :global(.side-by-side) {
      margin: 5rem 0 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4rem;
    }
  }
</style>
