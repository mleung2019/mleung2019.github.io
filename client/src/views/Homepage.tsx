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

  const srcBg =
    "https://res.cloudinary.com/dih87mi2g/image/upload/f_auto,q_auto/" +
    "v1743643918/pcg_1_npw53y.png";

  return (
    <div className="home-container">
      <img className="bg" src={srcBg} alt="background" />

      <Sidebar refArr={refArr} />

      <div className="page-container p-font">
        {HomepageSections.map(({ label, component: Component }, idx) => (
          <div
            className="pt-5 mb-5"
            id={String(idx)}
            ref={refArr.sections[idx]}
            key={idx}
          >
            {label === "Resume" ? (
              <div>
                <a
                  href="https://mleung2019.github.io/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="section-font mb-3 link-font"
                >
                  Resume
                  <img
                    src="icons/link_icon.png"
                    className="link-icon"
                    alt="link"
                  />
                </a>
              </div>
            ) : (
              <div className="section-font mb-3">{label}</div>
            )}
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
      enamored with computers ever since my childhood. At age 11, I spent
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
      <div>
        <a
          href="https://github.com/mleung2019/Procedural-City-Game"
          target="_blank"
          rel="noopener noreferrer"
          className="subsection-font link-font"
        >
          Procedural City Generator
          <img src="icons/link_icon.png" className="link-icon" alt="link" />
        </a>
      </div>
      <div className="ssubsection-font">Godot, C#, GLSL</div>
      <Carousel
        carId="pcg"
        srcMedia={[
          "v1743643922/pcg_4_rh0rfy.mp4",
          "v1743643918/pcg_1_npw53y.png",
          "v1743643917/pcg_2_g4se52.png",
          "v1743643917/pcg_3_pfccyn.png",
        ]}
        isLight={true}
      />
      <div className="pt-3">
        Procedural City Generator enables users to generate procedurally
        infinite cities by harnessing the power of Voronoi noise and fragment
        shaders. Different seeds produce unique, expansive city layouts. The
        look and feel of a city can be tweaked easily with dynamic, flexible
        city generation variables. With a 24-hour day/night cycle, city
        skyscrapers shine in the sun during the day and glow with florescent
        lights at night.
      </div>

      <div className="mt-5 pt-5">
        <a
          href="https://github.com/Sid10july/TritonWorkoutPlanner"
          target="_blank"
          rel="noopener noreferrer"
          className="subsection-font link-font"
        >
          Triton Workout Planner
          <img src="icons/link_icon.png" className="link-icon" alt="link" />
        </a>
      </div>
      <div className="ssubsection-font">
        React, Node.js, TypeScript, HTML/CSS
      </div>
      <Carousel
        carId="twp"
        srcMedia={[
          "v1743643960/twp_2_fsztkg.png",
          "v1743643960/twp_1_qxmjdy.png",
          "v1743643961/twp_3_fqru3x.png",
          "v1743643961/twp_4_wbbuea.png",
          "v1743643962/twp_5_auvvhz.png",
        ]}
        isLight={false}
      />
      <div className="pt-3">
        Triton Workout Planner is a workout planner app designed to help college
        students develop consistent workout habits. Customize your workout
        sessions by choosing from a variety of exercise routines, set and keep
        track of your personal goals, and even export your workout schedule to
        your Google Calendar. Keep exercising every week to maintain your
        workout streak!
      </div>

      <div className="mt-5 pt-5">
        <a
          href="https://github.com/watchlisthq/watchlist"
          target="_blank"
          rel="noopener noreferrer"
          className="subsection-font link-font"
        >
          WatchList
          <img src="icons/link_icon.png" className="link-icon" alt="link" />
        </a>
      </div>
      <div className="ssubsection-font">
        React, Node.js, JavaScript, HTML/CSS
      </div>
      <Carousel
        carId="wl"
        srcMedia={[
          "v1743643975/wl_2_hfm9oa.png",
          "v1743643975/wl_1_z4icpf.png",
        ]}
        isLight={true}
      />
      <div className="pt-3">
        WatchList is a webapp that allows film enthusiasts to curate a list of
        shows and movies they plan to watch. Supporting 25 different streaming
        services across 50+ countries, it's easy to find just what you're
        looking for. Receive personalized recommendations based on your list to
        discover new favorites effortlessly.
      </div>
    </div>
  );
};

export const Resume = () => {
  return <div></div>;
};

export const HomepageSections = [
  { label: "About me", component: AboutMe },
  { label: "Projects", component: Projects },
  { label: "Resume", component: Resume },
];
