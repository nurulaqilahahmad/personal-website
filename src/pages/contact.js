import React from "react";
import '../index.css';
import { Text, HStack } from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { IoLocationOutline, IoMailOutline  } from "react-icons/io5";

export const Contact = () => {
    const [title] = useTypewriter({
        words: ['Contact Details', 'Get In Touch', 'Let\'s Connect'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    return (
        <div className="indent">

            <title>Contact – Nurul Aqilah Ahmad</title>

            <Text className="title">{title}<Cursor cursorColor="#7D12FF" /></Text>

            <div className="flex flex-col justify-center items-center text-left inset-x-full py-10 gap-10">
                <div className="flex flex-col gap-10 flex-box primary-flex">
                    <div className="flex flex-row gap-5 justify-start items-center">
                        <IoLocationOutline color="#7D12FF" />
                        <Text className="description-text">I am based in Sungai Buloh, Selangor.</Text>
                    </div>
                    <div className="flex flex-row gap-5 justify-start items-center">
                        <IoMailOutline  color="#7D12FF" />
                        <Text className="description-text">Email me at <a href="mailto:nrlaqilahahmd@gmail.com" className="link">nrlaqilahahmd@gmail.com</a>.</Text>
                    </div>
                    <Text>I also have enthusiasm in editing videos and selling preloved. Check out my <a href="https://www.youtube.com/@qel_unggu0496?sub_confirmation=1" className="link">Youtube</a> and <a href="#" className="link">Carousell</a>.</Text>

                </div>
            </div>

        </div>
    );
}