import { useState } from "react";

// Constants
import { HomepageSections } from "../views/Homepage";

import "./Sidebar.css";

export const Sidebar = (parentProps: { refArr: any }) => {
  const [currentSectionNum, setCurrentSectionNum] = useState(0);

  // Sidebar option buttons
  type SidebarOptionProps = {
    sectionNum: number;
    sectionLabel: string;
  };

  const SidebarOption = (props: SidebarOptionProps) => {
    const classNameStr = `sidebar-option ${
      props.sectionNum === currentSectionNum ? "active-section" : ""
    }`;

    const handleSidebarClick = () => {
      parentProps.refArr[props.sectionNum].current.scrollIntoView({
        behavior: "smooth",
        scrollMargin: "20px",
      });
      setCurrentSectionNum(props.sectionNum);
    };

    return (
      <div className={classNameStr} onClick={() => handleSidebarClick()}>
        {props.sectionLabel}
      </div>
    );
  };

  // The sidebar itself
  return (
    <div className="sidebar-container">
      <h1 className="fw-bold mb-4 display-5">Matthew Leung</h1>

      {HomepageSections.map(({ label, component: _ }, idx) => (
        <SidebarOption sectionNum={idx} sectionLabel={label} key={idx} />
      ))}
    </div>
  );
};
