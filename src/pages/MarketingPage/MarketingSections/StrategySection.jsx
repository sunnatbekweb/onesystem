import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoGrid } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import "./StrategySection.css";
import { Link } from "react-router-dom";

export default function StrategySection() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/explore/`
    );

    setProjects(response.data);
  };

  useEffect(() => {
    AOS.init({
      duration: 350,
      once: false,
    });

    getProjects();
  }, []);

  return (
    <div>
      <section className="strategy bg-[#EAEAEA] pt-[214px] md:pt-[214px] lg:pt-[130px] xl:pt-[130px]">
        <div className="container strategy__container flex flex-col justify-center items-center px-[16px] md:px-[36px] lg:px-[48px]">
          <div className="py-16">
            <h2 className="text-4xl font-bold mb-10">Bizning loyihalar</h2>
            <div className="">
              <button className="grid p-2.5">
                <IoGrid className="text-2xl" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
              {projects?.map((project) => (
                <div key={project.id} className="project_card px-3">
                  <a href={project.url} target="_blank">
                    <div className="relative">
                      <img
                        src={project?.image}
                        alt="Project image"
                        width={678}
                        height={452}
                        className="aspect-square object-cover"
                      />
                      <button className="navigate_button">Ko'rish</button>
                    </div>
                    <div className="pt-5 pb-2.5 flex items-center justify-between">
                      <p className="font-medium text-2xl">
                        {project?.explore_name?.name}
                      </p>
                      <div className="icon">
                        <svg
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.704601 0.929259C0.704601 0.6868 0.901167 0.490234 1.14363 0.490234H13.3192C13.5617 0.490234 13.7583 0.6868 13.7583 0.929259V13.1049C13.7583 13.3474 13.5617 13.5439 13.3192 13.5439C13.0768 13.5439 12.8802 13.3474 12.8802 13.1049V1.98918L0.946708 13.9226C0.775254 14.0941 0.497299 14.0941 0.325851 13.9226C0.154404 13.7512 0.154404 13.4732 0.325851 13.3018L12.2593 1.36828H1.14363C0.901167 1.36828 0.704601 1.17178 0.704601 0.929259Z"
                            fill="#000000"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-lg">Site</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
