"use client"
import React, { useEffect, useState } from "react";
import '../index.css';
import { Text, HStack, Flex } from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import aqilahPassport from '../images/aqilah-passport.jpg';
import globalApi from "../services/global-api";
import EmploymentHistory from "../components/content/employment-history";
import EducationalBackground from "../components/content/educational-background";
import Certification from "../components/content/certification";

export const About = () => {
    const [title] = useTypewriter({
        words: ['About Me', 'My Profile', 'My Biography'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    const [employmentHistory, setEmploymentHistory] = useState([]);
    const getEmploymentHistoryList = () => {
        globalApi.getEmploymentHistory().then(resp => {
            // console.log(resp.employmentHistories);
            setEmploymentHistory(resp.employmentHistories.reverse());
        })
    }

    const [educationalBackground, setEducationalBackground] = useState([]);
    const getEducationalBackgroundList = () => {
        globalApi.getEducationalBackground().then(resp => {
            // console.log(resp.employmentHistories);
            setEducationalBackground(resp.educationalBackgrounds.reverse());
        })
    }

    const [certification, setCertification] = useState([]);
    const getCertificationList = () => {
        globalApi.getCertification().then(resp => {
            // console.log(resp.employmentHistories);
            setCertification(resp.certifications.reverse());
        })
    }

    useEffect(() => {
        getEmploymentHistoryList();
        getEducationalBackgroundList();
        getCertificationList();
    }, [])


    return (
        <div className="indent">

            <title>About – Nurul Aqilah Ahmad</title>

            <Text className="title">{title}<Cursor cursorColor="#7D12FF" /></Text>

            <section className="flex flex-col justify-center items-center text-left py-10 gap-10">
                <div className="rowToCol gap-20 justify-center primary-flex">
                    <div className="w-2/4">
                        <img src={aqilahPassport} className="wBorderImg lg:w-full max-md:w-2/4" />
                    </div>
                    <div className="flex flex-col text-left gap-5">
                        <Text>Hi, I'm Aqilah.</Text>
                        <Text>Inspired by my father, I was enthusiastic to deep dive into the world of Information Technology.</Text>
                        <Text>Persevere and excel during university years to gain valuable skills, then utilize it to work at <a href="https://www.milradius.com.my/" className="link">an IT company</a>.</Text>
                        <Text>Here are few technologies that I've been working with recently:</Text>
                        <Flex wrap="wrap" grow gap="9">
                            <ul className="list-marker max-md:hidden">
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                            </ul>
                            <ul className="list-marker max-md:hidden">
                                <li>PHP</li>
                                <li>WordPress</li>
                            </ul>
                            <ul className="list-marker md:hidden">
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>PHP</li>
                                <li>WordPress</li>
                            </ul>
                        </Flex>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center text-left pt-40 gap-10">
                <div className="flex flex-col gap-10 primary-flex justify-center items-center">
                    <div className="flex flex-row justify-between items-center gap-5 w-full">
                        <hr className="w-full border-violet-400"></hr>
                        <Text className="md:text-nowrap text-center font-bold" color="#7D12FF">Employment History</Text>
                        <hr className="w-full border-violet-400"></hr>
                    </div>
                    <EmploymentHistory employmentHistory={employmentHistory} />
                </div>
            </section>

            <section className="flex flex-col justify-center items-center text-left py-40 gap-10">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-40 lg:gap-10 lg:w-[70%]">
                    <div className="flex flex-col gap-10 primary-flex justify-center items-center lg:w-[50%]">
                        <div className="flex flex-row justify-between items-center gap-5 w-full">
                            {/* <hr className="w-full border-violet-400"></hr> */}
                            <Text className="font-bold" color="#7D12FF">Certification</Text>
                            <hr className="w-full border-violet-400"></hr>
                        </div>
                        <Certification certification={certification} />
                    </div>
                    <div className="flex flex-col gap-10 primary-flex justify-center items-center lg:w-[50%]">
                        <div className="flex flex-row justify-between items-center gap-5 w-full">
                            <hr className="w-full border-violet-400"></hr>
                            <Text className="md:text-nowrap font-bold" color="#7D12FF">Educational Background</Text>
                            {/* <hr className="w-full border-violet-400"></hr> */}
                        </div>
                        <EducationalBackground educationalBackground={educationalBackground} />
                    </div>
                </div>

            </section>

        </div>
    );
}