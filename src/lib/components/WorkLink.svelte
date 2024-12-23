<script>
  let { image, title, detail, color, href } = $props();
</script>

<div class="work">
  <a {href}>
    <div class="image" style="background-color: {color}">
      <img src={image} alt="Showcase of {title}" />
    </div>

    <div class="column-wrapper info">
      <span><span class="icons">E </span><b> {title}</b></span>
      <span>{detail} <span class="icons hover"> A</span></span>
    </div>
  </a>
</div>

<style>
  a {
    width: 100%;
    height: 100%;
    color: var(--text-color);
    border-bottom: none;
  }

  a::after {
    content: none;
  }

  a:hover {
    cursor: pointer;
    color: var(--accent-color);
  }

  .info {
    gap: 4px;
  }

  .hover {
    opacity: 0;
    transition: opacity 150ms ease;
  }

  .work {
    width: 100%;
    height: fit-content;
    position: relative;
  }

  .image {
    background-color: white;
    padding: 2rem;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .image img {
    object-fit: contain;
    max-width: 100%;
    max-height: 580px;
    height: auto;

    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
    transition: transform 2s ease-out;
  }

  .work:hover img {
    transform: scale(1.04);
  }

  .work:hover .hover {
    opacity: 1;
  }

  span {
    text-transform: capitalize;
  }

  .icons {
    padding-right: 6px;
  }

  @media screen and (max-width: 1020px) {
    .image {
      padding: 14px;
      min-height: 20rem;
    }

    .image img {
      max-height: 480px;
    }
  }
</style>
