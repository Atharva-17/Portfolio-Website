import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Navi from './components/nav/Navi.jsx';
import Edu from './components/education/Edu.jsx';
import Social from './components/social/Social.jsx';
import Skills from './components/skills/Skills.jsx';
import Project from './components/projects/Project.jsx';
import { ThemeContext } from "./context";
import './app.css';


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <Navi />
      {/* <About /> */}
      <Social />
      <Edu />
      <Skills />
      <Project />
      {/* <ProductList /> */}
      <Contact />
    </div>
  );
};

export default App;
