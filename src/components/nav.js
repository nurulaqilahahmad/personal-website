import React, { useState } from "react";
import './nav.css';
import '../index.css';
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button"
import { HStack, Text } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { IoListCircleOutline, IoInformationCircleOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { RiMenu5Fill } from "react-icons/ri";

export const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="flex justify-between align-center px-10 py-8 sticky top-0">
            <Link to="/">
                <div className="logo"><Text className="text-2xl font-bold px-3 py-2">Q</Text></div>
            </Link>
            <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
                <IconButton color="#7D12FF" aria-label="Menu">
                    <RiMenu5Fill />
                </IconButton>
            </div>
            <ul className={openMenu ? "open" : ""}>
                <li className="close-menu">
                    <IconButton aria-label="Close" onClick={() => setOpenMenu(false)}>
                        <IoMdClose />
                    </IconButton>
                </li>
                <li>
                    <NavLink className="duration-500" to="/about"><IconButton color="#7D12FF" aria-label="About">
                        <HiOutlineUserCircle />
                    </IconButton>About</NavLink>
                </li>
                <li>
                    <NavLink className="duration-500" to="/projects"><IconButton color="#7D12FF" aria-label="Projects">
                        <IoListCircleOutline />
                    </IconButton>Projects</NavLink>
                </li>
                <li>
                    <NavLink className="duration-500" to="/contact"><IconButton color="#7D12FF" aria-label="Contact">
                        <IoInformationCircleOutline />
                    </IconButton>Contact</NavLink>
                </li>
                <li>
                    <NavLink className="duration-500"><HStack>
                        <Button className="primary-btn px-3">Resume/CV</Button>
                    </HStack></NavLink>
                </li>
            </ul>
        </nav>
    );
};