import { useState, useEffect, RefObject } from "react";

// Constants
import { HomepageSections } from "../views/Homepage";

import "./Sidebar.css";

export const Sidebar = (parentProps: { refArr: RefObject<any>[] }) => {
  const [currentSectionNum, setCurrentSectionNum] = useState(0);

  // Auto-select for scrolling
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      console.log(entries);
      const sortedEntries = entries.sort(
        (a, b) => a.intersectionRect.bottom - b.intersectionRect.bottom
      );

      const entry = sortedEntries[0];
      const index = parentProps.refArr.findIndex(
        (ref) => ref.current === entry.target
      );
      if (entry.isIntersecting) {
        if (index !== -1) {
          console.log(index);
          setCurrentSectionNum(index);
        }
      } else {
        // -2 because zero indexed and we need to switch behavior on
        // second-to-last element
        if (index !== HomepageSections.length - 2)
          setCurrentSectionNum(currentSectionNum + 1);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    parentProps.refArr.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      parentProps.refArr.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [parentProps.refArr]);

  type SidebarOptionProps = {
    sectionNum: number;
    sectionLabel: string;
  };

  // Sidebar options
  const SidebarOption = (props: SidebarOptionProps) => {
    const classNameStr = `sidebar-option ${
      props.sectionNum === currentSectionNum
        ? "active-section"
        : "inactive-section"
    }`;

    const handleSidebarClick = () => {
      parentProps.refArr[props.sectionNum].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setCurrentSectionNum(props.sectionNum);
    };

    return (
      <div className={classNameStr} onClick={handleSidebarClick}>
        {props.sectionLabel}
      </div>
    );
  };

  // The sidebar itself
  return (
    <div className="sidebar-container">
      <h1 className="fw-bold mb-4 display-5">Matthew Leung</h1>

      {HomepageSections.map(({ label }, idx) => (
        <SidebarOption sectionNum={idx} sectionLabel={label} key={idx} />
      ))}
    </div>
  );
};
