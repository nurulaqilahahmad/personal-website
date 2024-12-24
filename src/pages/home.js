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
            <div className="flex flex-col justify-center items-start text-left inset-x-full py-40 gap-10">
                <div className="primary-flex">
                    <Text className="text-xl font-bold" color="#7D12FF">Hello World! My name is</Text>
                </div>
                <div className="primary-flex">
                    <Text className="text-6xl font-bold">Nurul Aqilah Ahmad</Text>
                </div>
                <div className="primary-flex">
                    <Text className="text-xl">A motivated and dedicated individual with a passion for programming seeks hands-on experience with a team of professionals. Strong foundation in software development concepts and eagerness to learn new technologies.</Text>
                    <Text className="text-xl">Currently a Software Developer at <a href="https://www.milradius.com.my/" className="link">Millennium Radius</a>.</Text>
                </div>
                <div className="primary-flex">
                    <NavLink className="duration-500" to="/projects"><HStack>
                        <Button className="primary-btn px-3">Check out my projects!</Button>
                    </HStack></NavLink>
                </div>
            </div>

        </div>
    );
}