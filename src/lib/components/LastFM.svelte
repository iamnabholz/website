<script>
    import {onMount} from "svelte";

    let trackCover = "/img/track-cover.png";
    let trackLink = "";
    let trackName = "Song Name";
    let trackArtist = "Artist";
    let trackPlayed = "";
    let isCurrentlyPlaying = false;

    const relativeTime = (duration) => {
        const minutes = Math.floor((duration / (1000 * 60)) % 60);
        const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        if (hours > 0) {
            if (hours < 2) {
                return "An hour ago";
            }
            return hours + " hours ago"
        } else {
            if (minutes < 1) {
                return "A minute ago";
            }
            return minutes + " minutes ago"
        }
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
            isCurrentlyPlaying = true;
            trackPlayed = "Currently Playing";
        } else {
            isCurrentlyPlaying = false;
            const currentTime = new Date();
            const trackTime = new Date(recent[0].date.uts * 1000);
            const finalTime = currentTime.getTime() - trackTime.getTime();
            trackPlayed = relativeTime(finalTime);
        }
    });
</script>

<div class="track-container">
    <a href={trackLink} target="_blank" title="View song on last.fm">
        <img class="track-cover" src={trackCover} alt="Song cover"/>
    </a>
    <div class="track-information">
        <p class="playing-info" class:is-playing={isCurrentlyPlaying}>{trackPlayed}</p>
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

    .playing-info {
        color: var(--text-color);
        font-size: 12px;
        text-transform: uppercase;
        font-weight: bold;
        opacity: 1;
    }

    .is-playing {
        color: var(--accent-color);
        opacity: 1;
    }

    a {
        border: none;
        transition: 250ms ease-out;
    }

    a:hover {
        transform: scale(1.02);
    }

    a::after {
        display: none;
    }
</style>
