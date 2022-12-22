import React from "react";
import "./index.css";
import { Home, About, Contact, Gallery, MediaTech, Press } from "./layouts";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Gallery />
      <MediaTech />
      <Press />
    </div>
  );
};

export default App;
