// import { useContext } from "react";
import About from "./components/about/About";
// import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        transition: "all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) 0s",
        color: "white",
      }}
    >
      <Intro />
      <About />
    </div>
  );
};

export default App;
