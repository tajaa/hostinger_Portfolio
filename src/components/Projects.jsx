import ProjectItem from "./ProjectItem";
import bitcoin from "../assets/bitcoin.jpg";
import maroon from "../assets/maroon.jpg";
import x from "../assets/x.jpg";
import spotify from "../assets/spotify.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      {" "}
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
        laudantium numquam officiis esse distinctio consectetur sunt maxime
        exercitationem ducimus quia.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={bitcoin} title="Bitcoin " />
        <ProjectItem img={maroon} title="Spotify " />
        <ProjectItem img={x} title="X " />
        <ProjectItem img={spotify} title="Spotify " />
      </div>
    </div>
  );
};

export default Projects;
