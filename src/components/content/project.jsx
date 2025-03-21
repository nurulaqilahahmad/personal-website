import React, { useEffect, useState } from "react";
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
import { MdArrowBackIosNew } from "react-icons/md";
import { InputGroup } from "../ui/input-group"
import { Input } from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";

function Project({ project }) {

    const location = useLocation();
    const navigate = useNavigate();
    function goToSingleProj(url) {
        navigate(url, { state: { from: location.pathname } });
    }
    const canGoBack = location.key !== 'default';
    function goBack() {
        if (canGoBack) {
            navigate(-1);
        } else {
            navigate('/', { replace: true });
        }
    }

    // Home - Latest projects
    const startProj = 0;
    const endProj = 3;
    const latestProject = project.slice(startProj, endProj);

    // Projects - Limit to 4 latest projects
    const startProjLatest = 0;
    const endProjLatest = 4;
    const projLatest = project.slice(startProjLatest, endProjLatest);

    // Archive - pagination
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        setPage(1);
    };

    const [page, setPage] = useState(1);
    const pageSize = 5;

    // Filter projects before paginate
    const filteredProject = project.sort((a, b) => new Date(b.dateCompleted) - new Date(a.dateCompleted)).filter((proj) => {
        if (inputText === '') {
            return true;
        } else {
            return proj.title.toLowerCase().includes(inputText) || proj.projectCategory.name.toLowerCase().includes(inputText) || proj.skill.some(skill => skill.name?.toLowerCase().includes(inputText));
        }
    });

    const count = filteredProject.length;
    const startRange = (page - 1) * pageSize;
    const endRange = startRange + pageSize;
    const visibleProject = filteredProject.slice(startRange, endRange);

    if (location.pathname == '/') {
        return (
            <div className="flex w-full flex-col gap-10">
                {latestProject.map((proj) => (
                    <div className="flex flex-col gap-10 primary-flex align-center w-full flex-box hover:scale-110 duration-[0.4s] primary-hover" style={{ cursor: 'pointer' }} onClick={() => goToSingleProj("/project/" + proj.slug)}>
                        <div className="flex flex-col 2xl:flex-row gap-10">
                            <div className="2xl:w-[25rem] xl:h-[15rem] max-lg:h-full w-full">
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
                {projLatest.length > 0 ? projLatest.map((proj) => (
                    <div className="flex flex-col gap-10 primary-flex align-center w-full flex-box hover:scale-105 duration-[0.4s] primary-hover" style={{ flex: '48%', cursor: 'pointer' }} onClick={() => goToSingleProj("/project/" + proj.slug)}>
                        <div className="flex flex-col gap-10">
                            <div className="2xl:h-[20rem] md-[20rem] max-md:h-full w-full">
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
            <div className="flex flex-col w-[80%] gap-10">
                <div className="flex flex-row gap-1 hover:gap-2 justify-start items-center text-left text-[#7D12FF] hover:font-bold hover:cursor-pointer duration-[0.4s]" onClick={() => goBack()} style={{ width: 'fit-content' }}>
                    <MdArrowBackIosNew />
                    <Text>Back</Text>
                </div>
                <div className="flex flex-row max-md:flex-col gap-4 justify-between items-center">
                    <Text className="heading-1 text-left max-sm:text-center">All Projects</Text>
                    <div className="flex">
                        <InputGroup flex="1" startElement={<ImSearch color="#7D12FF" />}>
                            <Input type="text" placeholder="Search..." onChange={inputHandler} variant="flushed" className="p-2 h-[3rem] bg-transparent border-b-[0.1rem] border-b-[#7D12FF]" />
                        </InputGroup>
                    </div>
                </div>
                <Stack width="full" gap="5" height="50rem">
                    <Table.Root size="lg">
                        <Table.Header>
                            <Table.Row className="bg-transparent">
                                <Table.ColumnHeader htmlWidth="20%" className="hidden lg:flex" style={{ color: "white" }}></Table.ColumnHeader>
                                <Table.ColumnHeader htmlWidth="30%" style={{ color: "white" }}>Project</Table.ColumnHeader>
                                <Table.ColumnHeader htmlWidth="40%" className="max-sm:hidden" style={{ color: "white" }}>Technology</Table.ColumnHeader>
                                <Table.ColumnHeader htmlWidth="10%" className="max-sm:hidden" style={{ color: "white" }}>Category</Table.ColumnHeader>
                                <Table.ColumnHeader htmlWidth="1%" className="lg:hidden" style={{ color: "white" }}></Table.ColumnHeader>
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
            </div>
        )
    }
}

export default Project