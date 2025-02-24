import React from "react";
import { Text, HStack, Heading, For, Stack, Table, IconButton } from "@chakra-ui/react";
import { Button } from "../components/ui/button"
import { Tooltip } from "../components/ui/tooltip"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";
import { Breadcrumb } from "@chakra-ui/react"
import { HiOutlineHome } from "react-icons/hi";
import { MdArrowBackIosNew } from "react-icons/md";

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
            <title>{project.title} – Nurul Aqilah Ahmad</title>

            <section className="flex flex-col justify-center items-center text-left lg:py-10 gap-10">
                <div className="flex flex-col w-[80%] gap-10">
                    <div>
                        <Breadcrumb.Root className="duration-500" size={"md"}>
                            <Breadcrumb.List className="max-md:flex-col max-md:items-start">
                                <Breadcrumb.Item>
                                    <Breadcrumb.Link href="/"><HiOutlineHome /></Breadcrumb.Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Separator />
                                <Breadcrumb.Item>
                                    {location.state?.from?.pathname !== '/archive' ? <Breadcrumb.Link href="/projects">Projects</Breadcrumb.Link> : <Breadcrumb.Link href="/archive">Archive</Breadcrumb.Link>}
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
                    <figure>
                        <img src={project.image.url} width={"100%"}></img>
                    </figure>
                </div>
            </section>

        </div>
    )
}

export default SingleProject;