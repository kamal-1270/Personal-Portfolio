import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import Resume from "../../src/assets/docs/resume.pdf";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handletheme = () => {
    setTheme((prevState) => (prevState == "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handletheme}>
          {theme === "light" ? <FaMoon size={30} /> : <IoIosSunny size={30} />}
        </div>
        <div className="container home-content">
          <h2>Hi 👋 i'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Full Stack Developer!", "Mern Stack Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-button">
            <a className="btn btn-hire"
            href="https://api.whatsapp.com/send?phone=7261073242"
            rel="noreferrer"
            target="_blank"
            >
              Hire Me
            </a>
          
            <a className="btn btn-cv" href={Resume} download="resume.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
