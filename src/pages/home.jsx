"use client"
import React, { useEffect, useState } from "react";
import { Text, HStack } from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import '../index.css';
import { NavLink } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";
import projectPic from "../image.png";
import globalApi from "../services/global-api";
import ProjectCategory from "../components/content/project-category";

export const Home = () => {

    document.addEventListener("DOMContentLoaded", () => {
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
    });

    const[projectCategory, setProjectCategory] = useState([]);
    useEffect(()=>{
        getProjectCategoryList();
    },[])
    const getProjectCategoryList = () => {
        globalApi.getProjectCategory().then(resp=>{
            setProjectCategory(resp.projectCategories);
        })
    }

    return (

        <div className="indent">

            <title>Home – Nurul Aqilah Ahmad</title>

            <section className="flex flex-col justify-center items-center text-left lg:py-40 py-20 gap-10">
                <div className="flex flex-col gap-10 primary-flex">
                    <Text className="description-text font-bold" color="#7D12FF">Hello World! My name is</Text>
                    <Text className="text-6xl font-bold slideUpAnim">Nurul Aqilah Ahmad<span className="text-[#7D12FF]">.</span></Text>
                    <Text className="description-text">A motivated and dedicated individual with a passion for programming seeks hands-on experience with a team of professionals. Strong foundation in software development concepts and eagerness to learn new technologies.</Text>
                    <Text className="description-text">Currently a Software Developer at <a href="https://www.milradius.com.my/" className="link">Millennium Radius</a>.</Text>
                    <NavLink className="duration-500" to="/projects" style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                        <Button className="primary-btn px-3">Check out my projects!</Button>
                    </HStack></NavLink>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center text-left lg:py-40 py-20 gap-10">
                <div className="flex flex-col gap-10 w-[80%]">
                    <div className="flex flex-row justify-between items-center gap-5 w-full">
                        <hr className="w-full border-[rgba(167,139,250,0.4)]"></hr>
                        <Text className="text-nowrap font-bold" color="#7D12FF">What Do I Do</Text>
                        <hr className="w-full border-[rgba(167,139,250,0.4)]"></hr>
                    </div>
                    <ProjectCategory projectCategory={projectCategory} />
                </div>
            </section>

            <section className="flex flex-col justify-center items-center text-left lg:py-40 py-20 gap-10">
                <div className="flex flex-col gap-10 primary-flex">
                    <div className="flex flex-row justify-between items-center gap-5 w-full">
                        <hr className="w-full border-[rgba(167,139,250,0.4)]"></hr>
                        <Text className="text-nowrap font-bold" color="#7D12FF">Projects I've Done</Text>
                    </div>
                    <div className="flex flex-col gap-10 primary-flex align-center w-full flex-box hover:scale-110 duration-[0.4s] primary-hover">
                        <div className="flex flex-col sm:flex-col lg:flex-row gap-10">
                            <div>
                                <img src={projectPic} alt="" className="lg:w-[450px] md:w-full sm:w-full" width={450} />
                            </div>
                            <div className="flex flex-col gap-10 lg:w-[60%] md:w-full sm:w-full" style={{ cursor: 'pointer' }}>
                                <Text className="text-2xl font-bold">Medical Supply System</Text>
                                <Text className="">A web application to provide medical facilities such as face masks, hand gloves, PPE and non-surgical gowns for hospitals, clinics or other medical centres.</Text>
                                <div className="flex flex-row gap-2 flex-wrap">
                                    <Text className="text-selector ">HTML</Text>
                                    <Text className="text-selector ">PHP</Text>
                                    <Text className="text-selector ">Bootstrap</Text>
                                    <Text className="text-selector ">MySQL</Text>
                                    <Text className="text-selector ">MySQL</Text>
                                    <Text className="text-selector ">MySQL</Text>
                                    <Text className="text-selector ">MySQL</Text>
                                    <Text className="text-selector ">MySQL</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 primary-flex align-center w-full flex-box hover:scale-110 duration-[0.4s] primary-hover">
                        <div className="flex flex-col sm:flex-col lg:flex-row gap-10">
                            <div>
                                <img src={projectPic} alt="" className="lg:w-[450px] md:w-full sm:w-full" width={450} />
                            </div>
                            <div className="flex flex-col gap-10 lg:w-[60%] md:w-full sm:w-full" style={{ cursor: 'pointer' }}>
                                <Text className="text-2xl font-bold">Medical Supply System</Text>
                                <Text className="">A web application to provide medical facilities such as face masks, hand gloves, PPE and non-surgical gowns for hospitals, clinics or other medical centres.</Text>
                                <div className="flex flex-row gap-2 flex-wrap">
                                    <Text className="text-selector ">HTML</Text>
                                    <Text className="text-selector ">PHP</Text>
                                    <Text className="text-selector ">Bootstrap</Text>
                                    <Text className="text-selector ">MySQL</Text>
                                    <Text className="text-selector ">MySQL</Text>
                                    <Text className="text-selector ">MySQL</Text>
                                    <Text className="text-selector ">MySQL</Text>
                                    <Text className="text-selector ">MySQL</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center pt-5">
                        <NavLink className="duration-500" to="/archive" style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                            <Button className="primary-btn px-3">View Archive</Button>
                        </HStack></NavLink>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center lg:py-40 py-20 gap-10">
                <div className="flex flex-col gap-10 primary-flex justify-center items-center">
                    <Text className="font-bold" color="#7D12FF">Let's Keep In Touch!</Text>
                    <Text className="w-1/2">I've still got lots of things to learn and master. Advices and motivations are welcomed.</Text>
                    <NavLink className="duration-500" to="mailto:nrlaqilahahmd@gmail.com" style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                        <Button className="secondary-btn px-3">Say Hello</Button>
                    </HStack></NavLink>
                </div>
            </section>

        </div>
    );
}