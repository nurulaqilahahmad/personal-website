import React from "react";
import '../index.css';
import { Text, HStack } from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Contact = () => {
    const [title] = useTypewriter({
            words: ['Contact Details', 'Get In Touch', 'Let\'s Connect'],
            loop: {},
            typeSpeed: 120,
            deleteSpeed: 80,
        });
    return (
        <div>
            <title>Contact – Nurul Aqilah Ahmad</title>
            <Text className="title">{title}<Cursor cursorColor="#7D12FF"/></Text>
        </div>
    );
}