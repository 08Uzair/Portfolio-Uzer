// App.js
import React from "react";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
const Projects = () => {
  const projects = [
    {
      image: image3,
      title: "ECCOMERCE APPLICATION",
      link: "https://uzerqureshi-eccom.netlify.app",
      youTube: "https://youtu.be/yDyqnpCzAOU",
      gitHub: "https://github.com/08Uzair/Uzer-2024",
    },
    {
      image: image1,
      title: "ADMIN PANNEL OF ECCOMERCE APPLICATION",
      link: "https://uzerqureshi-eccom-admin.netlify.app/",
      youTube: "https://youtu.be/aHzWbpDV-KA",
      gitHub: "https://github.com/08Uzair/Uzer-2024",
    },
    {
      image: image2,
      title: "BLOG APPLICATION",
      link: "https://uzerqureshi-blog.netlify.app",
      youTube: "https://youtu.be/LKaM1KRHbGc",
      gitHub: "https://github.com/08Uzair/Uzer-2025",
    },
    {
      image: image1,
      title: "TODO APPLICATION",
      link: "#",
      youTube: "",
      gitHub: "",
    },
  ];

  return (
    <div className="App">
      <div className="main3">
        {projects?.map((project, index) => (
          <div className="project-1 pro" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="overlay ">
              <p>{project.title}</p>
              <div className="flex item-center justify-center">
                <button className="rounded-full">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-link"
                  >
                    <i className="bx bx-link text-2xl"></i>
                  </a>
                </button>
                <button className="rounded-full">
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-link"
                  >
                    <i className="bx bxl-github text-2xl"></i>
                  </a>
                </button>
                <button className="rounded-full">
                  <a
                    href={project.youTube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-link"
                  >
                    <i className="bx bxl-youtube text-2xl"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
