import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import { SliderData } from "./components/slider/SliderData";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [power, setPower] = useState(false);
  const [Init, setInit] = useState(false);

  return (
    <div className="app">
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        power={power}
        setPower={setPower}
        Init={Init}
        setInit={setInit}
      />
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        power={power}
        setPower={setPower}
        Init={Init}
        setInit={setInit}
      />
      <div className="sections">
        <Intro
          power={power}
          setPower={setPower}
          Init={Init}
          setInit={setInit}
        />
        {Init && (
          <div className="sections">
            <Skills />
            <Portfolio />
            <About />
            <Contact />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
