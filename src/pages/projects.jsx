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
import ProjectCategory from "../components/content/project-category";

export const Projects = () => {
    const [title] = useTypewriter({
        words: ['Projects', 'Works', 'Developments'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
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
                                <Link unstyled href={"#"+projCat.subSlug} style={{ fontSize: '1rem' }}>
                                    {projCat.icon.html}
                                    {projCat.name}
                                </Link>
                            </Tabs.Trigger>
                            ))}
                        </Tabs.List>

                        <Tabs.Content value="all">
                            <div className="flex lg:flex-row flex-col gap-10 primary-flex w-full flex-wrap">
                                <div className="flex flex-col gap-10 primary-flex align-center w-full flex-box hover:scale-105 duration-[0.4s] primary-hover" style={{ flex: '40%', cursor: 'pointer' }}>
                                    <div className="flex flex-col gap-10">
                                        <div>
                                            <img src={projectPic} alt="" className="lg:w-[450px] md:w-full sm:w-full" style={{ width: '100%' }} />
                                        </div>
                                        <div className="flex flex-col gap-10">
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

                                <div className="flex flex-col gap-10 primary-flex align-center w-full flex-box hover:scale-105 duration-[0.4s] primary-hover" style={{ flex: '40%', cursor: 'pointer' }}>
                                    <div className="flex flex-col gap-10">
                                        <div>
                                            <img src={projectPic} alt="" className="lg:w-[450px] md:w-full sm:w-full" style={{ width: '100%' }} />
                                        </div>
                                        <div className="flex flex-col gap-10">
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

                                <div className="flex flex-col gap-10 primary-flex align-center w-full flex-box hover:scale-105 duration-[0.4s] primary-hover" style={{ flex: '40%', cursor: 'pointer' }}>
                                    <div className="flex flex-col gap-10">
                                        <div>
                                            <img src={projectPic} alt="" className="lg:w-[450px] md:w-full sm:w-full" style={{ width: '100%' }} />
                                        </div>
                                        <div className="flex flex-col gap-10">
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

                                <div className="flex flex-col gap-10 primary-flex align-center w-full flex-box hover:scale-105 duration-[0.4s] primary-hover" style={{ flex: '40%', cursor: 'pointer' }}>
                                    <div className="flex flex-col gap-10">
                                        <div>
                                            <img src={projectPic} alt="" className="lg:w-[450px] md:w-full sm:w-full" style={{ width: '100%' }} />
                                        </div>
                                        <div className="flex flex-col gap-10">
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
                            </div>
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