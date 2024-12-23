<script>
  import { onMount } from "svelte";

  const titles = [
    "Visual Designer",
    "Product Designer",
    "Web Developer",
    "UI Designer",
    "Web Designer",
    "UX Designer",
    "User Researcher",
  ];

  const characters = "abcdefghijklmnopqrstuvwxyz0123456789<?&%$#@;>       ";

  const starterTitle = "UX Designer";
  let currentTitle = starterTitle;

  let textElement;
  $: currentLetters = Array.from(
    textElement?.querySelectorAll(".letter") || [],
  );

  const changeText = () => {
    let newTitle = currentTitle;
    while (newTitle === currentTitle) {
      const randomIndex = Math.floor(Math.random() * titles.length);
      currentTitle = titles[randomIndex];
    }

    for (let index = 0; index < currentLetters.length; index++) {
      const timer = Math.random() * 450 * index;
      setTimeout(() => {
        shuffleLetter(currentLetters[index], currentTitle[index] || "");
      }, timer);

      if (index === currentLetters.length - 1) {
        setTimeout(changeText, 8000 + timer);
      }
    }
  };

  const shuffleLetter = (element, letter) => {
    element?.classList.add("bit-mapped");

    let timeoutId;
    const delay = Math.max(100, Math.floor(Math.random() * 300));
    const duration = 1000;

    function randomize() {
      let randomChar =
        characters[Math.floor(Math.random() * characters.length)]; // Pick a random character
      if (Math.random() < 0.5) {
        randomChar = randomChar.toUpperCase(); // Convert to uppercase with 50% probability
      }
      const finalText = randomChar;
      element.textContent = finalText.toString();
      if (Date.now() - startTime < duration) {
        timeoutId = setTimeout(randomize, delay); // Recursively call randomize until duration expires
      } else {
        clearTimeout(timeoutId);
        element.textContent = letter;
        element.classList.remove("bit-mapped");
      }
    }

    const startTime = Date.now(); // Record the start time
    randomize(); // Initial randomization

    return {
      cancel: function () {
        clearTimeout(timeoutId); // Cancel the timeout
      },
    };
  };

  const initializeText = () => {
    const characters = titles.reduce(
      (maxLength, currentString) => Math.max(maxLength, currentString.length),
      0,
    );

    let children = Array.from(textElement.childNodes);

    // Loop through child nodes and remove only text nodes
    children.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.remove();
      }
    });

    for (let index = 0; index < characters; index++) {
      const letter = currentTitle[index];
      const span = document.createElement("span");
      span.classList.add("letter");
      textElement.appendChild(span);
      if (letter) {
        shuffleLetter(span, letter);
      }

      if (index === characters - 1) {
        setTimeout(changeText, 4000);
      }
    }
  };

  onMount(initializeText);
</script>

<h1 bind:this={textElement}>
  <span style="display: none; opacity: 0; width: 0;">|</span>
  UX Designer
</h1>

<style>
  h1 {
    height: 1.25em;
    white-space: nowrap;
    overflow-y: visible;
    text-transform: none;
  }
</style>
