import React from "react";
import imageA from "../assets/images/image1.png";
import imageB from "../assets/images/image2.png";
import imageC from "../assets/images/image3.png";
import uzer from "../assets/images/uzer.jpg";
import pulse from "../assets/images/pulse.gif";
import hashnode from "../assets/images/hashnode.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import resume from "../assets/images/Resume.pdf";
import certificate from "../assets/images/Certificate.pdf";
const Home = () => {
  const [text] = useTypewriter({
    words: ["Web-Developer", "Full-Stack-Developer", "Prefinal Year Student"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <div className="benton-grid">
        <div className="item">
          <div className="card">
            <p className="txt1">
              {" "}
              <i class="bx bxs-award"></i>Specialized In
            </p>
            <h2></h2>
            <div className="min-1">
              <div className="card1">
                <i className="bx bxl-react"></i>
                <p>React</p>
              </div>
              <div className="card1">
                <img
                  src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png"
                  alt="Express"
                />
                <p>Express</p>
              </div>
              <div className="card1">
                <i className="bx bxl-mongodb"></i>
                <p>MongoDB</p>
              </div>
              <div className="card1">
                <i className="bx bxl-nodejs"></i>
                <p>Node</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="cardA">
            <h1>03+</h1>
            <p>
              <i className="bx bxs-flag-alt"></i> Projects
            </p>
          </div>
        </div>
        <div className="item">
          <div className="cardA">
            <h1>50+</h1>
            <p>
              <i className="bx bxs-smile"></i> DSA
            </p>
          </div>
        </div>
        <div className="item">
          <div className="cardA">
            <h1>00</h1>
            <p>
              <i className="bx bxs-calendar-star"></i> Experience
            </p>
          </div>
        </div>
        <div className="item">
          <div className="navBody">
            <div className="nav">
              <h3>
                <p>
                  <i className="bx bxs-mask"></i>Know More About Me{" "}
                </p>
              </h3>
            </div>
            <div className="box1">
              <i class="bx bxs-briefcase-alt-2"></i> Full Stack Developer
              specializing in MERN
            </div>
            <div className="box1">
              <i class="bx bxs-award"></i> Won{" "}
              <a target="_blank" href="https://www.holopin.io/@08uzair">
                HacktoberFest
              </a>{" "}
              organized by Docker
            </div>
            <div className="box1">
              <i class="bx bx-run"></i> Third Runner Up at MMCOE{" "}
              <a href={certificate} download="Certificate">
                Hackathon
              </a>{" "}
            </div>
            <div className="box1">
              <i class="bx bxs-graduation"></i> Prefinal Year Student @ Sinhgad
              Pune
            </div>
          </div>
        </div>
        <div
          style={{
            width: "307%",
            height: "200px",
            padding: "25px",
            textAlign: "center",
          }}
          className="lbox item"
        >
          I'm a passionate Web Developer I like solving Problems using Computer
          Science, building the Front-End and Back-End of Websites and Web
          Applications using MERN Stack and along with this I am also a Newbie
          Open Source Contirbutor
          <br /> Made By Uzer Qureshi &copy; 2024/2025
        </div>
        <div className="item">
          <div className="b4">
            <p className="txt2">
              <i className="bx bxs-shopping-bag"></i> Projects
            </p>
            <h2>WORK GALLERY</h2>
            <div className="scroll-container">
              <div className="scroll-content">
                <img src={imageA} alt="Image 1" />
                <img src={imageB} alt="Image 2" />
                <img src={imageC} alt="Image 3" />
                <img src={imageA} alt="Image 1" />
                <img src={imageB} alt="Image 2" />
                <img src={imageC} alt="Image 3" />
                <img src={imageA} alt="Image 1" />
                <img src={imageB} alt="Image 2" />
                <img src={imageC} alt="Image 3" />
              </div>
            </div>
            <NavLink to="/projects">
              <div className="btn1">View Projects</div>
            </NavLink>
          </div>
        </div>
        <div className="item m1">
          <div className="b1">
            <div className="img">
              <img src={uzer} alt="Uzer Qureshi" />
            </div>
            <div className="content">
              <p>
                <img src={pulse} alt="Available" /> Immediate Joiner
              </p>
              <h1>Uzer Qureshi</h1>
              <h3 style={{ marginBottom: "10px" }}>
                I am a{" "}
                <span style={{ color: "#a97bd4", fontWeight: "700" }}>
                  {text}
                </span>
                <Cursor />
              </h3>
            </div>
            <div className="resume">
              <p className="logo">Resume</p>
              <button>
                <a href={resume} download="Resume">
                  <i className="bx bx-download"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="b2">
            <p>
              <i className="bx bx-current-location"></i> India
            </p>
            <p>
              <i className="bx bx-podcast"></i> Developer
            </p>
            <p>
              <i className="bx bx-globe"></i> English & Hindi
            </p>
            <p>
              <i className="bx bxs-business"></i> Pune University
            </p>
            <p>
              <i className="bx bxs-graduation"></i> Junior
            </p>
          </div>
          <div className="b3">
            <div className="btn">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/uzairqureshi0803"
              >
                <i className="bx bxl-linkedin"></i> LinkedIn
              </a>
            </div>
            <div className="btn">
              <a target="_blank" href="https://wa.me/9890562214">
                <i className="bx bxl-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="main2">
            <p>
              <i className="bx bxs-sun"></i> Follow Me On{" "}
            </p>
            <div className="btn2">
              <div className="logo">
                <i className="bx bxl-linkedin"></i>
              </div>
              <p>
                {" "}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/uzairqureshi0803/"
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <div className="btn2">
              <div className="logo">
                <i className="bx bxl-github"></i>
              </div>
              <p>
                <a target="_blank" href="https://github.com/08Uzair">
                  GitHub
                </a>
              </p>
            </div>
            <div className="btn2">
              <div className="logo">
                <i className="bx bxl-youtube"></i>
              </div>
              <p>
                <a target="_blank" href="https://www.youtube.com/@UzerQureshi.">
                  YouTube
                </a>
              </p>
            </div>
            {/* <div className="btn2">
              <div className="logo">
                <img src={hashnode} />
              </div>
              <p>
                <a target="_blank" href="https://www.youtube.com/@UzerQureshi.">
                  Hashnode
                </a>
              </p>
            </div> */}
          </div>
        </div>
        <div style={{ display: "none" }} className="item"></div>
        <div className="item">
          <div className="main1">
            <div className="scroll-box">
              <p className="txt2">
                <i className="bx bxs-layout"></i> Latest Skills
              </p>
              <div className="scroll-track">
                <div className="b3">
                  <p>
                    <i className="bx bxl-python"></i>Python
                  </p>
                  <p>
                    <i className="bx bxl-c-plus-plus"></i>C++
                  </p>
                  <p>
                    <i className="bx bxl-javascript"></i> JavaScript
                  </p>
                  <p>
                    <i className="bx bxl-tailwind-css"></i>Tailwind CSS
                  </p>
                  <p>
                    <i className="bx bxl-c-plus-plus"></i>C++
                  </p>
                  <p>
                    <i className="bx bxl-javascript"></i> JavaScript
                  </p>
                  <p>
                    <i className="bx bxl-python"></i>Python
                  </p>
                  <p>
                    <i className="bx bxl-c-plus-plus"></i>C++
                  </p>
                  <p>
                    <i className="bx bxl-javascript"></i> JavaScript
                  </p>
                  <p>
                    <i className="bx bxl-tailwind-css"></i>Tailwind CSS
                  </p>
                  <p>
                    <i className="bx bxl-c-plus-plus"></i>C++
                  </p>
                  <p>
                    <i className="bx bxl-javascript"></i> JavaScript
                  </p>
                </div>
              </div>
              <div className="scroll-track1">
                <div className="b3">
                  <p>
                    <i className="bx bxl-python"></i>Python
                  </p>
                  <p>
                    <i className="bx bxl-c-plus-plus"></i>C++
                  </p>
                  <p>
                    <i className="bx bxl-javascript"></i> JavaScript
                  </p>
                  <p>
                    <i className="bx bxl-tailwind-css"></i>Tailwind CSS
                  </p>
                  <p>
                    <i className="bx bxl-c-plus-plus"></i>C++
                  </p>
                  <p>
                    <i className="bx bxl-javascript"></i> JavaScript
                  </p>
                  <p>
                    <i className="bx bxl-python"></i>Python
                  </p>
                  <p>
                    <i className="bx bxl-c-plus-plus"></i>C++
                  </p>
                  <p>
                    <i className="bx bxl-javascript"></i> JavaScript
                  </p>
                  <p>
                    <i className="bx bxl-tailwind-css"></i>Tailwind CSS
                  </p>
                  <p>
                    <i className="bx bxl-c-plus-plus"></i>C++
                  </p>
                  <p>
                    <i className="bx bxl-javascript"></i> JavaScript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
