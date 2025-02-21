import React from "react";
import { Text, HStack } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";

function ProjectCategory({ projectCategory }) {
    return (
        <div className="flex lg:flex-row flex-col gap-10 primary-flex w-full flex-wrap">
            {projectCategory.map((projCat, index) => (
                <div key={index} id={projCat.id} className="flex flex-col flex-box-primary gap-10 hover:scale-110 duration-[0.4s] md:min-h-96 w-full primary-hover" style={{ flex: '5%' }}>
                    <Text className="text-xl font-bold"><span className="text-[#7D12FF]">{String(index+1).padStart(2, '0')}. </span>{projCat.name}</Text>
                    <Text className="flex grow">{projCat.description}</Text>
                    <div className="flex justify-end">
                        <NavLink className="duration-500" to={"/projects#"+projCat.subSlug} style={{ display: 'inline-block', width: 'fit-content' }}><HStack>
                            <Button className="primary-btn px-4 py-4"><ImArrowUpRight2 /></Button>
                        </HStack></NavLink>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCategory