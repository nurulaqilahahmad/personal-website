import React from "react";
import '../index.css';
import './footer.css';
import { IconButton } from "@chakra-ui/react"
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const Footer = () => {
    return (
        <footer className="flex flex-row justify-between align-center py-10">
            <ul className="flex flex-row justify-center items-center gap-2">
                <li>
                    <hr className="w-20 border text-white"></hr>
                </li>
                <li>
                    <a href="mailto:nrlaqilahahmd@gmail.com" className="transition duration-[0.4s]">nrlaqilahahmd@gmail.com</a>
                </li>
            </ul>
            <ul className="flex flex-row justify-center items-center gap-2">
                <li>
                    <a href="https://github.com/nurulaqilahahmad" target="_blank" className="social-link">
                        <IconButton aria-label="GitHub">
                            <FiGithub className="social-icon" />
                        </IconButton>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nurul-aqilah-ahmad-604b90216/" target="_blank" className="social-link">
                        <IconButton aria-label="Linkedin">
                            <FiLinkedin  className="social-icon" />
                        </IconButton>
                    </a>
                </li>
                <li>
                    <hr className="w-20 border text-white"></hr>
                </li>
            </ul>
        </footer>
    );
};