import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ img, url, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full h-50 object-cover rounded-lg p-3"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl capitalize font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>

        <div className="mt-4 flex gap-x-4">
          <a href={url} target="_blank">
            <TbWorldWww />
          </a>
          <a href={github}>
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
