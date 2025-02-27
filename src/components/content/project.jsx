import React, { useState } from "react";
import { Text, HStack, Stack, Table } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    PaginationPageText,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
} from "../ui/pagination";

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
                    <div className="flex flex-col gap-10 primary-flex align-center w-full flex-box hover:scale-110 duration-[0.4s] primary-hover"  style={{ cursor: 'pointer' }} onClick={() => goToSingleProj("/project/" + proj.slug)}>
                        <div className="flex flex-col sm:flex-col lg:flex-row gap-10">
                            <div className="w-[450px]">
                                <img src={proj.image.url} alt="Project Image" style={{ height: '100%' }} />
                            </div>
                            <div className="flex flex-col gap-10 lg:w-[60%] md:w-full sm:w-full">
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
                ))}
            </div>
        )
    }

    else if (location.pathname == '/projects') {
        return (
            <div className="flex lg:flex-row flex-col gap-10 primary-flex w-full flex-wrap">
                {project.map((proj) => (
                    <div className="flex flex-col gap-10 primary-flex align-center w-full flex-box hover:scale-105 duration-[0.4s] primary-hover" style={{ flex: '40%', cursor: 'pointer' }} onClick={() => goToSingleProj("/project/" + proj.slug)}>
                        <div className="flex flex-col gap-10">
                            <div className="h-[450px]">
                                <img src={proj.image.url} alt="Project Image" style={{ height: '100%' }} />
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
                ))}
            </div>
        )
    }

    else if (location.pathname == '/archive') {
        return (
            <Stack width="full" gap="5" height="50rem">
                <Table.Root size="lg">
                    <Table.Header>
                        <Table.Row className="bg-transparent">
                            <Table.ColumnHeader></Table.ColumnHeader>
                            <Table.ColumnHeader>Project</Table.ColumnHeader>
                            <Table.ColumnHeader>Technology</Table.ColumnHeader>
                            <Table.ColumnHeader>Category</Table.ColumnHeader>
                            {/* <Table.ColumnHeader>Link</Table.ColumnHeader> */}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {visibleProject.map((proj) => (
                            <Table.Row key={proj.id} className="borderColumn bg-transparent hover:bg-[#2F0553] hover:cursor-pointer duration-[0.4s]" onClick={() => goToSingleProj("/project/" + proj.slug)}>
                                <Table.Cell><img src={proj.image.url} className="noBorderImg" style={{ width: '200px', height: '113px', zIndex: '1' }}></img></Table.Cell>
                                <Table.Cell>{proj.title}</Table.Cell>
                                <Table.Cell>
                                    <div className="flex flex-row gap-4 flex-wrap justify-start align-middle" style={{ flex: '5%' }}>
                                        {proj.skill.map((projSkill) => (
                                            <Text className="text-selector ">{projSkill.name}</Text>
                                        ))}
                                    </div>

                                </Table.Cell>
                                <Table.Cell>{proj.projectCategory.name}</Table.Cell>
                                {/* <Table.Cell>
                                    <NavLink className="duration-500" to="/projects"><IconButton color="#7D12FF" aria-label="Projects">
                                        <LuExternalLink />
                                    </IconButton></NavLink>
                                </Table.Cell> */}
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
                <PaginationRoot className="flex justify-center" page={page} count={count} pageSize={pageSize} onPageChange={(e) => setPage(e.page)}>
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