import React, { useState } from "react";
import { Text, HStack, Stack, Table, IconButton } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ImArrowU2xlght2 } from "react-icons/im";
import projectPic from "../../image.png";
import { Link } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";
import {
    PaginationItems,
    PaginationPageText,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
} from "../ui/pagination";

function Task({ task }) {
    const isImage = ['gif', 'jpg', 'jpeg', 'png']; //you can add more
    const isVideo = ['mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'mp4'] // you can add more extention

    const videos = document.querySelectorAll('video');
    for (var i = 0; i < videos.length; i++) {
        videos[i].play();
    }

    // function getFileName(fileName) {
    //     console.log(fileName);
    //     console.log(fileName.split(".")[1]);
    // }

    return (
        <Table.Root size="lg" variant={"outline"}>
            <Table.Header className="bg-transparent">
                <Table.Row className="max-2xl:hidden">
                    <Table.ColumnHeader style={{ color: "white" }}>Result</Table.ColumnHeader>
                    <Table.ColumnHeader style={{ color: "white" }}>Explanation</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {task.map((t) => (
                    <Table.Row key={t.id} className="duration-[0.4s]">
                        <Table.Cell className="max-2xl:hidden">
                            {t.file ? isImage?.includes(t.file.fileName.split(".")[1]) && <img className="noBorderImg" alt="Task Image" src={t.file.url} style={{ zIndex: '1' }} /> : ''}
                            {t.file ? isVideo?.includes(t.file.fileName.split(".")[1]) && <video autoplay muted loop controls><source src={t.file.url} type={"video/" + t.file.fileName.split(".")[1]} />Your browser does not support the video tag.</video> : ''}
                            {t.link && <iframe src={t.link} width="420" height="315" title="Iframe for Project"></iframe>}
                        </Table.Cell>
                        <Table.Cell className="max-2xl:hidden">{t.explanation}</Table.Cell>
                        <Table.Cell className="2xl:hidden">
                            {t.file ? isImage?.includes(t.file.fileName.split(".")[1]) && <img className="noBorderImg" alt="Task Image" src={t.file.url} style={{ zIndex: '1' }} /> : ''}
                            {t.file ? isVideo?.includes(t.file.fileName.split(".")[1]) && <video autoplay muted loop controls><source src={t.file.url} type={"video/" + t.file.fileName.split(".")[1]} />Your browser does not support the video tag.</video> : ''}
                            {t.link && <iframe src={t.link} width="420" height="315" title="Iframe for Project"></iframe>}
                            <br />
                            {t.explanation}
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}

export default Task