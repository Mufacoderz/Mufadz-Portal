import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ChatGlobal from "./pages/ChatPage";
import BacaQuran from "./pages/QuranPage";
import Profile from "./pages/ProfilePage";
import Homepages from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/chat" element={<ChatGlobal />} />
          <Route path="/quran" element={<BacaQuran />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
