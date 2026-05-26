import VideoCard from "./VideoCard";

const subjectColors = {
  Mathematics: "#7F77DD",
  Biology: "#1D9E75",
  Physics: "#378ADD",
  History: "#EF9F27",
  Chemistry: "#D85A30",
  Literature: "#D4537E",
};

const thumbnailPatterns = {
  math: { bg: "#1a1730", accent: "#7F77DD" },
  bio: { bg: "#0f1f1a", accent: "#1D9E75" },
  physics: { bg: "#0d1824", accent: "#378ADD" },
  history: { bg: "#1f1a0d", accent: "#EF9F27" },
  chem: { bg: "#1f1208", accent: "#D85A30" },
  lit: { bg: "#1f0d15", accent: "#D4537E" },
};

export default function VideoPlayer({ video, onBack, allVideos }) {
  const color = subjectColors[video.subject] || "#7F77DD";
  const t = thumbnailPatterns[video.thumbnail] || thumbnailPatterns.math;
  const related = allVideos.filter(v => v.id !== video.id).slice(0, 4);

  return (
    <div style={{ padding: "32px 40px", maxWidth: 1200 }}>
      {/* Back */}
      <button
        onClick={onBack}
        style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "none", border: "none", cursor: "pointer",
          color: "rgba(255,255,255,0.4)", fontSize: 13,
          marginBottom: 24, padding: 0,
          transition: "color 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
        onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
      >
        <i className="ti ti-arrow-left" style={{ fontSize: 16 }} />
        Back to feed
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 32 }}>
        {/* Main player */}
        <div>
          {/* Video area */}
          <div style={{
            width: "100%", aspectRatio: "16/9",
            background: t.bg,
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden", marginBottom: 20,
          }}>
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: 120, height: 120, borderRadius: "50%",
              border: `1px solid ${t.accent}33`,
            }} />
            <div style={{
              width: 60, height: 60, borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
              border: `1.5px solid rgba(255,255,255,0.2)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}>
              <i className="ti ti-player-play" style={{ fontSize: 24, color: "#fff", marginLeft: 3 }} />
            </div>

            {/* Mock controls bar */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
              padding: "24px 16px 14px",
            }}>
              {/* Progress bar */}
              <div style={{
                height: 3, background: "rgba(255,255,255,0.2)",
                borderRadius: 2, marginBottom: 10, cursor: "pointer",
              }}>
                <div style={{
                  height: "100%", width: `${video.progress || 15}%`,
                  background: color, borderRadius: 2, position: "relative",
                }}>
                  <div style={{
                    position: "absolute", right: -5, top: "50%",
                    transform: "translateY(-50%)",
                    width: 10, height: 10, borderRadius: "50%",
                    background: color,
                  }} />
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", fontSize: 18, padding: 0 }}>
                    <i className="ti ti-player-play" />
                  </button>
                  <button style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.6)", fontSize: 16, padding: 0 }}>
                    <i className="ti ti-volume" />
                  </button>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                    {video.progress > 0 ? `${Math.floor(video.progress/100 * 18)}:${String(Math.floor(Math.random()*59)).padStart(2,"0")}` : "0:00"} / {video.duration}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.6)", fontSize: 16, padding: 0 }}>
                    <i className="ti ti-settings" />
                  </button>
                  <button style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.6)", fontSize: 16, padding: 0 }}>
                    <i className="ti ti-arrows-maximize" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 12, color, fontWeight: 500 }}>{video.subject}</span>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>·</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{video.views} views</span>
            </div>
            <h1 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 24, fontWeight: 400,
              color: "#e8e4dc", margin: "0 0 12px",
              letterSpacing: "-0.02em", lineHeight: 1.3,
            }}>{video.title}</h1>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: "50%",
                  background: `${color}33`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 500, color,
                }}>
                  {video.instructor.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 500, color: "#e8e4dc", margin: 0 }}>{video.instructor}</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", margin: 0 }}>{video.subject} Faculty</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { icon: "ti-bookmark", label: "Save" },
                  { icon: "ti-share", label: "Share" },
                  { icon: "ti-thumb-up", label: "Like" },
                ].map(btn => (
                  <button key={btn.label} style={{
                    display: "flex", alignItems: "center", gap: 6,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 8, padding: "7px 12px",
                    color: "rgba(255,255,255,0.5)", fontSize: 12,
                    cursor: "pointer", transition: "all 0.15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#e8e4dc"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                  >
                    <i className={`ti ${btn.icon}`} style={{ fontSize: 15 }} />
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related sidebar */}
        <div>
          <h3 style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Up next</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {related.map(v => (
              <VideoCard key={v.id} video={v} onClick={() => {}} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
