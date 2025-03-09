"use client"
import React, { useEffect, useState } from "react";
import { Text, HStack } from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import '../index.css';
import { Link } from "react-router-dom";
import globalApi from "../services/global-api";
import ProjectCategory from "../components/content/project-category";
import Project from "../components/content/project";

export const Home = () => {

    const animatedSections = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animActive");
                } else {
                    entry.target.classList.remove("animActive");
                }
            });
        },
        { threshold: 0.1 }
    );

    animatedSections.forEach((section) => {
        observer.observe(section);
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

            <title>Nurul Aqilah Ahmad</title>

            <main>
                <section className="flex flex-col justify-center items-center py-40 max-xl:py-20 text-left animate">
                    <div className="flex flex-col gap-10 max-sm:gap-6 xl:w-[50%] max-xl:w-[80%]">
                        <Text className="description-text font-bold" color="#7D12FF">Hello World! My name is</Text>
                        <Text className="text-6xl font-bold slideUpAnim">Nurul Aqilah Ahmad<span className="text-[#7D12FF]">.</span></Text>
                        <Text className="description-text">A motivated and dedicated individual with a passion for programming seeks hands-on experience with a team of professionals. Strong foundation in software development concepts and eagerness to learn new technologies.</Text>
                        <Text className="description-text">Currently a Software Developer at <a href="https://www.milradius.com.my/" className="link">Millennium Radius</a>.</Text>
                        <Link className="duration-500" to="/projects" style={{ width: 'fit-content' }}>
                            <HStack>
                                <Button className="text-wrap primary-btn px-3">Check out my projects!</Button>
                            </HStack>
                        </Link>
                    </div>
                </section>

                <section className="flex flex-col justify-center items-center text-left py-40 max-xl:py-20 gap-10 animate">
                    <div className="flex flex-col gap-10 w-[80%]">
                        <div className="flex flex-row justify-between items-center gap-5 w-full">
                            <hr className="w-full border-[rgba(167,139,250,0.4)]"></hr>
                            <Text className="text-nowrap font-bold" color="#7D12FF">What Do I Do</Text>
                            <hr className="w-full border-[rgba(167,139,250,0.4)]"></hr>
                        </div>
                        <ProjectCategory projectCategory={projectCategory} />

                    </div>
                </section>

                <section className="flex flex-col justify-center items-center text-left py-40 max-xl:py-20 gap-10 animate">
                    <div className="flex flex-col gap-10 w-[50%] max-xl:w-[80%]">
                        <div className="flex flex-row justify-between items-center gap-5 w-full">
                            <hr className="w-full border-[rgba(167,139,250,0.4)]"></hr>
                            <Text className="text-nowrap font-bold" color="#7D12FF">Projects I've Done</Text>
                        </div>
                        <Project project={project.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))} />
                        <div className="flex justify-center pt-5">
                            <Link className="duration-500" to="/archive" style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                                <Button className="primary-btn px-3">View Archive</Button>
                            </HStack></Link>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col justify-center items-center py-40 max-xl:py-20 gap-10 animate">
                    <div className="flex flex-col gap-10 primary-flex justify-center items-center">
                        <Text className="font-bold" color="#7D12FF">Let's Keep In Touch!</Text>
                        <Text className="w-1/2">I've still got lots of things to learn and master. Advices and motivations are welcomed.</Text>
                        <Link className="duration-500" to="mailto:nrlaqilahahmd@gmail.com" style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                            <Button className="secondary-btn px-3">Say Hello</Button>
                        </HStack></Link>
                    </div>
                </section>
            </main>



        </div>
    );
}