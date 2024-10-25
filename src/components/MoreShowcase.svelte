<script>
    import FlickeringTitle from "./FlickeringTitle.svelte";

    import timesetsIcon from "$lib/icons/timesets-icon.webp";
    import itchioIcon from "$lib/icons/itchio-icon.webp";
    import luckyIcon from "$lib/icons/lucky-icon.webp";
    import fabricIcon from "$lib/icons/fabric-icon.webp";

    import Project from "./Project.svelte";
</script>

<div class="side-container">
    <FlickeringTitle text="Experiments"/>

    <div class="column-container">
        <p>
            Some side projects I've started on my free time, from time managing
            webapps to videogames.
            <br/> <br/>
            I enjoy exploring a lot of fields that relate to programming and design.
        </p>
    </div>

    <!--<a href="/extra">Explore more projects</a>-->

    <div class="column-container">
        <Project
                title="Fabric Visions"
                desc="Videogames I've developed over the past few years."
                imgSrc={fabricIcon}
                href="https://fabricvisions.itch.io/"
        />

        <Project
                title="Timesets"
                desc="Pomodoro-like timer and stopwatch that you can customize."
                imgSrc={timesetsIcon}
                href="https://timesets.netlify.app/"
        />

        <!--<Project
                title="LUCKYSCREENS"
                desc="Sharing graphics, wallpapers and more."
                imgSrc={luckyIcon}
                href="https://luckyscreens.netlify.app/"
        />-->

        <Project
                title="Panorama Tab"
                desc="Browser extension that replaces your new tab with a new customizable design."
                imgSrc="/favicon.png"
                href="https://panoramatab.netlify.app/"
        />
    </div>
</div>

<style>
    .side-container {
        display: flex;
        flex-direction: column;
        background-color: var(--dark-color);
        color: var(--light-color);
        position: relative;
        padding: 2.5rem 0 4rem 0;
        gap: var(--rem-gap);
    }

    .side-container::before {
        content: "";
        position: absolute;
        left: -4rem;
        top: 0;
        background-color: var(--dark-color);
        width: calc(100% + 8rem);
        height: 100%;
        z-index: -5;
    }

    a::after {
        font-family: "Icons";
        content: "A";
    }

    @media screen and (max-width: 1020px) {
        .side-container::before {
            left: -16px;
            width: calc(100% + 32px);
        }
    }
</style>
