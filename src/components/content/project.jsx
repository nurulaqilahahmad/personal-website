import React, { useState } from "react";
import { Text, HStack, Stack, Table } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    PaginationPageText,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
} from "../ui/pagination";
import { IconButton } from "@chakra-ui/react"
import { FaExternalLinkAlt } from "react-icons/fa";

function Project({ project }) {
    // Home - Latest projects
    const startProj = 0;
    const endProj = 3;
    const latestProject = project.slice(startProj, endProj);

    // Archive - pagination
    const pageSize = 5;
    const count = project.length;
    const [page, setPage] = useState(1);
    const startRange = (page - 1) * pageSize;
    const endRange = startRange + pageSize;
    const visibleProject = project.slice(startRange, endRange);

    const location = useLocation();
    const navigate = useNavigate();
    function goToSingleProj(url) {
        navigate(url, { state: { from: location.pathname } });
    }

    if (location.pathname == '/') {
        return (
            <div className="flex w-full flex-col gap-10">
                {latestProject.map((proj) => (
                    <div className="flex flex-col gap-10 primary-flex align-center w-full flex-box hover:scale-110 duration-[0.4s] primary-hover" style={{ cursor: 'pointer' }} onClick={() => goToSingleProj("/project/" + proj.slug)}>
                        <div className="flex flex-col 2xl:flex-row gap-10">
                            <div className="2xl:w-[25rem] lg:h-[15rem] w-full">
                                <img src={proj.image.url} alt="Project Image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                            </div>
                            <div className="flex flex-col gap-10 2xl:w-[60%] w-full">
                                <Text className="text-2xl font-bold">{proj.title}</Text>
                                <Text className="">{proj.description}</Text>
                                <div className="flex flex-row gap-2 flex-wrap">
                                    {proj.skill.map((projSkill) => (
                                        <Text className="text-selector">{projSkill.name}</Text>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    else if (location.pathname == '/projects') {
        return (
            <div className="flex lg:flex-row flex-col justify-center gap-10 primary-flex w-full flex-wrap">
                {project.length > 0 ? project.map((proj) => (
                    <div className="flex flex-col gap-10 primary-flex align-center w-full flex-box hover:scale-105 duration-[0.4s] primary-hover" style={{ flex: '48%', cursor: 'pointer' }} onClick={() => goToSingleProj("/project/" + proj.slug)}>
                        <div className="flex flex-col gap-10">
                            <div className="lg:h-[15rem] w-full">
                                <img src={proj.image.url} alt="Project Image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                            </div>
                            <div className="flex flex-col gap-10">
                                <Text className="text-2xl font-bold">{proj.title}</Text>
                                <Text className="">{proj.description}</Text>
                                <div className="flex flex-row gap-2 flex-wrap">
                                    {proj.skill.map((projSkill) => (
                                        <Text className="text-selector ">{projSkill.name}</Text>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )) : <div className="py-6 text-center text-[#6B7280]">Nothing here...</div>}
            </div>
        )
    }

    else if (location.pathname == '/archive') {
        return (
            <Stack width="full" gap="5" height="50rem">
                <Table.Root size="lg">
                    <Table.Header>
                        <Table.Row className="bg-transparent">
                            <Table.ColumnHeader className="hidden lg:flex"></Table.ColumnHeader>
                            <Table.ColumnHeader>Project</Table.ColumnHeader>
                            <Table.ColumnHeader className="max-sm:hidden">Technology</Table.ColumnHeader>
                            <Table.ColumnHeader className="max-sm:hidden">Category</Table.ColumnHeader>
                            <Table.ColumnHeader className="lg:hidden"></Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {visibleProject.length > 0 ? visibleProject.map((proj) => (
                            <Table.Row key={proj.id} className="borderColumn bg-transparent hover:bg-[#2F0553] hover:cursor-pointer duration-[0.4s]" onClick={() => goToSingleProj("/project/" + proj.slug)}>
                                <Table.Cell className="hidden lg:flex"><img src={proj.image.url} className="noBorderImg" style={{ width: '200px', height: '113px', zIndex: '1' }}></img></Table.Cell>
                                <Table.Cell>{proj.title}</Table.Cell>
                                <Table.Cell className="max-sm:hidden">
                                    <div className="flex flex-row gap-4 flex-wrap justify-start align-middle" style={{ flex: '5%' }}>
                                        {proj.skill.map((projSkill) => (
                                            <Text className="text-selector ">{projSkill.name}</Text>
                                        ))}
                                    </div>

                                </Table.Cell>
                                <Table.Cell className="max-sm:hidden">{proj.projectCategory.name}</Table.Cell>
                                <Table.Cell className="lg:hidden">
                                    <IconButton aria-label="GitHub" onClick={() => goToSingleProj("/project/" + proj.slug)}>
                                        <FaExternalLinkAlt color="#7D12FF" />
                                    </IconButton>
                                </Table.Cell>
                            </Table.Row>
                        )) : <Table.Row className="borderColumn bg-transparent hover:bg-[#2F0553] hover:cursor-pointer duration-[0.4s]">
                            <Table.Cell colSpan={4}><div className="py-6 text-center text-[#6B7280]">Nothing here...</div></Table.Cell>
                        </Table.Row>}
                    </Table.Body>
                </Table.Root>
                <PaginationRoot className="flex justify-center items-center" page={page} count={count} pageSize={pageSize} onPageChange={(e) => setPage(e.page)}>
                    <HStack gap="4">
                        <PaginationPrevTrigger />
                        <PaginationPageText />
                        <PaginationNextTrigger />
                    </HStack>
                </PaginationRoot>
            </Stack>
        )
    }
}

export default Project