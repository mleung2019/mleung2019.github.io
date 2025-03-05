// Components
import { Sidebar } from "../components/Sidebar";

import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="home-container">
      <Sidebar />

      <div className="page-container fs-5">
        I'm a computer engineer who is dedicated to... Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec molestie lectus nisl, vitae
        porttitor metus faucibus et. Cras finibus porta lectus vitae egestas.
        Nunc scelerisque turpis vel nulla tincidunt euismod. Praesent blandit
        ligula et convallis viverra. Donec sollicitudin imperdiet dictum. Mauris
        sed odio vel ex aliquet rhoncus. Cras et leo ac lectus congue finibus
        quis eget orci.
      </div>
    </div>
  );
};
