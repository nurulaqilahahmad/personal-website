import React from "react";
import '../index.css';
import './styles/about.css';
import { Text, HStack } from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import aqilahPassport from '../images/aqilah-passport.jpg';

export const About = () => {
    const [title] = useTypewriter({
        words: ['About Me', 'My Profile', 'My Biography'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    return (
        <div className="indent">
            <title>About – Nurul Aqilah Ahmad</title>
            <Text className="title">{title}<Cursor cursorColor="#7D12FF" /></Text>
            <div className="primary-flex flex rowToCol">
                <div className="flex flex-row gap-4">
                    <div className="flex justify-center items-center">
                        <img src={aqilahPassport} width="450px"></img>
                    </div>
                    <div className="text-left">
                        <Text className="text-xl">Hi, I'm Nurul Aqilah Ahmad. Inspired by my father, I was enthusiastic to deep dive into the world of Information Technology.</Text>
                        <Text className="text-xl">Hi, I'm Nurul Aqilah Ahmad. Inspired by my father, I was enthusiastic to deep dive into the world of Information Technology.</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}