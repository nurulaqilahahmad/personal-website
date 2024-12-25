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

            <div className="flex flex-col justify-center items-center text-left inset-x-full py-40 gap-10 primary-flex">
                <div className="rowToCol gap-10 w-2/4">
                    <div className="flex justify-center items-start w-2/4">
                        <img src={aqilahPassport} width="300px"></img>
                    </div>
                    <div className="text-left w-2/4">
                        <Text className="description-text">
                        Hi, I'm Nurul Aqilah Ahmad. Inspired by my father, I was enthusiastic to deep dive into the world of Information Technology.
                        <br></br>
                        <br></br>
                        Persevere during university years, then managed to be working at well-established <a href="https://www.milradius.com.my/" className="link">IT company</a>.
                        </Text>
                    </div>
                </div>
            </div>

        </div>
    );
}