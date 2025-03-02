import React, { useEffect, useState } from "react";
import '../index.css';
import { Text } from "@chakra-ui/react"
import { useLocation, useNavigate } from "react-router-dom";
import globalApi from "../services/global-api";
import Project from "../components/content/project";
import { MdArrowBackIosNew } from "react-icons/md";
import { InputGroup } from "../components/ui/input-group"
import { Textarea, Input, Field, FieldErrorText } from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";

export const Archive = () => {

    const location = useLocation();     // does not rely on window history
    const canGoBack = location.key !== 'default';
    const navigate = useNavigate();
    function goBack() {
        if (canGoBack) {
            navigate(-1);
        } else {
            navigate('/', { replace: true });
        }
    }

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

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
            <title>Archive | Nurul Aqilah Ahmad</title>

            <section className="flex flex-col justify-center items-center text-left lg:py-10 gap-10">
                <div className="flex flex-col w-[80%]">
                    <div className="flex flex-row gap-1 hover:gap-2 justify-start items-center text-left text-[#7D12FF] hover:font-bold hover:cursor-pointer duration-[0.4s]" onClick={() => goBack()} style={{ width: 'fit-content' }}>
                        <MdArrowBackIosNew />
                        <Text>Back</Text>
                    </div>
                    <div className="flex flex-row gap-10 justify-between items-center">
                        <Text className="text-nowrap heading-1 text-left">All Projects</Text>
                        <div>
                            <InputGroup flex="1" startElement={<ImSearch color="#7D12FF" />}>
                                <Input type="text" placeholder="Search..." onChange={inputHandler} variant="flushed" className="p-2 h-[3rem] bg-transparent border-b-[0.1rem] border-b-[#7D12FF]" />
                            </InputGroup>
                        </div>
                    </div>
                    <Project project={
                        project.filter((proj) => {
                            if(inputText === '') {
                                return proj;
                            } else {
                                proj.skill.map((projSkill) => {
                                    return proj.title.toLowerCase().includes(inputText) || proj.projectCategory.name.toLowerCase().includes(inputText) || projSkill.name.toLowerCase().includes(inputText);
                                })
                                // return proj.title.toLowerCase().includes(inputText) || proj.projectCategory.name.toLowerCase().includes(inputText);
                                // return proj.title.toLowerCase().includes(inputText) || proj.projectCategory.name.toLowerCase().includes(inputText);
                            }
                        })
                    } />
                </div>
            </section>

        </div>
    );
}