"use client"
import React, { useEffect } from "react";
import '../index.css';
import './styles/about.css';
import { Text, HStack } from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import aqilahPassport from '../images/aqilah-passport.jpg';
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { BiRename, BiCalendar, BiCurrentLocation } from "react-icons/bi";
import { VscTriangleDown } from "react-icons/vsc";
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
    const workDescription = document.querySelectorAll('.work-description');
    for (let i = 1; i < workDescription.length; i++) {
        workDescription[i].style.display = 'none';
    }
    function openWorkDesc(index) {
        for (let i = 0; i < workDescription.length; i++) {
            if(i == index) {
                workDescription[i].style.display = 'flex';
            } else {
                workDescription[i].style.display = 'none';
            }
        }
    }

    useEffect(()=>{
        getEmploymentHistory();
    },[])
    const getEmploymentHistory = () => {
        globalApi.getEmploymentHistory().then(resp=>{
            console.log(resp);
        })
    }

    return (
        <div className="indent">

            <title>About – Nurul Aqilah Ahmad</title>

            <Text className="title">{title}<Cursor cursorColor="#7D12FF" /></Text>

            <section className="flex flex-col justify-center items-center text-left py-10 gap-10">
                <div className="rowToCol gap-20 primary-flex">
                    <div className="flex flex-col justify-center items-center">
                        <img src={aqilahPassport} width="200px" style={{ zIndex: '1' }}></img>
                        <div className="flex flex-col gap-10 flex-box primary-flex w-full">
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
                        </div>
                    </div>
                    <div className="text-left w-2/4">
                        <Text className="description-text">
                            Hi, I'm Aqilah.
                            <br></br>
                            <br></br>
                            Inspired by my father, I was enthusiastic to deep dive into the world of Information Technology.
                            <br></br>
                            <br></br>
                            Persevere and excel during university years to gain valuable skills, then utilize it to work at <a href="https://www.capitaldynamics.biz/" className="link">an investment company</a>, <a href="https://www.milradius.com.my/" className="link">IT company</a>.
                        </Text>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center text-left py-40 gap-10">
                <EmploymentHistory/>
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
                                    <Text className="text-xl text-nowrap font-bold">Software Developer @ <a href="" className="link">Millennium Radius</a></Text>
                                    <Text className="text-nowrap">June 2024 - Present</Text>
                                </div>
                                <VscTriangleDown className="icon-link"/>
                            </div>
                            <article className="work-description">
                                <ul className="list-marker">
                                    <li>Develop system</li>
                                    <li>Develop system</li>
                                    <li>Develop system</li>
                                </ul>
                            </article>
                        </div>
                        <div className="flex flex-col px-5 gap-4">
                            <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-col gap-2">
                                    <Text className="text-xl text-nowrap font-bold">Website Developer @ <a href="" className="link">Freelance</a></Text>
                                    <Text className="text-nowrap">May 2024 - Present</Text>
                                </div>
                                <VscTriangleDown className="icon-link" />
                            </div>
                            <article className="work-description">
                                <ul className="list-marker">
                                    <li>Develop system</li>
                                    <li>Develop system</li>
                                    <li>Develop system</li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}