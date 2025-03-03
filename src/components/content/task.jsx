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
            <Table.Header>
                <Table.Row className="max-2xl:hidden">
                    <Table.ColumnHeader>Result</Table.ColumnHeader>
                    <Table.ColumnHeader>Explanation</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body className="">
                {task.map((t) => (
                    <Table.Row key={t.id} className="duration-[0.4s]">
                        <Table.Cell className="max-2xl:hidden">
                            {isImage?.includes(t.file.fileName.split(".")[1]) && <img className="noBorderImg" alt="Task Image" src={t.file.url} style={{ zIndex: '1' }} />}
                            {isVideo?.includes(t.file.fileName.split(".")[1]) && <video autoplay muted loop controls><source src={t.file.url} type={"video/" + t.file.fileName.split(".")[1]} />Your browser does not support the video tag.</video>}
                        </Table.Cell>
                        <Table.Cell className="max-2xl:hidden">{t.explanation}</Table.Cell>
                        <Table.Cell className="2xl:hidden">
                            {isImage?.includes(t.file.fileName.split(".")[1]) && <img className="noBorderImg" alt="Task Image" src={t.file.url} style={{ zIndex: '1' }} />}
                            {isVideo?.includes(t.file.fileName.split(".")[1]) && <video autoplay muted loop controls><source src={t.file.url} type={"video/" + t.file.fileName.split(".")[1]} />Your browser does not support the video tag.</video>}
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