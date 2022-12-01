import { FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

import { useEffect, useState } from "react";

function newBadge(content, className = "black") {
  if (content == "python") return <FaPython className={className} />;
  if (content == "react") return <FaReact className={className} />;
  if (content == "tailwind") return <SiTailwindcss className={className} />;
  if (content == "nextjs") return <SiNextdotjs className={className} />;
  return <span className={className + " text-xs"}>{content}</span>;
}

export default function LatestProjects(props) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/Projects")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No projects found</p>;

  console.log(data);

  return (
    <div className={props.className + " flex flex-wrap md:flex-nowrap justify-evenly"}>
      {data["projects"].map((project) => (
        <article className="w-full sm:w-1/3 md:md-1/4 m-8 relative overflow-hidden rounded-xl shadow-md">
          <img src={project["image"]} alt={project["title"]} className='rounded-b-xl'/>

          <div className="absolute text-xl top-4 right-0 mr-0">
            {project["tags"].map((tag) => (
              <span className="p-1 pr-2 mb-1 block rounded-l-xl bg-primary-dark">
                {newBadge(tag, "text-accent")}
              </span>
            ))}
          </div>

          <h4 className="text-xl px-4 py-1">{project["title"]}</h4>
        </article>
      ))}
    </div>
  );
}
