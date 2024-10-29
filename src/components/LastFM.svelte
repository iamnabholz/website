<script>
    import {onMount} from "svelte";

    let trackCover = "/img/track-cover.png";
    let trackLink = "";
    let trackName = "Song Name";
    let trackArtist = "Artist";
    let trackPlaying = "";

    const relativeTime = (date) => {

    }

    onMount(async () => {
        const response = await fetch(
            "https://lively-credit-b295.nabholz.workers.dev/"
        );
        const data = await response.json();
        const recent = data.recenttracks.track;

        trackCover = recent[0].image[2]["#text"];
        trackLink = recent[0].url;
        trackName = recent[0].name;
        trackArtist = recent[0].artist["#text"];
        if (recent[0]["@attr"] !== undefined) {
            trackPlaying = "Now Playing";
        } else {
            trackPlaying = new Date(recent[0].date.uts * 1000).toLocaleTimeString("default", {
                timeZone: "America/La_Paz",
                weekday: "short",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });
        }
        console.log(recent)
    });
</script>

<div class="track-container">
    <a href={trackLink} target="_blank">
        <img class="track-cover" src={trackCover} alt="Song cover"/>
    </a>
    <div class="track-information">
        <p class="now-playing">{trackPlaying}</p>
        <p>{trackName}</p>
        <p>{trackArtist}</p>
    </div>
</div>

<style>
    .track-container {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .track-cover {
        height: 120px;
        width: 120px;
        background-color: transparent;
    }

    .track-information {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
    }

    .now-playing {
        color: var(--accent-color);
        font-size: 12px;
        text-transform: uppercase;
        font-weight: bold;
        display: block;
        opacity: 1;
    }

    /*.show-np {
        display: block
        opacity: 1;
    }*/

    a {
        border: none;
    }

    a::after {
        display: none;
    }
</style>
