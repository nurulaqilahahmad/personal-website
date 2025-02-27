import React, { useEffect, useState } from "react";
import '../index.css';
import { Text, HStack,} from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Lin, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Link, Tabs } from "@chakra-ui/react"
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

    const location = useLocation();
    // const { projCatValue } = location?.state ?? {};
    // const[projCatSelected,setProjCatSelected] = useState();

    console.log(location.state?.projCatValue);

    const [projectCategory, setProjectCategory] = useState([]);
    useEffect(() => {
        getProjectCategoryList();
        getProjectList();
        // getProjCatSelected();
    }, [])

    // const getProjCatSelected = () => {
    //     setProjCatSelected(location.state?.projCatValue);
    // }

    const getProjectCategoryList = () => {
        globalApi.getProjectCategory().then(resp => {
            setProjectCategory(resp.projectCategories);
        })
    }

    const [project, setProject] = useState([]);
    // useEffect(() => {
    //     getProjectList();
    // }, [])
    
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
                    <Tabs.Root defaultValue={location?.state ?? {} ? location.state?.from : 'all'} colorPalette={'purple'} variant={'line'} className="w-full"  activationMode="automatic" justify={'center'}>
                        <Tabs.List className="borderColumn">
                            <Tabs.Trigger value="all" asChild className="px-10 py-6 duration-[0.4s]">
                                <Link unstyled href="#all">
                                    All
                                </Link>
                            </Tabs.Trigger>
                            {projectCategory.map((projCat, index) => (
                                <Tabs.Trigger value={projCat.subSlug} asChild className="px-10 py-6 duration-[0.4s]">
                                    <Link unstyled href={"#" + projCat.subSlug} style={{ fontSize: '1rem' }}>
                                        {/* {projCat.icon.html} */}
                                        {projCat.name}
                                    </Link>
                                </Tabs.Trigger>
                            ))}
                        </Tabs.List>

                        <Tabs.Content value="all" className="pt-20"
                            _open={{
                                animationName: "fade-in, scale-in",
                                animationDuration: "300ms",
                            }}
                            _closed={{
                                animationName: "fade-out, scale-out",
                                animationDuration: "120ms",
                            }}>
                            <Project project={project} />
                        </Tabs.Content>

                        {projectCategory.map((projCat, index) => (
                            <Tabs.Content value={projCat.subSlug} className="pt-20"
                            _open={{
                                animationName: "fade-in, scale-in",
                                animationDuration: "300ms",
                            }}
                            _closed={{
                                animationName: "fade-out, scale-out",
                                animationDuration: "120ms",
                            }}>
                            Manage your {projCat.name} projects
                            <Project project={project} />
                        </Tabs.Content>
                        ))}

                        {/* <Tabs.Content value="web" className="pt-20"
                            _open={{
                                animationName: "fade-in, scale-in",
                                animationDuration: "300ms",
                            }}
                            _closed={{
                                animationName: "fade-out, scale-out",
                                animationDuration: "120ms",
                            }}>
                            Manage your web projects
                            <Project project={project} />
                        </Tabs.Content>

                        <Tabs.Content value="mobile" className="pt-20"
                            _open={{
                                animationName: "fade-in, scale-in",
                                animationDuration: "300ms",
                            }}
                            _closed={{
                                animationName: "fade-out, scale-out",
                                animationDuration: "120ms",
                            }}>
                            Manage your mobile projects
                            <Project project={project} />
                        </Tabs.Content>

                        <Tabs.Content value="game" className="pt-20"
                            _open={{
                                animationName: "fade-in, scale-in",
                                animationDuration: "300ms",
                            }}
                            _closed={{
                                animationName: "fade-out, scale-out",
                                animationDuration: "120ms",
                            }}>
                            Manage your game projects
                            <Project project={project} />
                        </Tabs.Content>

                        <Tabs.Content value="vr-ar" className="pt-20"
                            _open={{
                                animationName: "fade-in, scale-in",
                                animationDuration: "300ms",
                            }}
                            _closed={{
                                animationName: "fade-out, scale-out",
                                animationDuration: "120ms",
                            }}>
                            Manage your VR/AR projects
                            <Project project={project} />
                        </Tabs.Content>

                        <Tabs.Content value="design" className="pt-20"
                            _open={{
                                animationName: "fade-in, scale-in",
                                animationDuration: "300ms",
                            }}
                            _closed={{
                                animationName: "fade-out, scale-out",
                                animationDuration: "120ms",
                            }}>
                            Manage your design projects
                            <Project project={project} />
                        </Tabs.Content> */}

                    </Tabs.Root>
                </div>
                <div className="flex justify-center pt-5">
                    <Link className="duration-500" to="/archive" style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                        <Button className="secondary-btn px-3">View Archive</Button>
                    </HStack></Link>
                </div>
            </section>
        </div>
    );
}