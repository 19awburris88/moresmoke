import { PLAYLIST_URL } from "../data/playlist";

function getEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(/playlist\/([a-zA-Z0-9]+)/);
  if (!match) return null;
  return `https://open.spotify.com/embed/playlist/${match[1]}?utm_source=generator&theme=0`;
}

export default function SpotifyPlayer({ compact = false }) {
  const embedUrl = getEmbedUrl(PLAYLIST_URL);
  const height = compact ? 152 : 352;

  if (!embedUrl) {
    return (
      <div className={`spotify-placeholder${compact ? " spotify-placeholder--compact" : ""}`}>
        <span className="spotify-placeholder-note" aria-hidden="true">♫</span>
        <p className="spotify-placeholder-title">Cigar Experience Soundtrack</p>
        <p className="spotify-placeholder-sub">
          {compact
            ? "Playlist dropping soon."
            : "The perfect smoke session soundtrack — dropping soon. Add your playlist URL to src/data/playlist.js to go live."}
        </p>
      </div>
    );
  }

  return (
    <div className={`spotify-player${compact ? " spotify-player--compact" : ""}`}>
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="More Smoke Cigars — Cigar Experience Soundtrack"
      />
    </div>
  );
}
