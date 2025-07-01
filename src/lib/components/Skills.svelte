<script>
  import PixelIcon from "./PixelIcon.svelte";

  const skills = [
    "Figma",
    "Penpot",
    "Affinity Suite",
    "Photoshop",
    "Illustrator",
    "Zeplin",
    "Readymag",
    "Webflow",
    "HTML&CSS",
    "JavaScript",
    "Astro",
    "Svelte",
  ];
  const icons = [
    "arrow",
    "arrow-corner",
    "asterisk",
    "at",
    "briefcase",
    "eye",
    "folder",
    "sun",
    "happy",
    "mail",
    "world",
  ];

  let lastIcons = [];

  const getRandomIcon = () => {
    let randomSelection = icons[Math.floor(Math.random() * icons.length)];

    while (lastIcons.includes(randomSelection)) {
      randomSelection = icons[Math.floor(Math.random() * icons.length)];
    }

    if (lastIcons.length >= 4) {
      lastIcons.shift(); // Remove the oldest icon
    }
    lastIcons.push(randomSelection); // Add the new icon

    return randomSelection;
  };
</script>

<section class="skills-container">
  <PixelIcon name={getRandomIcon()} size="1em" />
  {#each skills as skill}
    <p>
      {skill}
    </p>
    <PixelIcon name={getRandomIcon()} size="1em" />
  {/each}
</section>

<style>
  .skills-container {
    font-size: 1.2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    column-gap: 18px;
    row-gap: 12px;

    width: min(100%, 720px);
    margin: 0 auto;
  }

  @media screen and (max-width: 620px) {
    .skills-container {
      font-size: 1rem;
      column-gap: 14px;
    }
  }
</style>
