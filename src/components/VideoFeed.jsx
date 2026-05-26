import VideoCard from "./VideoCard";

const sections = {
  home: "Home",
  continue: "Continue Learning",
  subjects: "All Subjects",
  saved: "Saved Videos",
  progress: "My Progress",
};

export default function VideoFeed({ videos, activeSection, onSelectVideo }) {
  const inProgress = videos.filter(v => v.progress > 0 && v.progress < 100);
  const newVideos = videos.filter(v => v.progress === 0);
  const completed = videos.filter(v => v.progress === 100);

  return (
    <div style={{ padding: "36px 40px", maxWidth: 1200 }}>
      {/* Header */}
      <div style={{ marginBottom: 40, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
            {new Date().toLocaleDateString("en-ZA", { weekday: "long", day: "numeric", month: "long" })}
          </p>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 32,
            fontWeight: 400,
            color: "#e8e4dc",
            margin: 0,
            letterSpacing: "-0.02em",
          }}>
            {activeSection === "home" ? "Good afternoon, Thabo" : sections[activeSection] || activeSection}
          </h1>
        </div>

        {/* Search */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 10, padding: "8px 14px",
          cursor: "text",
        }}>
          <i className="ti ti-search" style={{ fontSize: 16, color: "rgba(255,255,255,0.3)" }} />
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>Search videos...</span>
        </div>
      </div>

      {activeSection === "home" && (
        <>
          {/* Stats strip */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
            marginBottom: 48,
          }}>
            {[
              { label: "Videos watched", value: "24", icon: "ti-player-play" },
              { label: "Hours learned", value: "11.5", icon: "ti-clock" },
              { label: "Subjects", value: "4", icon: "ti-books" },
              { label: "Streak", value: "7 days", icon: "ti-flame" },
            ].map(stat => (
              <div key={stat.label} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 10, padding: "14px 16px",
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "rgba(127,119,221,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <i className={`ti ${stat.icon}`} style={{ fontSize: 17, color: "#7F77DD" }} />
                </div>
                <div>
                  <p style={{ fontSize: 18, fontWeight: 500, color: "#e8e4dc", margin: 0 }}>{stat.value}</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", margin: 0 }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Continue watching */}
          {inProgress.length > 0 && (
            <section style={{ marginBottom: 48 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <h2 style={{ fontSize: 16, fontWeight: 500, color: "#e8e4dc", margin: 0 }}>Continue watching</h2>
                <button style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: 12, color: "rgba(255,255,255,0.35)",
                  display: "flex", alignItems: "center", gap: 4,
                }}>See all <i className="ti ti-arrow-right" style={{ fontSize: 12 }} /></button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
                {inProgress.map(video => (
                  <VideoCard key={video.id} video={video} onClick={() => onSelectVideo(video)} />
                ))}
              </div>
            </section>
          )}

          {/* New videos */}
          <section style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <h2 style={{ fontSize: 16, fontWeight: 500, color: "#e8e4dc", margin: 0 }}>New for you</h2>
              <button style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 12, color: "rgba(255,255,255,0.35)",
                display: "flex", alignItems: "center", gap: 4,
              }}>See all <i className="ti ti-arrow-right" style={{ fontSize: 12 }} /></button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
              {newVideos.map(video => (
                <VideoCard key={video.id} video={video} onClick={() => onSelectVideo(video)} />
              ))}
            </div>
          </section>
        </>
      )}

      {activeSection !== "home" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {videos.map(video => (
            <VideoCard key={video.id} video={video} onClick={() => onSelectVideo(video)} />
          ))}
        </div>
      )}
    </div>
  );
}
