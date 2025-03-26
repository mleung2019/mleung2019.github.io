import { useRef } from "react";

// Components
import { Sidebar } from "../components/Sidebar";

import "./Homepage.css";

export const Homepage = () => {
  const refArr = [useRef(null), useRef(null), useRef(null)];

  return (
    <div className="home-container">
      <img className="bg" src="background.png" />

      <Sidebar refArr={refArr} />

      <div className="page-container p-font">
        {HomepageSections.map(({ label: _, component: Component }, idx) => (
          <div className="pt-5 mb-5" ref={refArr[idx]} key={idx}>
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
      I'm a computer engineer who is dedicated to... Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Donec molestie lectus nisl, vitae porttitor
      metus faucibus et. Cras finibus porta lectus vitae egestas. Nunc
      scelerisque turpis vel nulla tincidunt euismod. Praesent blandit ligula et
      convallis viverra. Donec sollicitudin imperdiet dictum. Mauris sed odio
      vel ex aliquet rhoncus. Cras et leo ac lectus congue finibus quis eget
      orci. I'm a computer engineer who is dedicated to... Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Donec molestie lectus nisl, vitae
      porttitor metus faucibus et. Cras finibus porta lectus vitae egestas. Nunc
      scelerisque turpis vel nulla tincidunt euismod. Praesent
    </div>
  );
};

export const Projects = () => {
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
      turpis vel nulla tincidunt euismod. Praesent
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
      turpis vel nulla tincidunt euismod. Praesent
    </div>
  );
};

export const HomepageSections = [
  { label: "About me", component: AboutMe },
  { label: "Projects", component: Projects },
  { label: "Resume", component: Resume },
];
