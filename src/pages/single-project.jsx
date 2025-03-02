import React from "react";
import { Text, HStack, Flex } from "@chakra-ui/react";
import { Button } from "../components/ui/button"
import { Tooltip } from "../components/ui/tooltip"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";
import { Breadcrumb } from "@chakra-ui/react"
import { HiOutlineHome } from "react-icons/hi";
import { format } from 'date-fns';
import Task from "../components/content/task";

function SingleProject({ project }) {
    const location = useLocation();     // does not rely on window history
    const canGoBack = location.key !== 'default';
    // const isNotArchive = location.state?.from?.pathname !== '/archive';
    const navigate = useNavigate();
    function goBack() {
        if (canGoBack) {
            navigate(-1);
        } else {
            navigate('/', { replace: true });
        }
    }

    return (
        <div className="indent">
            <title>{project.title} | Nurul Aqilah Ahmad</title>

            <section className="flex flex-col items-center text-left lg:py-10 gap-10">
                <div className="flex flex-col w-[80%] gap-10">
                    <div>
                        <Breadcrumb.Root size={"md"}>
                            <Breadcrumb.List className="max-md:flex-col max-md:items-start">
                                <Breadcrumb.Item>
                                    <Breadcrumb.Link href="/" className="duration-[0.4s]"><HiOutlineHome /></Breadcrumb.Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Separator />
                                <Breadcrumb.Item>
                                    {location.state?.from !== '/archive' ? <Breadcrumb.Link href="/projects" className="duration-[0.4s]">Projects</Breadcrumb.Link> : <Breadcrumb.Link href="/archive" className="duration-[0.4s]">Archive</Breadcrumb.Link>}
                                    {/* <Breadcrumb.Link href="/projects">Projects</Breadcrumb.Link> */}
                                </Breadcrumb.Item>
                                <Breadcrumb.Separator />
                                <Breadcrumb.Item>
                                    <Breadcrumb.CurrentLink className="text-[#7D12FF]">{project.title}</Breadcrumb.CurrentLink>
                                </Breadcrumb.Item>
                            </Breadcrumb.List>
                        </Breadcrumb.Root>
                        <div className="flex flex-row justify-start items-center md:gap-20 max-md:flex-col max-md:items-start">
                            <Text className="heading-1 text-left">{project.title}</Text>
                            <Tooltip className="duration-500" content="Project Link" positioning={{ placement: "right-end-center" }} openDelay={100} closeDelay={100} contentProps={{ css: { "--tooltip-bg": "rgba(125, 18, 255, 0.4)", "color": "rgba(255, 255, 255, 0.9)" } }}>
                                <Link className="duration-500" to={project.link} target="_blank"><HStack>
                                    <Button className="primary-btn px-3"><LuExternalLink /></Button>
                                </HStack></Link>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <div className="flex w-full m-0 h-[500px]">
                    <figure className="flex w-full">
                        <img src={project.image.url} alt="Project Image" className="w-full"></img>
                    </figure>
                </div>

                <div className="flex lg:flex-row flex-col gap-10 primary-flex w-[80%] flex-wrap mt-10">
                    <div className="flex flex-col flex-box-primary gap-20 duration-[0.4s] md:min-h-96 w-full" style={{ flex: '5%' }}>
                        <Flex className="flex-col gap-6">
                            <Flex className="flex-row justify-start items-center gap-4">
                                <Text className="text-nowrap font-bold" color="#7D12FF">Description</Text>
                                <hr className="w-full border-[rgba(167,139,250,0.4)]"></hr>
                            </Flex>
                            <Flex>
                                {project.description}
                            </Flex>
                        </Flex>
                        <Flex className="flex-col gap-6">
                            <Flex className="flex-row justify-start items-center gap-4">
                                <Text className="text-nowrap font-bold" color="#7D12FF">Technology</Text>
                                <hr className="w-full border-[rgba(167,139,250,0.4)]"></hr>
                            </Flex>
                            <Flex className="flex-row gap-2 flex-wrap">
                                {project.skill.map((projSkill) => (
                                    <Text className="text-selector ">{projSkill.name}</Text>
                                ))}
                            </Flex>
                        </Flex>
                        <Flex className="flex-col gap-6">
                            <Flex className="flex-row justify-start items-center gap-4">
                                <Text className="text-nowrap font-bold" color="#7D12FF">Year Created</Text>
                                <hr className="w-full border-[rgba(167,139,250,0.4)]"></hr>
                            </Flex>
                            <Flex>
                                {project.dateCreated ? format(new Date(project.dateCreated), 'yyyy') : ''}
                            </Flex>
                        </Flex>
                    </div>
                    <div className="flex flex-col flex-box-primary bg-transparent gap-10 duration-[0.4s] md:min-h-96 w-full" style={{ flex: '60%' }}>
                        {/* <Text className="text-xl font-bold">Tasks</Text> */}
                        <Flex className="flex-row justify-start items-center gap-4">
                            <Text className="text-xl font-bold">Tasks</Text>
                            <hr className="w-full border-[rgba(167,139,250,0.4)]"></hr>
                        </Flex>
                        <Task task={project.task} />
                    </div>
                </div>

            </section>

        </div>
    )
}

export default SingleProject;