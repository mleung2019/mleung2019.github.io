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
      been enamored with computers ever since my childhood. At age 11, I spent
      hundreds of hours on Microsoft PowerPoint - as it became my creative
      sandbox for making games, animations, and comics. It was there that I
      cultivated a love for computers and their power to bring any project I
      envisioned to life. Today, this childhood passion has shaped me into who I
      am today. I'm always looking for new challenges and ways to expand my
      skill set, both in software and hardware. There's just so much that I love
      learning about - everything from full-stack development to operating
      systems to digital and analog circuits.
    </div>
  );
};

export const Projects = () => {
  return (
    <div>
      <div className="section-font">Procedural City Generator</div>
      <div className="subsection-font">Godot, C#, GLSL</div>
      <Carousel
        carId="pcg"
        srcMedia={[
          "pcg/pcg_1.png",
          "pcg/pcg_2.png",
          "pcg/pcg_3.png",
          "pcg/pcg_4.mp4",
        ]}
        isLight={true}
      />
      <div className="pt-3">
        This project enables users to generate procedurally infinite cities by
        harnessing the power of Voronoi noise and fragment shaders. Different
        seeds produce unique, expansive city layouts. The look and feel of a
        city can be tweaked easily with dynamic, flexible city generation
        variables. With a 24-hour day/night cycle, city skyscrapers shine in the
        sun during the day and glow with florescent lights at night.
      </div>

      <div className="section-font mt-5 pt-5">Triton Workout Planner</div>
      <div className="subsection-font">
        React, Node.js, TypeScript, HTML/CSS
      </div>
      <Carousel
        carId="twp"
        srcMedia={[
          "twp/twp_2.png",
          "twp/twp_1.png",
          "twp/twp_3.png",
          "twp/twp_4.png",
          "twp/twp_5.png",
        ]}
        isLight={false}
      />
      <div className="pt-3">
        This project is a workout planner app designed to help college students
        develop consistent workout habits. Customize your workout sessions by
        choosing from a variety of exercise routines, set and keep track of your
        personal goals, and even export your workout schedule to your Google
        Calendar. Keep exercising every week to maintain your workout streak!
      </div>
    </div>
  );
};

export const Resume = () => {
  return (
    <div>
      <div>View my full resume here:</div>
      <button type="button" className="mt-3 btn btn-primary" onClick={() => {}}>
        Resume ⤴
      </button>
    </div>
  );
};

export const HomepageSections = [
  { label: "About me", component: AboutMe },
  { label: "Projects", component: Projects },
  { label: "Resume", component: Resume },
];
