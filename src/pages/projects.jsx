import React from "react";
import '../index.css';
import { Text, HStack } from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Projects = () => {
    const [title] = useTypewriter({
            words: ['Projects', 'Works', 'Developments'],
            loop: {},
            typeSpeed: 120,
            deleteSpeed: 80,
        });
    return (
        <div>
            <title>Projects – Nurul Aqilah Ahmad</title>
            <Text className="title">{title}<Cursor cursorColor="#7D12FF"/></Text>
        </div>
    );
}