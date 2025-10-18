import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PortfolioDetail = () => {
  const params = useParams();
  const [project, setProject] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const getProjectById = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/osprojects/${params.id}/`
      );

      setProject(response.data);
    } catch (error) {
      console.error(error.status);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    getProjectById();
  }, []);

  console.log(project);

  return (
    <section className="pt-[198px] lg:pt-[130px]">
      <div className="container">
        <h2>PortfolioDetail {params.id}</h2>
        <div className="font-bold text-2xl text-red-500 text-center">{errorMessage}</div>
      </div>
    </section>
  );
};
