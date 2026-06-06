import { useState } from "react";
import Sidebar from "./components/Sidebar";
import VideoFeed from "./components/VideoFeed";
import VideoPlayer from "./components/VideoPlayer";

const sampleVideos = [ 
  { id: 1, title: "Introduction to Calculus", subject: "Mathematics", duration: "18:42", instructor: "Dr. Amara Nwosu", thumbnail: "math", views: "12.4k", progress: 65 },
  { id: 2, title: "Photosynthesis Explained", subject: "Biology", duration: "14:08", instructor: "Prof. Li Wei", thumbnail: "bio", views: "9.1k", progress: 0 },
  { id: 3, title: "The French Revolution", subject: "History", duration: "22:15", instructor: "Dr. Sara Okonkwo", thumbnail: "history", views: "7.3k", progress: 30 },
  { id: 4, title: "Newton's Laws of Motion", subject: "Physics", duration: "16:55", instructor: "Mr. James Patel", thumbnail: "physics", views: "15.6k", progress: 100 },
  { id: 5, title: "Organic Chemistry Basics", subject: "Chemistry", duration: "20:33", instructor: "Dr. Amara Nwosu", thumbnail: "chem", views: "11.2k", progress: 0 },
  { id: 6, title: "Shakespeare & Sonnets", subject: "Literature", duration: "12:47", instructor: "Ms. Leila Marsh", thumbnail: "lit", views: "6.8k", progress: 80 },
];

const darkTheme = {
  rootBg: "#0d0f14",
  mainBackground: "linear-gradient(180deg, #071018 0%, #0d0f14 100%)",
  sidebarBg: "#111318",
  sidebarBorder: "rgba(255,255,255,0.06)",
  primaryText: "#e8e4dc",
  secondaryText: "rgba(255,255,255,0.55)",
  mutedText: "rgba(255,255,255,0.35)",
  navText: "#e8e4dc",
  navTextMuted: "rgba(255,255,255,0.45)",
  activeText: "#7F77DD",
  activeBg: "rgba(127,119,221,0.15)",
  hoverBg: "rgba(255,255,255,0.05)",
  profileText: "#e8e4dc",
  profileSubText: "rgba(255,255,255,0.35)",
  cardBg: "rgba(255,255,255,0.02)",
  cardBorder: "rgba(255,255,255,0.08)",
  cardHoverBorder: "rgba(255,255,255,0.16)",
  cardShadow: "0 40px 100px rgba(0,0,0,0.25)",
  overlayBg: "rgba(0,0,0,0.55)",
  labelBg: "rgba(255,255,255,0.08)",
  controlBg: "rgba(255,255,255,0.05)",
  secondarySurface: "rgba(255,255,255,0.08)",
  buttonBg: "rgba(255,255,255,0.08)",
  buttonText: "#e8e4dc",
};

const lightTheme = {
  rootBg: "#f4e8d9",
  mainBackground: "linear-gradient(180deg, #f9efe2 0%, #e3cfb4 100%)",
  sidebarBg: "#d1b291",
  sidebarBorder: "rgba(62,47,28,0.16)",
  primaryText: "#3d2a17",
  secondaryText: "#5f4b36",
  mutedText: "rgba(62,47,28,0.55)",
  navText: "#3d2a17",
  navTextMuted: "rgba(62,47,28,0.65)",
  activeText: "#7d5a3f",
  activeBg: "rgba(141,108,74,0.16)",
  hoverBg: "rgba(62,47,28,0.08)",
  profileText: "#3d2a17",
  profileSubText: "rgba(62,47,28,0.55)",
  cardBg: "rgba(255,255,255,0.92)",
  cardBorder: "rgba(62,47,28,0.12)",
  cardHoverBorder: "rgba(62,47,28,0.22)",
  cardShadow: "0 40px 100px rgba(0,0,0,0.12)",
  overlayBg: "rgba(0,0,0,0.55)",
  labelBg: "rgba(255,255,255,0.8)",
  controlBg: "rgba(255,255,255,0.65)",
  secondarySurface: "rgba(255,255,255,0.75)",
  buttonBg: "rgba(255,255,255,0.9)",
  buttonText: "#3d2a17",
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const theme = lightMode ? lightTheme : darkTheme;

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      background: theme.rootBg,
      fontFamily: "'DM Sans', sans-serif",
      color: theme.primaryText,
      overflow: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        theme={theme}
        isLightMode={lightMode}
        onToggleTheme={() => setLightMode(prev => !prev)}
      />

      <main style={{
        flex: 1,
        overflowY: "auto",
        transition: "margin-left 0.3s ease",
        background: theme.mainBackground,
        padding: "8px 0",
      }}>
        {selectedVideo ? (
          <VideoPlayer video={selectedVideo} onBack={() => setSelectedVideo(null)} allVideos={sampleVideos} theme={theme} />
        ) : (
          <VideoFeed
            videos={sampleVideos}
            activeSection={activeSection}
            onSelectVideo={setSelectedVideo}
            theme={theme}
          />
        )}
      </main>
    </div>
  );
}
