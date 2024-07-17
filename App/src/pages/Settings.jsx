import SettingSection from "../components/SettingSection";

import "./Settings.scss";
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillDisplayFill } from "react-icons/bs";

function Settings({ theme, handleTheme, themes }) {
  return (
    <div className="Settings">
      <header className="settingTitle">
        <IoSettingsSharp />
        <h2>Settings</h2>
      </header>
      <SettingSection title="Display" icon={<BsFillDisplayFill />}>
        <section className="theme">
          <h4>Theme</h4>
          {themes.map((newTheme, key) => (
            <button
              className={theme === newTheme ? "active" : ""}
              key={key}
              onClick={() => handleTheme(newTheme)}
            >
              <h4>{newTheme}</h4>
            </button>
          ))}
        </section>
      </SettingSection>
    </div>
  );
}

export default Settings;
