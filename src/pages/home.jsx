import React from "react";
import { Text, HStack } from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import '../index.css';
import './styles/home.css';
import { NavLink } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";

export const Home = () => {

    document.addEventListener("DOMContentLoaded", () => {
        const animatedSections = document.querySelectorAll(".animate");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animActive");
                    } else {
                        entry.target.classList.remove("animActive");
                    }
                });
            },
            { threshold: 0.1 }
        );

        animatedSections.forEach((section) => {
            observer.observe(section);
        });
    });

    return (

        <div className="indent">

            <title>Home – Nurul Aqilah Ahmad</title>

            <section className="flex flex-col justify-center items-center text-left lg:py-40 py-20 gap-10">
                <div className="flex flex-col gap-10 primary-flex">
                    <Text className="description-text font-bold" color="#7D12FF">Hello World! My name is</Text>
                    <Text className="text-6xl font-bold slideUpAnim">Nurul Aqilah Ahmad<span className="text-[#7D12FF]">.</span></Text>
                    <Text className="description-text">A motivated and dedicated individual with a passion for programming seeks hands-on experience with a team of professionals. Strong foundation in software development concepts and eagerness to learn new technologies.</Text>
                    <Text className="description-text">Currently a Software Developer at <a href="https://www.milradius.com.my/" className="link">Millennium Radius</a>.</Text>
                    <NavLink className="duration-500" to="/projects" style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                        <Button className="primary-btn px-3">Check out my projects!</Button>
                    </HStack></NavLink>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center text-left lg:py-40 py-20 gap-10">
                <div className="flex flex-col gap-10 w-[80%]">
                    <div className="flex flex-row justify-between items-center gap-5 w-full">
                        <hr className="w-full border-[rgb(167,139,250,0.4)]"></hr>
                        <Text className="text-nowrap font-bold" color="#7D12FF">What Do I Do</Text>
                        <hr className="w-full border-[rgb(167,139,250,0.4)]"></hr>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-10 primary-flex w-full flex-wrap">
                        <div className="flex flex-col flex-box-primary gap-10 hover:scale-110 duration-[0.4s] md:min-h-96" style={{ flex: '5%' }}>
                            <Text className="text-xl font-bold"><span className="text-[#7D12FF]">01. </span>Web</Text>
                            <Text className="flex grow">Built web applications that includes CRUD operations to cater stakeholders' needs.</Text>
                            <div className="flex justify-end">
                                <NavLink className="duration-500" to="/projects" style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                                    <Button className="primary-btn px-4 py-4"><ImArrowUpRight2 /></Button>
                                </HStack></NavLink>
                            </div>
                        </div>
                        <div className="flex flex-col flex-box-primary gap-10 hover:scale-110 duration-[0.4s] md:min-h-96" style={{ flex: '5%' }}>
                            <Text className="text-xl font-bold"><span className="text-[#7D12FF]">02. </span>Mobile</Text>
                            <Text className="flex grow">Developed mobile applications for portable use.</Text>
                            <div className="flex justify-end">
                                <NavLink className="duration-500" to="/projects" style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                                    <Button className="primary-btn px-4 py-4"><ImArrowUpRight2 /></Button>
                                </HStack></NavLink>
                            </div>
                        </div>
                        <div className="flex flex-col flex-box-primary gap-10 hover:scale-110 duration-[0.4s] md:min-h-96" style={{ flex: '5%' }}>
                            <Text className="text-xl font-bold"><span className="text-[#7D12FF]">03. </span>Game</Text>
                            <Text className="flex grow">Focused on game elements and code its functionality to build fun.</Text>
                            <div className="flex justify-end">
                                <NavLink className="duration-500" to="/projects" style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                                    <Button className="primary-btn px-4 py-4"><ImArrowUpRight2 /></Button>
                                </HStack></NavLink>
                            </div>
                        </div>
                        <div className="flex flex-col flex-box-primary gap-10 hover:scale-110 duration-[0.4s] md:min-h-96" style={{ flex: '5%' }}>
                            <Text className="text-xl font-bold"><span className="text-[#7D12FF]">04. </span>VR / AR</Text>
                            <Text className="flex grow">Created virtual environment to be able to gain rare experiences.</Text>
                            <div className="flex justify-end">
                                <NavLink className="duration-500" to="/projects" style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                                    <Button className="primary-btn px-4 py-4"><ImArrowUpRight2 /></Button>
                                </HStack></NavLink>
                            </div>
                        </div>
                        <div className="flex flex-col flex-box-primary gap-10 hover:scale-110 duration-[0.4s] md:min-h-96" style={{ flex: '5%' }}>
                            <Text className="text-xl font-bold"><span className="text-[#7D12FF]">05. </span>Design</Text>
                            <Text className="flex grow">Brainstormed design ideas that follow stakeholders' needs while complying usability.</Text>
                            <div className="flex justify-end">
                                <NavLink className="duration-500" to="/projects" style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                                    <Button className="primary-btn px-4 py-4"><ImArrowUpRight2 /></Button>
                                </HStack></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center text-left lg:py-40 py-20 gap-10">
                <div className="flex flex-col gap-10 primary-flex">
                    <div className="flex flex-row justify-between items-center gap-5 w-full">
                        <hr className="w-full border-[rgb(167,139,250,0.4)]"></hr>
                        <Text className="text-nowrap font-bold" color="#7D12FF">Projects I've Done</Text>
                    </div>
                </div>
            </section>

        </div>
    );
}