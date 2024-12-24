<script>
  let { title, description, links, dark = false } = $props();
</script>

<div class="project" class:dark>
  <p class="title" style="padding-bottom: 1rem;">
    <b>
      {title}
    </b>
    <br />
    {description}
  </p>

  <div class="column-wrapper" style="gap: 1.4rem;">
    {#each links as link}
      <a href={link.href} target="_blank">
        <img loading="lazy" src={link.image} alt="{link.title} Icon" />
        <p class="title">
          <b>
            {link.title}
          </b>
          <span style="font-family: 'Icons'; padding-left: 4px;"> F </span>
        </p>
        <p>{link.description}</p>
      </a>
    {/each}
  </div>
</div>

<style>
  a {
    line-height: 1.2;
    cursor: pointer;
    color: inherit;
    border-bottom: none;

    transition: all 150ms linear;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  a img {
    margin-bottom: 4px;
  }

  p {
    transition: all 150ms linear;
  }

  a::after {
    content: none;
  }

  .project {
    padding: 1rem;

    height: fit-content;
    width: 100%;
    color: var(--text-color);
    background-color: var(--background-color);
    border-radius: var(--border-radius);

    border: 1px solid #303030;
    transition: all 150ms linear;
  }

  .project img {
    height: 68px;
    width: 68px;
    border-radius: var(--border-radius);
    transition: all 150ms linear;
  }

  .project:hover,
  .project:focus {
    border-color: var(--accent-color);
  }

  a:hover {
    color: var(--accent-color);
  }

  .dark {
    color: var(--light-color);
    background-color: var(--dark-color);
  }
</style>
