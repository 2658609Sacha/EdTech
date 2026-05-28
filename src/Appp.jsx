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

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      background: "#0d0f14",
      fontFamily: "'DM Sans', sans-serif",
      color: "#e8e4dc",
      overflow: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <main style={{
        flex: 1,
        overflowY: "auto",
        transition: "margin-left 0.3s ease",
      }}>
        {selectedVideo ? (
          <VideoPlayer video={selectedVideo} onBack={() => setSelectedVideo(null)} allVideos={sampleVideos} />
        ) : (
          <VideoFeed
            videos={sampleVideos}
            activeSection={activeSection}
            onSelectVideo={setSelectedVideo}
          />
        )}
      </main>
    </div>
  );
}
