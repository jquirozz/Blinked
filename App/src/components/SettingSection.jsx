import "./SettingSection.scss";

function SettingSection({ title, icon, children }) {
  return (
    <section className="SettingSection">
      <header>
        <h3>{title}</h3>
        {icon}
      </header>
      {children}
    </section>
  );
}

export default SettingSection;
