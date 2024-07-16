// MODULES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

// COMPONENTS
import NavBar from "./components/NavBar";

// HOOKS
import UseThemes from "./hooks/UseThemes.jsx";

import "./App.scss";

function App() {
  const { theme, themes, handleTheme } = UseThemes();

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/settings"
            element={
              <Settings
                theme={theme}
                themes={themes}
                handleTheme={handleTheme}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
