const subjectColors = {
  Mathematics: "#7F77DD",
  Biology: "#1D9E75",
  Physics: "#378ADD",
  History: "#EF9F27",
  Chemistry: "#D85A30",
  Literature: "#D4537E",
};

const thumbnailPatterns = {
  math: { bg: "#18162d", accent: "#7F77DD", symbol: "∑" },
  bio: { bg: "#0f1f1a", accent: "#1D9E75", symbol: "⬡" },
  physics: { bg: "#0c1723", accent: "#378ADD", symbol: "⚛" },
  history: { bg: "#1f1a0d", accent: "#EF9F27", symbol: "◎" },
  chem: { bg: "#21130d", accent: "#D85A30", symbol: "⬢" },
  lit: { bg: "#1f0d15", accent: "#D4537E", symbol: "❝" },
};

function ThumbnailPlaceholder({ type, duration, progress, theme }) {
  const t = thumbnailPatterns[type] || thumbnailPatterns.math;
  return (
    <div style={{
      width: "100%",
      aspectRatio: "9 / 16",
      background: t.bg,
      borderRadius: 28,
      position: "relative",
      overflow: "hidden",
      border: `1px solid ${theme.cardBorder}`,
      boxShadow: theme.cardShadow,
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08), transparent 25%), radial-gradient(circle at 80% 15%, rgba(127,119,221,0.16), transparent 18%)",
      }} />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.28) 28%, rgba(0,0,0,0.9) 100%)",
      }} />

      <div style={{
        position: "absolute",
        top: 18,
        left: 18,
        padding: "8px 12px",
        background: theme.overlayBg,
        borderRadius: 999,
        color: "#ffffff",
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        fontWeight: 700,
      }}>
        {duration}
      </div>

      <div style={{
        position: "absolute",
        bottom: 24,
        right: 18,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "center",
      }}>
        {["ti-book", "ti-question-mark", "ti-heart", "ti-message-circle", "ti-external-link", "ti-bookmark"].map(icon => (
          <button
            key={icon}
            style={{
              width: 42,
              height: 42,
              borderRadius: 16,
              border: `1px solid ${theme.cardBorder}`,
              background: theme.overlayBg,
              color: "#ffffff",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
          >
            <i className={`ti ${icon}`} style={{ fontSize: 18 }} />
          </button>
        ))}
      </div>

      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          width: 62,
          height: 62,
          borderRadius: "50%",
          background: theme.overlayBg,
          border: `1px solid ${theme.cardBorder}`,
          display: "grid",
          placeItems: "center",
          boxShadow: theme.cardShadow,
        }}>
          <i className="ti ti-player-play" style={{ fontSize: 22, color: "#ffffff", marginLeft: 1 }} />
        </div>
      </div>

      <div style={{
        position: "absolute",
        left: 18,
        right: 18,
        bottom: 18,
        color: "#ffffff",
        zIndex: 2,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.75)",
            background: theme.labelBg,
            borderRadius: 999,
            padding: "4px 9px",
            letterSpacing: "0.08em",
          }}>
            {progress > 0 ? `${progress}% watched` : "New"}
          </span>
          <span style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.65)",
          }}>
            {duration}
          </span>
        </div>
        <p style={{ fontSize: 20, fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
          {type === "math" ? "Quick math breakdown" : "Quick lesson moment"}
        </p>
      </div>
    </div>
  );
}

export default function VideoCard({ video, onClick, theme }) {
  const color = subjectColors[video.subject] || "#7F77DD";

  return (
    <div
      onClick={onClick}
      style={{
        scrollSnapAlign: "center",
        background: theme.cardBg,
        borderRadius: 28,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
        border: `1px solid ${theme.cardBorder}`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = theme.cardShadow;
        e.currentTarget.style.borderColor = theme.cardHoverBorder;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = theme.cardBorder;
      }}
    >
      <ThumbnailPlaceholder type={video.thumbnail} duration={video.duration} progress={video.progress} theme={theme} />

      <div style={{ padding: "18px 20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 12 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, margin: 0, color: color }}>{video.subject}</p>
            <p style={{ fontSize: 12, margin: "6px 0 0", color: theme.secondaryText }}>{video.instructor}</p>
          </div>
          <span style={{ fontSize: 12, color: theme.secondaryText }}>{video.views} views</span>
        </div>

        <h3 style={{ fontSize: 18, margin: "0 0 10px", lineHeight: 1.25, color: theme.primaryText }}>{video.title}</h3>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: `${color}22`,
            display: "grid",
            placeItems: "center",
            color,
            fontSize: 12,
            fontWeight: 700,
          }}>
            {video.instructor.split(" ").map(n => n[0]).join("").slice(0, 2)}
          </div>
          <span style={{ fontSize: 12, color: theme.secondaryText }}>{video.progress > 0 ? `${video.progress}% complete` : "Start now"}</span>
        </div>
      </div>
    </div>
  );
}
