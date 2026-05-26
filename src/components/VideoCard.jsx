const subjectColors = {
  Mathematics: "#7F77DD",
  Biology: "#1D9E75",
  Physics: "#378ADD",
  History: "#EF9F27",
  Chemistry: "#D85A30",
  Literature: "#D4537E",
};

const thumbnailPatterns = {
  math: { bg: "#1a1730", accent: "#7F77DD", symbol: "∑" },
  bio: { bg: "#0f1f1a", accent: "#1D9E75", symbol: "⬡" },
  physics: { bg: "#0d1824", accent: "#378ADD", symbol: "⚛" },
  history: { bg: "#1f1a0d", accent: "#EF9F27", symbol: "◎" },
  chem: { bg: "#1f1208", accent: "#D85A30", symbol: "⬢" },
  lit: { bg: "#1f0d15", accent: "#D4537E", symbol: "❝" },
};

function ThumbnailPlaceholder({ type, duration }) {
  const t = thumbnailPatterns[type] || thumbnailPatterns.math;
  return (
    <div style={{
      width: "100%",
      aspectRatio: "16/9",
      background: t.bg,
      borderRadius: "10px 10px 0 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: -20, right: -20,
        width: 80, height: 80, borderRadius: "50%",
        border: `1.5px solid ${t.accent}22`,
      }} />
      <div style={{
        position: "absolute", bottom: -10, left: -10,
        width: 60, height: 60, borderRadius: "50%",
        border: `1.5px solid ${t.accent}33`,
      }} />
      <span style={{ fontSize: 32, opacity: 0.25, color: t.accent }}>
        {t.symbol}
      </span>
      {/* Play button */}
      <div style={{
        position: "absolute",
        inset: 0, display: "flex",
        alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          background: "rgba(0,0,0,0.5)",
          border: "1.5px solid rgba(255,255,255,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <i className="ti ti-player-play" style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", marginLeft: 2 }} />
        </div>
      </div>
      {/* Duration */}
      <span style={{
        position: "absolute", bottom: 8, right: 8,
        background: "rgba(0,0,0,0.75)",
        color: "rgba(255,255,255,0.9)",
        fontSize: 11, padding: "2px 6px",
        borderRadius: 4, fontWeight: 500,
      }}>{duration}</span>
    </div>
  );
}

export default function VideoCard({ video, onClick }) {
  const color = subjectColors[video.subject] || "#7F77DD";

  return (
    <div
      onClick={onClick}
      style={{
        background: "#161920",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.2s, border-color 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
      }}
    >
      <ThumbnailPlaceholder type={video.thumbnail} duration={video.duration} />

      {/* Progress bar */}
      {video.progress > 0 && (
        <div style={{ height: 2, background: "rgba(255,255,255,0.08)" }}>
          <div style={{
            height: "100%", width: `${video.progress}%`,
            background: color, transition: "width 0.3s",
          }} />
        </div>
      )}

      <div style={{ padding: "12px 14px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
          <span style={{
            fontSize: 11, fontWeight: 500,
            color, letterSpacing: "0.03em",
          }}>{video.subject}</span>
          {video.progress === 100 && (
            <span style={{
              fontSize: 10, background: "rgba(29,158,117,0.15)",
              color: "#1D9E75", padding: "1px 6px", borderRadius: 4,
            }}>Completed</span>
          )}
        </div>

        <h3 style={{
          fontSize: 14, fontWeight: 500,
          color: "#e8e4dc", margin: "0 0 8px",
          lineHeight: 1.4,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>{video.title}</h3>

        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
            {video.instructor}
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
            {video.views} views
          </span>
        </div>
      </div>
    </div>
  );
}
