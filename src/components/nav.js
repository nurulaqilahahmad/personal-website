import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../aqilah-logo.png';
import { Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react"
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoListCircleOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";

export const Nav = () => {
    return (
        <nav className="flex justify-between align-center px-10 py-8 sticky top-0">
            <Link to="/">
                <div className="rounded-xl border-4 border-[#D09CFA]"><Text className="text-2xl font-bold px-3 py-2" color="#D09CFA">Q</Text></div>
            </Link>
            <div className="flex absolute">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="flex px-3 py-3 gap-6">
                <li>
                    <NavLink className="duration-500" to="/about"><IconButton color="#D09CFA" aria-label="About">
                        <HiOutlineUserCircle />
                    </IconButton>About</NavLink>
                </li>
                <li>
                    <NavLink className="duration-500" to="/projects"><IconButton color="#D09CFA" aria-label="Projects">
                        <IoListCircleOutline />
                    </IconButton>Projects</NavLink>
                </li>
                <li>
                    <NavLink className="duration-500" to="/contact"><IconButton color="#D09CFA" aria-label="Contact">
                        <IoInformationCircleOutline />
                    </IconButton>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};