import React, { useEffect, useState } from "react";
import '../index.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Text, HStack, Heading, For, Stack, Table, IconButton } from "@chakra-ui/react"
import projectPic from "../image.png";
import { LuExternalLink } from "react-icons/lu";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
    PaginationItems,
    PaginationPageText,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
} from "../components/ui/pagination"
import globalApi from "../services/global-api";
import Project from "../components/content/project";
import { MdArrowBackIosNew } from "react-icons/md";


export const Archive = () => {

    const location = useLocation();     // does not rely on window history
    const canGoBack = location.key !== 'default';
    const navigate = useNavigate();
    function goBack() {
        if (canGoBack) {
            navigate(-1);
        } else {
            navigate('/', { replace: true });
        }
    }

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
            <title>Archive – Nurul Aqilah Ahmad</title>

            <section className="flex flex-col justify-center items-center text-left lg:py-10 gap-10">
                <div className="flex flex-col w-[80%]">
                    <div className="flex flex-row gap-1 hover:gap-2 justify-start items-center text-left text-[#7D12FF] hover:font-bold hover:cursor-pointer duration-[0.4s]" onClick={() => goBack()} style={{ width: 'fit-content' }}>
                        <MdArrowBackIosNew />
                        <Text>Back</Text>
                    </div>
                    <Text className="heading-1 text-left">All Projects</Text>
                    <Project project={project} />
                </div>
            </section>

        </div>
    );
}