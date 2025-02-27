import React from "react";
import { Text, HStack } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";

function ProjectCategory({ projectCategory }) {
    const location = useLocation();
    const navigate = useNavigate();
    function goToProjCat(url, subSlug) {
        navigate(url, { state: { from: subSlug } });
    }

    return (
        <div className="flex lg:flex-row flex-col gap-10 primary-flex w-full flex-wrap">
            {projectCategory.map((projCat, index) => (
                <div key={index} id={projCat.id} className="flex flex-col flex-box-primary gap-10 hover:scale-110 duration-[0.4s] md:min-h-96 w-full primary-hover" style={{ flex: '5%' }}>
                    <Text className="text-xl font-bold"><span className="text-[#7D12FF]">{String(index + 1).padStart(2, '0')}. </span>{projCat.name}</Text>
                    <Text className="flex grow">{projCat.description}</Text>
                    <div className="flex justify-end">
                        <Button className="primary-btn px-4 py-4" onClick={() => goToProjCat('/projects', projCat.subSlug)} ><ImArrowUpRight2 /></Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCategory