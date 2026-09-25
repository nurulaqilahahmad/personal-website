import React, { useEffect, useState } from "react";
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
import globalApi from "../services/global-api";

const PDF_FILE_URL = '../cv-nurul-aqilah-ahmad.pdf';

export const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const [cv, setCV] = useState([]);
        useEffect(() => {
            getCVList();
        }, [])
    const getCVList = () => {
        globalApi.getCV().then(resp => {
            setCV(resp.cvs);
        })
    }

    const downloadFileAtUrl = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to download file");
        }

        const blob = await response.blob();

        const blobUrl = window.URL.createObjectURL(blob);

        const aTag = document.createElement("a");

        aTag.href = blobUrl;
        aTag.download = "CV - Nurul Aqilah Ahmad.pdf";

        document.body.appendChild(aTag);
        aTag.click();

        aTag.remove();

        window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error("Download failed:", error);
    }
};

    return (
        <nav className="flex justify-between align-center px-10 py-8 sticky top-0">
            <Link to="/" onClick={() => setOpenMenu(false)}>
                <div className="logo"><Text className="text-2xl font-bold px-3 py-2">Q</Text></div>
            </Link>
            <div className="menu" onClick={() => setOpenMenu(true)}>
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
                    <NavLink className="duration-500" to="/about" onClick={() => setOpenMenu(false)}><IconButton color="#7D12FF" aria-label="About">
                        <HiOutlineUserCircle />
                    </IconButton>About</NavLink>
                </li>
                <li>
                    <NavLink className="duration-500" to="/projects" onClick={() => setOpenMenu(false)}><IconButton color="#7D12FF" aria-label="Projects">
                        <IoListCircleOutline />
                    </IconButton>Projects</NavLink>
                </li>
                <li>
                    <NavLink className="duration-500" to="/contact" onClick={() => setOpenMenu(false)}><IconButton color="#7D12FF" aria-label="Contact">
                        <IoInformationCircleOutline />
                    </IconButton>Contact</NavLink>
                </li>
                <li>
                    <NavLink className="duration-500"><HStack>
                        {cv.length ? cv.map((updatedCV) => (
                            <Button className="primary-btn px-3" onClick={() => {downloadFileAtUrl(updatedCV.file.url)}}>CV/Resume</Button>
                        )) : <Button className="primary-btn px-3" onClick={() => {downloadFileAtUrl(PDF_FILE_URL)}}>CV/Resume</Button>}
                    </HStack></NavLink>
                </li>
            </ul>
        </nav>
    );
};