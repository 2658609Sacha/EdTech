
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

export default function Sidebar({ activeSection, setActiveSection, collapsed, setCollapsed, theme, isLightMode, onToggleTheme }) {
  return (
    <aside style={{
      width: collapsed ? "64px" : "240px",
      background: theme.sidebarBg,
      borderRight: `1px solid ${theme.sidebarBorder}`,
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
        borderBottom: `1px solid ${theme.sidebarBorder}`,
        gap: 8,
      }}>
        {!collapsed && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8,
              background: theme.accentText,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <i className="ti ti-school" style={{ fontSize: 16, color: "#fff" }} />
            </div>
            <span style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 18,
              color: theme.primaryText,
              letterSpacing: "-0.02em",
            }}>Paradigm</span>
          </div>
        )}
        {collapsed && (
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: theme.accentText,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <i className="ti ti-school" style={{ fontSize: 16, color: "#fff" }} />
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: theme.secondaryText, fontSize: 18, padding: 4,
            display: "flex", alignItems: "center",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.target.style.color = theme.primaryText}
          onMouseLeave={e => e.target.style.color = theme.secondaryText}
        >
          <i className={collapsed ? "ti ti-layout-sidebar-right" : "ti ti-layout-sidebar"} />
        </button>
      </div>

      {/* Nav items */}
      <nav style={{ padding: "12px 10px", flex: 1, overflowY: "auto" }}>
        <div style={{
          marginBottom: 12,
          padding: collapsed ? "0" : "0 12px",
          display: "flex",
          justifyContent: collapsed ? "center" : "flex-start",
        }}>
          <button
            onClick={onToggleTheme}
            title={isLightMode ? "Light mode" : "Dark mode"}
            style={{
              width: collapsed ? 44 : "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: collapsed ? "center" : "flex-start",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 12,
              border: "none",
              background: theme.buttonBg,
              color: theme.primaryText,
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            <i className={`ti ${isLightMode ? "ti-sun" : "ti-moon"}`} style={{ fontSize: 18 }} />
            {!collapsed && (isLightMode ? "Light mode" : "Dark mode")}
          </button>
        </div>

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
                background: active ? theme.activeBg : "none",
                color: active ? theme.activeText : theme.navTextMuted,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: active ? 500 : 400,
                transition: "all 0.15s",
                marginBottom: 2,
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                if (!active) e.currentTarget.style.background = theme.hoverBg;
                e.currentTarget.style.color = active ? theme.activeText : theme.navText;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = active ? theme.activeBg : "none";
                e.currentTarget.style.color = active ? theme.activeText : theme.navTextMuted;
              }}
            >
              <i className={`ti ${item.icon}`} style={{ fontSize: 18, flexShrink: 0, color: active ? theme.activeText : theme.navTextMuted }} />
              {!collapsed && item.label}
            </button>
          );
        })}

        {!collapsed && (
          <div style={{ marginTop: 24 }}>
            <p style={{
              fontSize: 11, fontWeight: 500,
              color: theme.mutedText,
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
                  background: activeSection === s.id ? theme.activeBg : "none",
                  color: activeSection === s.id ? theme.primaryText : theme.navTextMuted,
                  cursor: "pointer",
                  fontSize: 13,
                  transition: "all 0.15s",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = theme.hoverBg;
                  e.currentTarget.style.color = theme.navText;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = activeSection === s.id ? theme.activeBg : "none";
                  e.currentTarget.style.color = activeSection === s.id ? theme.primaryText : theme.navTextMuted;
                }}
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

      <div style={{
        padding: collapsed ? "16px 0" : "16px 14px",
        borderTop: `1px solid ${theme.sidebarBorder}`,
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
        }}>SK</div>
        {!collapsed && (
          <div style={{ overflow: "hidden" }}>
            <p style={{ fontSize: 13, fontWeight: 500, margin: 0, color: theme.profileText, whiteSpace: "nowrap" }}>Sacha K.</p>
            <p style={{ fontSize: 11, margin: 0, color: theme.profileSubText, whiteSpace: "nowrap" }}>Wits Graduate · 840 pts</p>
          </div>
        )}
      </div>
    </aside>
  );
}
