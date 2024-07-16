import { useEffect, useState } from "react";

function UseThemes() {
  const themes = ["light", "dark"];
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return { theme, themes, handleTheme };
}

export default UseThemes;
