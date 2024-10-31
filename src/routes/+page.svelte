<script>
    import EmailCopy from "../components/EmailCopy.svelte";
    import FlickeringTitle from "../components/FlickeringTitle.svelte";
    import Gradient from "../components/Gradient.svelte";
    import TitleText from "../components/TitleText.svelte";
    import WorkLink from "../components/WorkLink.svelte";
    import MoreShowcase from "../components/MoreShowcase.svelte";

    import sunIcon from "$lib/icons/sun-icon.svg?raw";
    import Contact from "../components/Contact.svelte";
    import LastFM from "../components/LastFM.svelte";

    export let data;

    const desSkills = ["Figma", "Affinity Suite", "Penpot", "Photoshop", "Illustrator", "Zeplin"];
    const devSkills = ["Readymag", "Webflow", "Framer", "HTML&CSS", "JavaScript", "Astro", "Svelte"]
    const icons = ["A", "B", "D", "E", "F", "H", "M", "S", "W"];

    let scrollY = 0;
</script>

<svelte:head>
    <title>Lukas Nabholz | UX Designer</title>
</svelte:head>

<svelte:window bind:scrollY/>

<div class="header-container">
    <div class="header">
        <div class="text">
            <h1>Lukas Nabholz</h1>
            <TitleText/>
            <span class:hide={scrollY > 50} style="transition: all 200ms ease-in;">
				<p class="scroll-indicator"><span class="icons">A</span> Scroll down</p>
			</span>
        </div>

        <span class="gradient-container">
			<Gradient/>
		</span>
    </div>
</div>

<section class="column-container">
	<span>
		<p>
			Multidisciplinary designer with a passion for discovery, experimentation
			and innovation.
			<br/> <br/>
			Solving complex problems and helping new ideas achieve their goals by crafting
			intuitive and easy-to-use interfaces that are beautiful.
			<br/> <br/>
		</p>
		<EmailCopy/>
	</span>
</section>

<section class="column-wrapper" style="padding-top: var(--rem-gap);">
    <FlickeringTitle text="Works" iconSrc={sunIcon}/>

    <span class="works-wrapper">
		{#each data.posts as post}
			<WorkLink
                    title={post.title}
                    href={post.href}
                    detail={post.detail}
                    color={post.color}
                    image={post.image}
            />
		{/each}
	</span>
</section>

<span style="height: 1vh"></span>

<section class="skills-container">
    <div class="pill-wrapper">
        <div class="pills">
            {#each desSkills as skill}
                <p>
                    {skill}
                </p>
                <p class="icons">
                    {icons[Math.floor(Math.random() * icons.length)]}
                </p>
            {/each}
        </div>
        <div class="pills">
            {#each desSkills as skill}
                <p>
                    {skill}
                </p>
                <p class="icons">
                    {icons[Math.floor(Math.random() * icons.length)]}
                </p>
            {/each}
        </div>
    </div>
</section>

<section class="skills-container">
    <div class="pill-wrapper pill-wrapper-op">
        <div class="pills">
            {#each devSkills as skill}
                <p>
                    {skill}
                </p>
                <p class="icons">
                    {icons[Math.floor(Math.random() * icons.length)]}
                </p>
            {/each}
        </div>
        <div class="pills">
            {#each devSkills as skill}
                <p>
                    {skill}
                </p>
                <p class="icons">
                    {icons[Math.floor(Math.random() * icons.length)]}
                </p>
            {/each}
        </div>
    </div>
</section>

<MoreShowcase/>

<Contact showLinks={true}/>

<p>
    Santa Cruz, Bolivia <br/>
    <b style="font-size: 1.4rem;">
        {new Date().toLocaleTimeString("default", {
            timeZone: "America/La_Paz",
            weekday: "short",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        })}
    </b>
</p>

<LastFM/>

<span style="height: 64px"></span>

<style>
    .header-container {
        min-height: 25rem;
    }

    .header {
        position: sticky;
        top: 4rem;

        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
    }

    .header > .text {
        grid-column: span 2;
        position: relative;
    }

    .scroll-indicator {
        position: absolute;
        bottom: -18px;
        left: 0;
        display: none;
        opacity: 0;
        font-size: 0.8rem;
    }

    .scroll-indicator > span {
        display: inline-block;
        transform: rotateZ(90deg);
        margin: 0 2px 0 -2px;
        animation: float 3s ease infinite;
    }

    @keyframes float {
        0% {
            transform: translateY(-2px) rotateZ(90deg);
        }
        50% {
            transform: translateY(5px) rotateZ(90deg);
        }
        100% {
            transform: translateY(-2px) rotateZ(90deg);
        }
    }

    @media screen and (max-width: 1020px) {
        .header-container {
            height: calc(100vh - 6.4rem);
        }

        .header {
            top: 16px;
            grid-template-columns: 1fr;
            align-items: start;
            row-gap: 2rem;
            height: 100%;
        }

        .header > .text {
            align-self: self-end;
            order: 2;
        }

        .scroll-indicator {
            display: block;
            opacity: 0.6;
        }
    }

    @media screen and (max-width: 620px) {
        .gradient-container {
            height: 130%;
        }
    }

    .skills-container {
        border-radius: 2px;
        padding-top: 8px;
        padding-bottom: 4px;
        overflow: hidden;
    }

    .pill-wrapper {
        display: flex;
        width: 200%;
        column-gap: 2rem;
        /*flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        row-gap: 16px;

        width: min(100%, 860px);
        margin: 0 auto;*/
        animation: slide 46s linear infinite;
    }

    .pill-wrapper-op {
        animation: slide 46s linear reverse infinite;
    }

    @keyframes slide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50%);
        }
    }

    .pills {
        width: max-content;
        display: flex;
        justify-content: space-around;
        align-items: center;
        column-gap: 2rem;
    }

    .pills p {
        font-size: 1.4rem;
        text-wrap: nowrap;
    }
</style>
