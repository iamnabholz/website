<script>
  import { onMount } from "svelte";

  let trackCover = $state("/img/track-cover.png");
  let trackLink = $state("");
  let trackName = $state("Song Name");
  let trackArtist = $state("Artist");
  let trackPlayed = $state("");

  const fetchNowPlaying = async () => {
    try {
      const response = await fetch(
        "https://lively-credit-b295.nabholz.workers.dev/",
      );

      // Check if the response is OK before trying to parse JSON
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }

      const data = await response.json();

      const recent = data.toptracks.track[0];

      trackCover = recent.image?.[2]["#text"] || "/img/track-cover.png";
      trackLink = recent.url || "";
      trackName = recent.name || "Unknown Track";
      trackArtist = recent.artist?.["name"] || "Unknown Artist";
      trackPlayed = recent.playcount || 1;
    } catch (err) {
      // Proper error handling means your component won't break if Last.fm is down
      console.error("Error fetching now playing:", err);
    }
  };

  onMount(() => {
    fetchNowPlaying();
  });
</script>

<div class="track-container">
  <a
    href={trackLink}
    target="_blank"
    rel="noopener noreferrer"
    title="View song on last.fm"
  >
    <img
      loading="lazy"
      class="track-cover"
      src={trackCover}
      alt="{trackName} by {trackArtist} cover art"
    />
  </a>
  <div class="track-information">
    <span class="playing-info">
      Played {trackPlayed > 1 ? trackPlayed + " times" : trackPlayed + " time"}
      <span class="playing-lines row-wrapper">
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
    border-radius: 4px; /* Slight rounding looks more polished */
  }

  .track-information {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .playing-info {
    color: var(--accent-color);
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    width: fit-content;
  }

  a {
    border: none;
    transition: transform 250ms ease-out;
    display: block; /* Prevents extra spacing around the image */
  }

  a:hover {
    transform: scale(1.02);
  }

  a::after {
    display: none;
  }

  .playing-lines {
    display: flex; /* More explicit than relying on row-wrapper class */
    height: 100%;
    align-items: center;
    gap: 2.4px;
    position: absolute;
    top: -1px;
    right: -20px;
    transition: opacity 200ms ease-in;
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
