import { useEffect } from "react";

// Views
import { Homepage } from "./views/Homepage";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
