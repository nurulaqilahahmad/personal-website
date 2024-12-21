import React from "react";
import { Text, HStack } from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import '../index.css';
import { Link, NavLink } from "react-router-dom";

export const Home = () => {
    return (

        <div className="px-10">
            <title>Home – Nurul Aqilah Ahmad</title>
            <div className="flex flex-col justify-center items-start text-left px-40 py-40 gap-10">
                <div>
                    <Text className="text-xl font-bold" color="#7D12FF">Hello, I'm</Text>
                </div>
                <div>
                    <Text className="text-6xl font-bold">Nurul Aqilah Ahmad</Text>
                </div>
                <div>
                    <Text className="text-xl">A motivated and dedicated individual with a passion for programming seeks hands-on experience with a team of professionals. Strong foundation in software development concepts and eagerness to learn new technologies.</Text>
                </div>
                <div>
                    <NavLink className="duration-500" to="/about"><HStack>
                        <Button className="primary-btn px-3">Know More</Button>
                    </HStack></NavLink>
                </div>
            </div>

        </div>
    );
}