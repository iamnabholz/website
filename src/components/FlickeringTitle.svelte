<script>
    import {onMount} from "svelte";
    import eyeIcon from "$lib/icons/eye-icon.svg?raw";

    let container;
    export let text;
    export let iconSrc;

    // Function to start the "bitmapped" animation
    const startSwitch = () => {
        if (!container) return;
        const letters = container.querySelectorAll(".letter");

        if (letters.length === 0) return;

        // Pick a random letter
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomLetter = letters[randomIndex];

        // Apply the "bitmapped" class to the random letter
        randomLetter.classList.add("bitmapped");

        // Set a duration to remove the class again
        const duration = Math.max(3000, Math.floor(Math.random() * 5000));

        setTimeout(() => {
            randomLetter.classList.remove("bitmapped");
        }, duration);

        // Set a delay before starting the next switch
        const delay = Math.max(500, Math.floor(Math.random() * 2000));

        setTimeout(startSwitch, delay);
    };

    // Start the animation once the component is mounted
    onMount(startSwitch);
</script>

<div class="row-wrapper title">
    <h1 bind:this={container}>
        {#each text as letter}
            <span class="letter">{letter}</span>
        {/each}
    </h1>

    <div class="icon">
        {#if iconSrc}
            {@html iconSrc}
        {:else}
            {@html eyeIcon}
        {/if}
    </div>
</div>

<style>
    h1 {
        height: 1.25em;
        white-space: nowrap;
        overflow-y: visible;
        text-transform: none;
    }

    .letter {
        font-size-adjust: 0.484;
    }

    .bitmapped {
        font-size-adjust: 0.484;
    }

    .row-wrapper {
        justify-content: space-between;
    }

    .icon {
        height: 96px;
        width: 96px;
    }

    @media screen and (max-width: 620px) {
        .icon {
            height: 60px;
            width: 60px;
        }
    }
</style>
