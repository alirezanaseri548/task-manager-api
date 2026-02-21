import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.json())
      .then(data => {
        console.log("✅ Backend API response:", data);
      })
      .catch(err => {
        console.error("❌ API not reachable", err);
      });
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h2>Task Manager API Client</h2>
      <p>If you see this page and no errors in console, backend is working.</p>
    </div>
  );
}

export default App;
