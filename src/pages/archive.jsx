import React, { useEffect, useState } from "react";
import '../index.css';
import { useLocation, useNavigate } from "react-router-dom";
import globalApi from "../services/global-api";
import Project from "../components/content/project";

export const Archive = () => {

    const [project, setProject] = useState([]);
    useEffect(() => {
        getProjectList();
    }, [])
    const getProjectList = () => {
        globalApi.getProject().then(resp => {
            setProject(resp.projects);
        })
    }

    return (
        <div className="indent">
            <title>Archive | Nurul Aqilah Ahmad</title>

            <section className="flex flex-col justify-center items-center text-left lg:py-10 gap-10">
                <Project project={project} />
            </section>

        </div>
    );
}