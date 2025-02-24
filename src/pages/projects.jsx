import React, { useEffect, useState } from "react";
import '../index.css';
import { Text, HStack } from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import projectPic from "../image.png";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Link, Tabs } from "@chakra-ui/react"
import { BsWindow } from "react-icons/bs";
import globalApi from "../services/global-api";
import Project from "../components/content/project";
import ProjectCategory from "../components/content/project-category";

export const Projects = () => {
    const [title] = useTypewriter({
        words: ['Projects', 'Works', 'Developments'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });


    const [projectCategory, setProjectCategory] = useState([]);
    useEffect(() => {
        getProjectCategoryList();
    }, [])
    const getProjectCategoryList = () => {
        globalApi.getProjectCategory().then(resp => {
            setProjectCategory(resp.projectCategories);
        })
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
            <title>Projects – Nurul Aqilah Ahmad</title>
            <Text className="title">{title}<Cursor cursorColor="#7D12FF" /></Text>

            <section className="flex flex-col justify-center items-center text-left pt-10 pb-[5.4rem] gap-10">
                <div className="flex gap-10 w-[80%]">
                    <Tabs.Root defaultValue="all" colorPalette={'purple'} variant={'line'}>
                        <Tabs.List className="pb-20">
                            <Tabs.Trigger value="all" asChild className="duration-[0.4s]">
                                <Link unstyled href="#all">
                                    All
                                </Link>
                            </Tabs.Trigger>
                            {projectCategory.map((projCat, index) => (
                                <Tabs.Trigger value={projCat.subSlug} asChild className="duration-[0.4s]">
                                    <Link unstyled href={"#" + projCat.subSlug} style={{ fontSize: '1rem' }}>
                                        {/* {projCat.icon.html} */}
                                        {projCat.name}
                                    </Link>
                                </Tabs.Trigger>
                            ))}
                        </Tabs.List>

                        <Tabs.Content value="all">
                            <Project project={project} />
                        </Tabs.Content>

                        <Tabs.Content value="web">Manage your web projects</Tabs.Content>

                        <Tabs.Content value="mobile">Manage your mobile projects</Tabs.Content>

                        <Tabs.Content value="game">Manage your game projects</Tabs.Content>

                        <Tabs.Content value="vr-ar">Manage your VR/AR projects</Tabs.Content>

                        <Tabs.Content value="design">Manage your design projects</Tabs.Content>

                    </Tabs.Root>
                </div>
                <div className="flex justify-center pt-5">
                    <NavLink className="duration-500" to="/archive" style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                        <Button className="secondary-btn px-3">View Archive</Button>
                    </HStack></NavLink>
                </div>
            </section>
        </div>
    );
}