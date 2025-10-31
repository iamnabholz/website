<script>
  import { onMount } from "svelte";
  import Gradient from "$lib/components/Gradient.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import PixelIcon from "../../lib/components/PixelIcon.svelte";

  let cover;

  const meta = {
    title: "Stoop Inbox",
    subtitle: "Redesigning the mobile experience",
    href: "/stoop",
    detail: "App Design",
    image: "/img/stoop/cover.png",
    color: "#15AF41",
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
    Stoop Inbox is a service that gives you a custom email address for
    newsletters and subscriptions. It's designed to keep your main email clean
    while giving you a better reading experience than regular email apps.
  </p>
  <img
    src="/img/stoop/showcase.png"
    alt="Screenshots Of Stoop's App Multiple Tabs"
  />

  <h2>Problems</h2>

  <p>
    After looking at user reviews and comparing it to similar apps, the problems
    were pretty clear:
  </p>

  <ul>
    <li>
      <b>Too much clutter</b> - The same buttons and menus showed up duplicated in
      different places of the app, this felt like a "quick patch" solution to other
      issues like having menus hidden and the single screen design decision
    </li>
    <li>
      <b>Hidden features</b> - Useful actions like creating and managing folders
      and muting newsletters or channels were buried in menus
    </li>
    <li>
      <b>Outdated look</b> - The design felt old and disconnected
    </li>
    <li>
      <b>Basic notifications</b> - You couldn't customize when or how you got alerts
    </li>
  </ul>
  <p>The app had potential, but it wasn't meeting users' needs.</p>

  <h2>Research and Planning</h2>

  <p>
    I looked at popular email apps and newsletter services to see what worked
    well.
    <br />
    The best apps had:
  </p>
  <ul>
    <li>
      Smart notification controls (schedule quiet hours, customize by folder)
    </li>
    <li>Easy organization tools</li>
    <li>Clean, focused reading experience</li>
    <li>Features that actually saved people time</li>
  </ul>

  <img
    src="/img/stoop/features.png"
    alt="Screenshots Of Stoop's App Multiple Tabs"
  />

  <h2>Redesign</h2>
  <p>
    I redesigned the app around four main areas that would make the biggest
    difference for users.
  </p>
  <h3>Better Inbox Experience</h3>
  <p>
    The inbox is where people spend most of their time, so it needed to be clean
    and fast. <br />
    I focused on making it easy to scan through new content and quickly decide what
    to read now vs. later.
  </p>

  <img src="/img/stoop/inbox.png" alt="Inbox Feature Showcase" />

  <h3>New Library Feature</h3>
  <p>
    This was the biggest addition. Instead of just reading and forgetting, users
    could now save and organize the good stuff:
  </p>
  <ul>
    <li>
      <b>Finish Reading:</b> Issues you started but didn't finish
    </li>
    <li>
      <b>Highlights:</b> Save quotes or important text from articles
    </li>
    <li>
      <b>Saved Issues:</b> Full articles you want to keep
    </li>
    <li>
      <b>Links & Media:</b> Collect useful links, images, and videos
    </li>
    <li>
      <b>Reading History:</b> Track what you've read
    </li>
  </ul>

  <img src="/img/stoop/library.png" alt="ILibrary Features Showcase" />

  <h3>Discovery That Actually Works</h3>
  <p>
    Finding new newsletters was a pain in the old app. The new discovery section
    makes it easy to:
  </p>
  <ul>
    <li>Browse by categories or search specific tags</li>
    <li>See what's popular and trending</li>
    <li>Get basic info about newsletters before subscribing</li>
    <li>Add new subscriptions directly to organized folders</li>
  </ul>

  <img src="/img/stoop/discover.png" alt="Discovery Features Showcase" />

  <h3>Reading Experience</h3>
  <p>
    This is what the whole app is about - making reading enjoyable. I studied
    how people actually read on mobile and designed around those patterns:
  </p>
  <ul>
    <li>Clean typography that's easy on the eyes</li>
    <li>Smart text sizing and spacing</li>
    <li>Quick actions for saving and sharing</li>
    <li>Distraction-free mode for longer articles</li>
  </ul>
  <img src="/img/stoop/reading.png" alt="Discovery Features Showcase" />

  <h3>Customization Options</h3>

  <p>
    Everyone reads differently, so the app needed adapt.
    <br />
    Users can now:
  </p>
  <ul>
    <li>Choose from different reading themes</li>
    <li>Adjust text size and spacing</li>
    <li>Set notification preferences</li>
    <li>Organize content their way</li>
  </ul>

  <img src="/img/stoop/styles.png" alt="Discovery Features Showcase" />

  <h2>Results</h2>

  <p>
    The redesign addressed the main pain points while adding features that made
    the app genuinely useful for daily reading. Users could finally organize
    their newsletters, find new content easily, and actually enjoy the reading
    experience.
    <br />
    The key was keeping things simple while adding power where it mattered most -
    in organization, discovery, and reading.
  </p>
</div>

<div style="height: 2rem;"></div>

<Contact />

<div style="height: 1px;"></div>

<div class="post-buttons">
  <a href="/">
    <div class="button">
      <div class="row-wrapper">
        <PixelIcon name="arrow" size="1em" rotation="180" />
        Back home
      </div>
    </div>
  </a>

  <a href="/stoop">
    <div class="button">
      <div class="row-wrapper">
        <PixelIcon name="arrow" size="1em" rotation="180" />
        Stoop Inbox
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
