import React from "react";
import '../index.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Text, HStack, Heading, For, Stack, Table, IconButton } from "@chakra-ui/react"
import projectPic from "../image.png";
import { LuExternalLink } from "react-icons/lu";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";


export const Archive = () => {
    const items = [
        { id: 1, name: "Medical Supply System", technology: "HTML", category: "Web", price: 999.99 },
        { id: 2, name: "UTM Library Room Booking", technology: "Dart", category: "Mobile", price: 49.99 },
        { id: 3, name: "Gem Collector", technology: "Unity3D", category: "Game", price: 150.0 },
        { id: 4, name: "QLASSIC VR Training", technology: "C#", category: "VR/AR", price: 799.99 },
        { id: 5, name: "icapital.my Website Design", technology: "Figma", category: "Design", price: 199.99 },
    ];

    const location = useLocation();     // does not rely on window history
    const canGoBack = location.key !== 'default';
    const navigate = useNavigate();
    function goBack() {
        if (canGoBack) {
            navigate(-1);
         } else {
            navigate('/', { replace: true });
         }
    }

    return (
        <div className="indent">
            <title>Archive – Nurul Aqilah Ahmad</title>

            <section className="flex flex-col justify-center items-center text-left lg:py-10 gap-10">
                <div className="flex flex-col w-[80%]">

                    <div>
                        <Text className="text-left text-[#7D12FF] hover:font-bold hover:cursor-pointer duration-[0.4s]" onClick={()=>goBack()} style={{width: 'fit-content'}}>{"< Back"}</Text>
                        <Text className="heading-1 text-left">All Projects</Text>
                    </div>

                    <Table.Root size="lg" showColumnBorder>
                        <Table.Header>
                            <Table.Row className="bg-transparent">
                                <Table.ColumnHeader></Table.ColumnHeader>
                                <Table.ColumnHeader>Project</Table.ColumnHeader>
                                <Table.ColumnHeader>Technology</Table.ColumnHeader>
                                <Table.ColumnHeader>Category</Table.ColumnHeader>
                                <Table.ColumnHeader>Link</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {items.map((item) => (
                                <Table.Row key={item.id} className="borderColumn bg-transparent">
                                    <Table.Cell><img src={projectPic} className="noBorderImg" style={{ width: '200px', height: '113px', zIndex: '1' }}></img></Table.Cell>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell><Text className="text-selector ">{item.technology}</Text></Table.Cell>
                                    <Table.Cell>{item.category}</Table.Cell>
                                    <Table.Cell>
                                        <NavLink className="duration-500" to="/projects"><IconButton color="#7D12FF" aria-label="Projects">
                                            <LuExternalLink />
                                        </IconButton></NavLink>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </div>
            </section>

        </div>
    );
}