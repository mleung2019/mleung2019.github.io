// Constants
import { HomepageSections } from "../views/Homepage";

import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h1 className="fw-bold mb-4 display-5">Matthew Leung</h1>

      {HomepageSections.map(({label, component: Component}, idx) => (
        <div key={idx}>
          {label}
        </div>
      ))}
    </div>
  );
};
