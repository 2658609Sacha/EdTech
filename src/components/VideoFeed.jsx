import VideoCard from "./VideoCard";

const sections = {
  home: "Home",
  continue: "Continue Learning",
  subjects: "All Subjects",
  saved: "Saved Videos",
  progress: "My Progress",
};

export default function VideoFeed({ videos, activeSection, onSelectVideo, theme }) {
  const headerLabel = activeSection === "home" ? "For you" : sections[activeSection] || activeSection;

  return (
    <div style={{ width: "100%", maxWidth: 520, margin: "0 auto", padding: "24px 16px 32px", minHeight: "100vh" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 24 }}>
        <div>
          <p style={{ fontSize: 12, color: theme.mutedText, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
            {new Date().toLocaleDateString("en-ZA", { weekday: "long", day: "numeric", month: "long" })}
          </p>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 36,
            fontWeight: 400,
            color: theme.primaryText,
            margin: 0,
            letterSpacing: "-0.04em",
          }}>
            {headerLabel}
          </h1>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          {[
            { label: "For you", active: true },
            { label: "Following", active: false },
          ].map(tab => (
            <button
              key={tab.label}
              style={{
                border: "none",
                borderRadius: 999,
                padding: "10px 16px",
                cursor: "pointer",
                background: tab.active ? theme.activeBg : theme.secondarySurface,
                color: tab.active ? theme.primaryText : theme.secondaryText,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <p style={{ fontSize: 13, color: theme.secondaryText, marginBottom: 24 }}>
        Swipe through the feed to explore quick lesson shorts. Click any card to open full details.
      </p>

      <div style={{ display: "grid", gap: 28, scrollSnapType: "y mandatory", paddingBottom: 32 }}>
        {videos.map(video => (
          <VideoCard key={video.id} video={video} onClick={() => onSelectVideo(video)} theme={theme} />
        ))}
      </div> 
    </div>
  );
}
