<script>
  import PixelIcon from "./PixelIcon.svelte";

  export let small = false;

  const gradients = [
    ["#D16BA5", "#86A8E7", "#5FFBF1"],
    ["#ffa600", "#ff6361", "#003f5c"],
    ["#f9ce34", "#ee2a7b", "#6228d7"],
    ["#fa8bff", "#2bd2ff", "#2bff88"],
    ["#f878ff", "#ffda9e", "#ffffff"],
    ["#abffee", "#3d00a6", "#000e17"],
    ["#ffd700", "#ed7014", "#89cff0"],
    ["#c2ffdf", "#ff8861", "#4854f9"],
  ];

  const selectedGradient =
    gradients[Math.floor(Math.random() * gradients.length)];

  const shuffleGradientColor = (colors) => {
    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    return colors;
  };

  const [firstColor, secondColor, thirdColor] =
    shuffleGradientColor(selectedGradient);

  const minSize = 180;
  const height = Math.floor(Math.random() * (360 - minSize + 1)) + minSize;
  const width = Math.floor(Math.random() * (360 - minSize + 1)) + minSize;

  const top = Math.random() * 90;
  const left = Math.random() * 90;

  //const icon = Math.random() > 0.5 ? worldIcon : happyIcon; // If you want to use icons, uncomment

  const gradientHeight = small ? 120 : 300;

  let card;
  let bounds;

  const rotateToMouse = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    card.style.transform = `
      scale3d(1.03, 1.03, 1.03)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
       	${Math.log(distance) * 2}deg
      )
    `;
  };

  const handleMouseEnter = () => {
    bounds = card.getBoundingClientRect();
  };

  const handleMouseLeave = () => {
    card.style.transform = "";
  };
</script>

<a
  href="/"
  aria-label="Home"
  title="Home"
  bind:this={card}
  onmousemove={rotateToMouse}
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  class="clean-anchor"
>
  <div
    style="height: {gradientHeight}px; background: radial-gradient(circle at {Math.floor(
      Math.random() * 100,
    )}% {Math.floor(
      Math.random() * 100,
    )}%, {firstColor} 0%, {secondColor} 100%)"
    class="gradient"
  >
    <div
      style="position: relative; height: 100%; width: 100%; overflow: hidden; border-radius: var(--border-radius);"
    >
      <div
        style="background-color: {thirdColor}; width: {width}px; height: {height}px; top: {top}%; left: {left}%"
        class="gradient-element"
      ></div>
    </div>
    <div class="floating-icon">
      <PixelIcon name="eye" />
    </div>
  </div>
</a>

<style>
  .gradient {
    position: relative;
    border-radius: var(--border-radius);
    background: #3f5efb;
    transition: 150ms linear;
  }

  .gradient-element {
    position: absolute;

    filter: blur(40px);
    border-radius: 50%;
  }

  /* NOISE TEXTURE */
  .gradient::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(data:image/png;base64,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);
    opacity: 0.66; /* Adjust opacity of noise */
    pointer-events: none;
    border-radius: var(--border-radius);
  }

  .floating-icon {
    position: absolute;
    bottom: calc(50% - 50px);
    left: calc(50% - 50px);

    height: 100px;
    width: 100px;

    color: white;
    filter: drop-shadow(0 0 4px #00000030);
    transition: transform 800ms ease-out;

    margin-top: 3px;
  }

  a:hover .floating-icon {
    transform: scale(1.1);
  }

  a:hover .gradient {
    box-shadow: 0 0 10px #00000028;
  }

  @media screen and (max-width: 620px) {
    .gradient {
      height: 200px;
    }
  }
</style>
