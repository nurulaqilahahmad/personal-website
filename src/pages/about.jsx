"use client"
import React, { useEffect } from "react";
import '../index.css';
import { Text, HStack } from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import aqilahPassport from '../images/aqilah-passport.jpg';
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { BiRename, BiCalendar, BiCurrentLocation } from "react-icons/bi";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { EmploymentHistory } from "../components/employment-history";
import globalApi from "../services/global-api";

export const About = () => {
    const [title] = useTypewriter({
        words: ['About Me', 'My Profile', 'My Biography'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    // const workIconLink = document.querySelectorAll('.icon-link');
    // const workDescription = document.querySelectorAll('.work-description');
    // for (let i = 1; i < workDescription.length; i++) {
    //     workDescription[i].style.display = 'none';
    // }
    // function openWorkDesc(index) {
    //     for (let i = 0; i < workDescription.length; i++) {
    //         if(i == index) {
    //             workDescription[i].style.display = 'flex';
    //         } else {
    //             workDescription[i].style.display = 'none';
    //         }
    //     }
    // }

    // useEffect(()=>{
    //     getEmploymentHistory();
    // },[])
    // const getEmploymentHistory = () => {
    //     globalApi.getEmploymentHistory().then(resp=>{
    //         console.log(resp);
    //     })
    // }

    return (
        <div className="indent">

            <title>About – Nurul Aqilah Ahmad</title>

            <Text className="title">{title}<Cursor cursorColor="#7D12FF" /></Text>

            <section className="flex flex-col justify-center items-center text-left py-10 gap-10">
                <div className="rowToCol gap-20 justify-center primary-flex">
                    <div className="w-2/4">
                        <img src={aqilahPassport} width="100%" style={{ zIndex: '1' }}></img>
                        {/* <div className="flex flex-col gap-10 flex-box primary-flex w-full">
                            <div className="flex flex-row gap-5 justify-start items-center">
                                <BiRename color="#7D12FF" />
                                <Text>Nurul Aqilah Binti Ahmad</Text>
                            </div>
                            <div className="flex flex-row gap-5 justify-start items-center">
                                <BiCalendar color="#7D12FF" />
                                <Text>9<sup>th</sup> June 2000</Text>
                            </div>
                            <div className="flex flex-row gap-5 justify-start items-center">
                                <BiCurrentLocation color="#7D12FF" />
                                <Text>Sungai Buloh, Selangor</Text>
                            </div>
                        </div> */}
                    </div>
                    <div className="flex flex-col text-left gap-5">
                        <Text>Hi, I'm Aqilah.</Text>
                        <Text>Inspired by my father, I was enthusiastic to deep dive into the world of Information Technology.</Text>
                        <Text>Persevere and excel during university years to gain valuable skills, then utilize it to work at <a href="https://www.milradius.com.my/" className="link">an IT company</a>.</Text>
                        <Text>Here are few technologies that I've been working with recently:</Text>
                        <ul className="list-marker">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>PHP</li>
                            <li>WordPress</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center text-left py-40 gap-10">
                <EmploymentHistory />
                <div className="flex flex-col gap-10 primary-flex justify-center items-center">
                    <div className="flex flex-row justify-between items-center gap-5 w-full">
                        <hr className="w-full border-violet-400"></hr>
                        <Text className="text-nowrap font-bold" color="#7D12FF">Employment History</Text>
                        <hr className="w-full border-violet-400"></hr>
                    </div>
                    <div className="flex flex-col gap-10 primary-flex w-full">
                        <div className="flex flex-col px-5 gap-4">
                            <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-col gap-2">
                                    <Text className="text-xl text-wrap font-bold">Software Developer @ <a href="https://www.milradius.com.my/" className="link">Millennium Radius</a></Text>
                                    <Text className="text-nowrap">June 2024 - Present</Text>
                                </div>
                                <VscTriangleUp className="icon-link" />
                            </div>
                            <article className="work-description">
                                <ul className="list-marker">
                                    <li>Built responsive and interactive webpages using HTML, Tailwind CSS, TypeScript, and Angular and utilized JSON responses from APIs using Postman to update the webpage content in real-time, improving user interaction and experience.</li>
                                    <li>Managed and resolved technical helpdesk tickets to ensure that overall downtime for users is reduced.</li>
                                </ul>
                            </article>
                        </div>
                        <div className="flex flex-col px-5 gap-4">
                            <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-col gap-2">
                                    <Text className="text-xl text-wrap font-bold">Website Developer @ <span className="link">Freelance</span></Text>
                                    <Text className="text-nowrap">May 2024 - Present</Text>
                                </div>
                                <VscTriangleDown className="icon-link" />
                            </div>
                            <article className="work-description">
                                <ul className="list-marker">
                                    <li>Create mockups and design prototypes using Figma to test the website concept according to the requirements and needs from stakeholders.</li>
                                    <li>Build websites using a hosting provider, Content Management System (CMS) and eCommerce to manage the website architecture, content and database.</li>
                                </ul>
                            </article>
                        </div>
                        <div className="flex flex-col px-5 gap-4">
                            <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-col gap-2">
                                    <Text className="text-xl text-wrap font-bold">Web Designer @ <a href="https://www.zwayit.biz/index.html" className="link">Z Way IT</a></Text>
                                    <Text className="text-nowrap">September 2023 - May 2024</Text>
                                </div>
                                <VscTriangleDown className="icon-link" />
                            </div>
                            <article className="work-description">
                                <ul className="list-marker">
                                    <li>Designed an interactive prototype using Figma to revamp the presentation of in house website; Implemented a brand-new design for the website and improved the web architecture that are based on the requirements.</li>
                                    <li>Translated UI/UX design from Figma to clean, efficient and well-documented code to enhance web layout.</li>
                                    <li>Provided ongoing website maintenance and updates using Astro, Wordpress, AWS Amazon S3 and Strapi to maintain websites with time-sensitive information. </li>
                                </ul>
                            </article>
                        </div>
                        <div className="flex flex-col px-5 gap-4">
                            <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-col gap-2">
                                    <Text className="text-xl text-wrap font-bold">Web Developer Intern @ <a href="https://www.cidbholdings.com.my/" className="link">CIDB Holdings</a></Text>
                                    <Text className="text-nowrap">September 2023 - May 2024</Text>
                                </div>
                                <VscTriangleDown className="icon-link" />
                            </div>
                            <article className="work-description">
                                <ul className="list-marker">
                                    <li>Designed an interactive prototype using Figma to revamp the presentation of in house website; Implemented a brand-new design for the website and improved the web architecture that are based on the requirements.</li>
                                    <li>Translated UI/UX design from Figma to clean, efficient and well-documented code to enhance web layout.</li>
                                    <li>Provided ongoing website maintenance and updates using Astro, Wordpress, AWS Amazon S3 and Strapi to maintain websites with time-sensitive information. </li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}