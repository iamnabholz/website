<script>
  let { title, desc, imgSrc, href } = $props();
</script>

<div class="project hidden">
  <a {href} target="_blank">
    <img loading="lazy" src={imgSrc} alt="{title} Icon" />

    <br />
    <p class="title" style="padding-bottom: 6px;">
      <b>
        {title}
      </b>
      <span style="font-family: 'Icons'; padding-left: 4px;"> F </span>
    </p>
    <p>{desc}</p>
  </a>
</div>

<style>
  a {
    line-height: 1.2;
    cursor: pointer;
    color: var(--light-color);
    border-bottom: none;
    padding: 1rem;

    transition: all 150ms linear;
    width: 100%;
  }

  p {
    transition: all 150ms linear;
  }

  a::after {
    content: none;
  }

  .project {
    height: fit-content;
    width: 100%;
    background-color: var(--dark-color);
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

  .project:hover .title {
    color: var(--accent-color);
  }
</style>
