import { useRef, RefObject } from "react";

// Components
import { Sidebar } from "../components/Sidebar";
import { Carousel } from "../components/Carousel";

import "./Homepage.css";

export type refArrType = {
  options: RefObject<any>[];
  sections: RefObject<any>[];
};

export const Homepage = () => {
  const refArr: refArrType = {
    options: [useRef(null), useRef(null), useRef(null)],
    sections: [useRef(null), useRef(null), useRef(null)],
  };

  return (
    <div className="home-container">
      <img className="bg" src="background.png" alt="background" />

      <Sidebar refArr={refArr} />

      <div className="page-container p-font">
        {HomepageSections.map(({ label: _, component: Component }, idx) => (
          <div
            className="pt-5 mb-5"
            id={String(idx)}
            ref={refArr.sections[idx]}
            key={idx}
          >
            <Component />
          </div>
        ))}
        <div className="spacer" />
      </div>
    </div>
  );
};

export const AboutMe = () => {
  return (
    <div>
      I'm a third-year computer engineering student at UC San Diego who's been
      been enamored with computers ever since my childhood. At age 11, I
      remember being in awe of the power of computing when I first used
      Microsoft PowerPoint - as this powerful tool became my creative sandbox
      for making games, animations, and comics. Today, this childhood passion
      has shaped me into who I am today. I'm always looking for new challenges
      and ways to expand my skill set, both in software and hardware. There's
      just so much that I love learning about - everything from full-stack
      development to operating systems to digital and analog circuits.
    </div>
  );
};

export const Projects = () => {
  return (
    <div>
      Procedural City Generator
      <Carousel srcMedia={["pcg_1.png", "pcg_2.png"]} />
    </div>
  );
};

export const Resume = () => {
  return (
    <div>
      Donec sollicitudin imperdiet dictum. Mauris sed odio vel ex aliquet
      rhoncus. Cras et leo ac lectus congue finibus quis eget orci. I'm a
      computer engineer who is dedicated to... Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Donec molestie lectus nisl, vitae porttitor
      metus faucibus et. Cras finibus porta lectus vitae egestas. Nunc
      scelerisque turpis vel nulla tincidunt euismod. Praesent Donec
      sollicitudin imperdiet dictum. Mauris sed odio vel ex aliquet rhoncus.
      Cras et leo ac lectus congue finibus quis eget orci. I'm a computer
      engineer who is dedicated to... Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Donec molestie lectus nisl, vitae porttitor metus
      faucibus et. Cras finibus porta lectus vitae egestas. Nunc scelerisque
      turpis vel nulla tincidunt euismod. Praesent Cras finibus porta lectus
      vitae egestas. Nunc scelerisque turpis vel nulla tincidunt euismod.
      Praesent Donec sollicitudin imperdiet dictum. Mauris sed odio vel ex
      aliquet rhoncus. Cras et leo ac lectus congue finibus quis eget orci. I'm
      a computer engineer who is dedicated to... Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Donec molestie lectus nisl, vitae porttitor
      metus faucibus et. Cras finibus porta lectus vitae egestas. Nunc
      scelerisque turpis vel nulla tincidunt euismod. Praesent
    </div>
  );
};

export const HomepageSections = [
  { label: "About me", component: AboutMe },
  { label: "Projects", component: Projects },
  { label: "Resume", component: Resume },
];
