import { useCallback, useEffect, useRef } from "react";

// Constants
import { HomepageSections, refArrType } from "../views/Homepage";

import "./Sidebar.css";

export const Sidebar = (parentProps: { refArr: refArrType }) => {
  const refArr = parentProps.refArr;
  const currentSectionNum = useRef(0);
  const lastScrollY = useRef(0);

  // Helper function used to remove/add active class
  const toggleOptions = useCallback(
    (newIdx: number) => {
      if (newIdx < refArr.options.length) {
        refArr.options[currentSectionNum.current].current.classList.remove(
          "active-section"
        );
        currentSectionNum.current = newIdx;
        refArr.options[currentSectionNum.current].current.classList.add(
          "active-section"
        );
      }
    },
    [refArr.options]
  );

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

      // Keep track of scroll direction
      const isScrollingDown = window.scrollY > lastScrollY.current;
      lastScrollY.current = window.scrollY;

      // If entry is coming into view
      if (entry.isIntersecting) {
        if (idx !== -1) {
          toggleOptions(idx);
        }
      }
      // If entry is coming out of view, switch to next entry
      // This depends on scroll direction
      else {
        if (idx === currentSectionNum.current) {
          if (isScrollingDown) {
            toggleOptions(currentSectionNum.current + 1);
          } else {
            toggleOptions(currentSectionNum.current - 1);
          }
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
  }, [refArr, toggleOptions]);

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
      <p className="mb-4 title-font">Matthew Leung</p>
      {HomepageSections.map(({ label }, idx) => (
        <SidebarOption sectionNum={idx} sectionLabel={label} key={idx} />
      ))}
      <div className="socials-container">
        <a
          href="https://github.com/mleung2019"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icon"
            src="icons/github_icon.png"
            alt="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-k-leung"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icon"
            src="icons/linkedin_icon.png"
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
};
