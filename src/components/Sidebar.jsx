const navItems = [
  { id: "home", icon: "ti-home", label: "Home" },
  { id: "continue", icon: "ti-player-play", label: "Continue Learning" },
  { id: "subjects", icon: "ti-books", label: "Subjects" },
  { id: "saved", icon: "ti-bookmark", label: "Saved" },
  { id: "progress", icon: "ti-chart-bar", label: "My Progress" },
];

const subjects = [
  { id: "math", label: "Mathematics", color: "#7F77DD" },
  { id: "bio", label: "Biology", color: "#1D9E75" },
  { id: "physics", label: "Physics", color: "#378ADD" },
  { id: "history", label: "History", color: "#EF9F27" },
  { id: "chemistry", label: "Chemistry", color: "#D85A30" },
  { id: "literature", label: "Literature", color: "#D4537E" },
];

export default function Sidebar({ activeSection, setActiveSection, collapsed, setCollapsed }) {
  return (
    <aside style={{
      width: collapsed ? "64px" : "240px",
      background: "#111318",
      borderRight: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      flexDirection: "column",
      transition: "width 0.3s cubic-bezier(0.4,0,0.2,1)",
      overflow: "hidden",
      flexShrink: 0,
    }}>
      {/* Logo */}
      <div style={{
        padding: collapsed ? "24px 0" : "24px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: collapsed ? "center" : "space-between",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        gap: 8,
      }}>
        {!collapsed && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8,
              background: "#7F77DD",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <i className="ti ti-school" style={{ fontSize: 16, color: "#fff" }} />
            </div>
            <span style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 18,
              color: "#e8e4dc",
              letterSpacing: "-0.02em",
            }}>Luma</span>
          </div>
        )}
        {collapsed && (
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: "#7F77DD",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <i className="ti ti-school" style={{ fontSize: 16, color: "#fff" }} />
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "rgba(255,255,255,0.3)", fontSize: 18, padding: 4,
            display: "flex", alignItems: "center",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.7)"}
          onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}
        >
          <i className={collapsed ? "ti ti-layout-sidebar-right" : "ti ti-layout-sidebar"} />
        </button>
      </div>

      {/* Nav items */}
      <nav style={{ padding: "12px 10px", flex: 1, overflowY: "auto" }}>
        {navItems.map(item => {
          const active = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              title={collapsed ? item.label : undefined}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: collapsed ? "10px 0" : "10px 12px",
                justifyContent: collapsed ? "center" : "flex-start",
                borderRadius: 8,
                border: "none",
                background: active ? "rgba(127,119,221,0.15)" : "none",
                color: active ? "#7F77DD" : "rgba(255,255,255,0.45)",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: active ? 500 : 400,
                transition: "all 0.15s",
                marginBottom: 2,
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = active ? "#7F77DD" : "rgba(255,255,255,0.75)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = active ? "rgba(127,119,221,0.15)" : "none"; e.currentTarget.style.color = active ? "#7F77DD" : "rgba(255,255,255,0.45)"; }}
            >
              <i className={`ti ${item.icon}`} style={{ fontSize: 18, flexShrink: 0 }} />
              {!collapsed && item.label}
            </button>
          );
        })}

        {/* Subjects section */}
        {!collapsed && (
          <div style={{ marginTop: 24 }}>
            <p style={{
              fontSize: 11, fontWeight: 500,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0 12px",
              marginBottom: 8,
            }}>Subjects</p>
            {subjects.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "none",
                  background: activeSection === s.id ? "rgba(255,255,255,0.06)" : "none",
                  color: activeSection === s.id ? "#e8e4dc" : "rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  fontSize: 13,
                  transition: "all 0.15s",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = activeSection === s.id ? "rgba(255,255,255,0.06)" : "none"; e.currentTarget.style.color = activeSection === s.id ? "#e8e4dc" : "rgba(255,255,255,0.4)"; }}
              >
                <span style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: s.color, flexShrink: 0,
                }} />
                {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* User profile at bottom */}
      <div style={{
        padding: collapsed ? "16px 0" : "16px 14px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        justifyContent: collapsed ? "center" : "flex-start",
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "linear-gradient(135deg, #7F77DD 0%, #D4537E 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, fontSize: 13, fontWeight: 500, color: "#fff",
        }}>TM</div>
        {!collapsed && (
          <div style={{ overflow: "hidden" }}>
            <p style={{ fontSize: 13, fontWeight: 500, margin: 0, color: "#e8e4dc", whiteSpace: "nowrap" }}>Thabo M.</p>
            <p style={{ fontSize: 11, margin: 0, color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}>Grade 11 · 840 pts</p>
          </div>
        )}
      </div>
    </aside>
  );
}
