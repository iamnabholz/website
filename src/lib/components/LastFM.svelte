<script>
  import { onMount } from "svelte";

  let trackCover = $state("/img/track-cover.png");
  let trackLink = $state("");
  let trackName = $state("Song Name");
  let trackArtist = $state("Artist");
  let trackPlayed = $state("");
  let isCurrentlyPlaying = $state(false);

  let isLoading = $state(true);
  let error = $state(null);

  const relativeTime = (duration) => {
    const minutes = Math.floor(duration / (1000 * 60));
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));

    if (days > 0) {
      return days === 1 ? "A day ago" : `${days} days ago`;
    } else if (hours > 0) {
      return hours === 1 ? "An hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? "A minute ago" : `${minutes} minutes ago`;
    } else {
      return "Just now";
    }
  };

  const fetchNowPlaying = async () => {
    try {
      isLoading = true;
      error = null;

      const response = await fetch(
        "https://lively-credit-b295.nabholz.workers.dev/",
      );

      // Check if the response is OK before trying to parse JSON
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }

      const data = await response.json();

      const recent = data.recenttracks.track[0];

      trackCover = recent.image?.[2]["#text"] || "/img/track-cover.png";
      trackLink = recent.url || "";
      trackName = recent.name || "Unknown Track";
      trackArtist = recent.artist?.["#text"] || "Unknown Artist";

      // The @attr property exists when a track is currently playing
      // This is Last.fm's way of marking the "now playing" track
      if (recent["@attr"]?.nowplaying === "true") {
        isCurrentlyPlaying = true;
        trackPlayed = "Currently";
      } else {
        isCurrentlyPlaying = false;

        // Convert Unix timestamp (seconds) to milliseconds for JavaScript Date
        const trackTime = new Date(recent.date?.uts * 1000);
        const currentTime = new Date();
        const timeDifference = currentTime.getTime() - trackTime.getTime();

        trackPlayed = relativeTime(timeDifference);
      }
    } catch (err) {
      // Proper error handling means your component won't break if Last.fm is down
      console.error("Error fetching now playing:", err);
      error = err.message;
    } finally {
      isLoading = false;
    }
  };

  onMount(() => {
    fetchNowPlaying();

    // Optional: Refresh every 30 seconds to keep the "now playing" status current
    // This makes your component feel more alive without manual refreshes
    const interval = setInterval(fetchNowPlaying, 120000);

    // Cleanup function runs when component is destroyed
    // This prevents memory leaks from the interval continuing after unmount
    return () => clearInterval(interval);
  });
</script>

{#if isLoading}
  <div class="track-container">
    <div class="track-cover skeleton"></div>
    <div class="track-information">
      <span class="playing-info">Loading...</span>
    </div>
  </div>
{:else if error}
  <div class="track-container">
    <div class="track-information">
      <span class="playing-info" style="color: var(--error-color, #ef4444);">
        Unable to load track
      </span>
    </div>
  </div>
{:else}
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
{/if}

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

  /* Simple skeleton loader for the loading state */
  .skeleton {
    background: linear-gradient(
      90deg,
      var(--skeleton-base, #e0e0e0) 25%,
      var(--skeleton-highlight, #f0f0f0) 50%,
      var(--skeleton-base, #e0e0e0) 75%
    );
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
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
    opacity: 0;
    transition: opacity 200ms ease-in;
  }

  /* Show the animation bars when currently playing */
  .is-playing .playing-lines {
    opacity: 1;
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
