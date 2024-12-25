import React from "react";
import { Text, HStack } from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import '../index.css';
import './styles/home.css';
import { NavLink } from "react-router-dom";

export const Home = () => {
    return (

        <div className="indent">
        
            <title>Home – Nurul Aqilah Ahmad</title>

            <article className="flex flex-col justify-center items-center text-left inset-x-full py-40 gap-10 primary-flex">
                <div className="flex flex-col w-2/4 gap-10">
                    <Text className="description-text font-bold" color="#7D12FF">Hello World! My name is</Text>
                    <Text className="text-6xl font-bold slideUpAnim">Nurul Aqilah Ahmad<span className="text-[#7D12FF]">.</span></Text>
                    <Text className="description-text">A motivated and dedicated individual with a passion for programming seeks hands-on experience with a team of professionals. Strong foundation in software development concepts and eagerness to learn new technologies.</Text>
                    <Text className="description-text">Currently a Software Developer at <a href="https://www.milradius.com.my/" className="link">Millennium Radius</a>.</Text>
                    <NavLink className="duration-500" to="/projects"><HStack>
                        <Button className="primary-btn px-3">Check out my projects!</Button>
                    </HStack></NavLink>
                </div>

                
            </article>

        </div>
    );
}