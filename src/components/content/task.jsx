import React, { useState } from "react";
import { Text, HStack, Stack, Table, IconButton } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";
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

    // function getFileName(fileName) {
    //     console.log(fileName);
    //     console.log(fileName.split(".")[1]);
    // }

    return (
        <Table.Root size="lg" variant={"outline"}>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader>Result</Table.ColumnHeader>
                    <Table.ColumnHeader>Explanation</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {task.map((t) => (
                    <Table.Row key={t.id} className="duration-[0.4s]">
                        <Table.Cell>
                            {isImage?.includes(t.file.fileName.split(".")[1]) && <img className="noBorderImg" alt="Task Image" src={t.file.url} style={{ zIndex: '1'}} /> }
                            {isVideo?.includes(t.file.fileName.split(".")[1]) && <video autoplay style={{ zIndex: '1'}}><source src={t.file.url}  />Your browser does not support the video tag.</video> }
                        </Table.Cell>
                        <Table.Cell>{t.explanation}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}

export default Task