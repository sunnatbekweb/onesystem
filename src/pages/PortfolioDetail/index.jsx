import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Image } from "./ui/Image";
import { Video } from "./ui/Video";

export const PortfolioDetail = () => {
  const params = useParams();
  const [project, setProject] = useState();

  const getProjectById = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/osprojects/${params.id}/`
      );
      setProject(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjectById();
  }, []);

  return (
    <section className="pt-[198px] lg:pt-[130px]">
      <div className="container px-[16px] md:px-[36px] lg:px-[48px]">
        <div className="py-10">
          <div className="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl md:text-5xl mb-1 md:mb-2">
                {project?.title}
              </h2>
              <span className="text-sm md:text-lg text-[#575757]">
                {project?.category}
              </span>
            </div>
            <img src={project?.image1} alt={project?.title} className="w-fit" />
          </div>

          <div className="pt-6 md:pt-8">
            <p className="text-sm md:text-lg">{project?.description}</p>

            <div className="pt-5 md:pt-10">
              <Image src={project?.image2} />
              <Image src={project?.image3} />

              {project?.video && <Video src={project?.video} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
