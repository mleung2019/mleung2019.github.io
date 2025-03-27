import { useEffect, RefObject, useRef } from "react";

// Constants
import { HomepageSections, refArrType } from "../views/Homepage";

import "./Sidebar.css";

export const Sidebar = (parentProps: { refArr: refArrType }) => {
  const refArr = parentProps.refArr;
  const currentSectionNum = useRef(0);

  // Helper function used to remove/add active class
  const toggleOptions = (newIdx: number) => {
    if (newIdx < refArr.options.length) {
      refArr.options[currentSectionNum.current].current.classList.remove(
        "active-section"
      );
      currentSectionNum.current = newIdx;
      refArr.options[currentSectionNum.current].current.classList.add(
        "active-section"
      );
    }
  };

  // Auto-select for scrolling
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Sort entries to get the one closest to the top
      const entry = entries.sort(
        (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
      )[0];
      // Match entry to ref using idx
      const idx = refArr.sections.findIndex(
        (ref) => ref.current === entry.target
      );

      // If entry is coming into view
      if (entry.isIntersecting) {
        if (idx !== -1) {
          toggleOptions(idx);
        }
      }
      // If entry is coming out of view, switch to next entry
      else {
        if (idx === currentSectionNum.current) {
          toggleOptions(currentSectionNum.current + 1);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    const sectionRefs = refArr.sections;

    // Observe objects
    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // Unobserve objects
    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refArr]);

  // Sidebar options
  type SidebarOptionProps = {
    sectionNum: number;
    sectionLabel: string;
  };

  const SidebarOption = (props: SidebarOptionProps) => {
    const classNameStr = `sidebar-option ${
      props.sectionNum === currentSectionNum.current ? "active-section" : ""
    }`;

    const handleSidebarClick = () => {
      refArr.sections[props.sectionNum].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    return (
      <div
        className={classNameStr}
        onClick={handleSidebarClick}
        ref={refArr.options[props.sectionNum]}
      >
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
