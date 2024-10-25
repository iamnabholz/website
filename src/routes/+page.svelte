<script>
    import EmailCopy from "../components/EmailCopy.svelte";
    import FlickeringTitle from "../components/FlickeringTitle.svelte";
    import Gradient from "../components/Gradient.svelte";
    import TitleText from "../components/TitleText.svelte";
    import WorkLink from "../components/WorkLink.svelte";
    import MoreShowcase from "../components/MoreShowcase.svelte";

    import sunIcon from "$lib/icons/sun-icon.svg?raw";
    import Contact from "../components/Contact.svelte";

    export let data;

    const skills = ["Figma", "Affinity Suite", "Penpot", "Photoshop", "Illustrator", "Zeplin", "Readymag", "Webflow", "Framer", "HTML&CSS", "JavaScript",];

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

<div class="column-container">
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
</div>

<div class="column-wrapper" style="padding-top: var(--rem-gap);">
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
</div>

<div class="pill-wrapper">
    {#each skills as skill}
        <p>
            {skill}
        </p>
        <p class="icons">
            {icons[Math.floor(Math.random() * icons.length)]}
        </p>
    {/each}
</div>

<span style="height: 2vw"></span>

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

    .pill-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        column-gap: 20px;
        row-gap: 16px;

        width: min(100%, 860px);
        margin: 0 auto;
    }
</style>
