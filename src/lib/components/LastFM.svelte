<script>
  import { onMount } from "svelte";

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
      return hours + " hours ago";
    } else {
      if (minutes < 1) {
        return "A minute ago";
      }
      return minutes + " minutes ago";
    }
  };

  onMount(async () => {
    const response = await fetch(
      "https://lively-credit-b295.nabholz.workers.dev/",
    );
    const data = await response.json();
    const recent = data.recenttracks.track;

    trackCover = recent[0].image[2]["#text"];
    trackLink = recent[0].url;
    trackName = recent[0].name;
    trackArtist = recent[0].artist["#text"];
    if (recent[0]["@attr"] !== undefined) {
      isCurrentlyPlaying = true;
      trackPlayed = "Currently";
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
    <img loading="lazy" class="track-cover" src={trackCover} alt="Song cover" />
  </a>
  <div class="track-information">
    <span class="playing-info" class:is-playing={isCurrentlyPlaying}>
      {trackPlayed}
      <span
        class:is-playing={isCurrentlyPlaying}
        class="playing-lines row-wrapper"
      >
        <span class="line bass"></span>
        <span class="line mid"></span>
        <span class="line high"></span>
      </span>
    </span>

    <p><b>{trackName}</b></p>
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
    font-size: 14px;
    text-transform: uppercase;
    opacity: 1;
    position: relative;
    width: fit-content;
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

  .playing-lines {
    height: 100%;
    align-items: center;
    gap: 2.4px;
    position: absolute;
    top: -1px;
    right: -20px;
    opacity: 0;
  }

  .line {
    height: 12px;
    width: 2px;
    background-color: var(--accent-color);
  }

  .bass {
    animation: pulse 4.3s 100ms infinite reverse ease-in-out;
  }

  .mid {
    animation: pulse 2s 120ms infinite ease-out;
  }

  .high {
    animation: pulse 1s infinite alternate-reverse ease-out;
  }

  .is-playing {
    font-weight: bold;
    color: var(--accent-color);
  }

  @keyframes pulse {
    0% {
      height: 2px;
    }
    50% {
      height: 12px;
    }
    60% {
      height: 5px;
    }
    80% {
      height: 10px;
    }
    100% {
      height: 2px;
    }
  }
</style>
