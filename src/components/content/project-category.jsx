import React from "react";
import { Text } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";
import { Tabs } from "@chakra-ui/react"

function ProjectCategory({ projectCategory }) {
    const location = useLocation();
    const navigate = useNavigate();
    function goToProjCat(url, subSlug) {
        navigate(url, { state: { from: subSlug } });
    }

    if (location.pathname == '/') {
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

    else if (location.pathname == '/projects') {
        return (
            <Tabs.List className="flex flex-wrap borderColumn">
                <Tabs.Trigger value="all" asChild className="px-10 py-6 duration-[0.4s]" bg={{ base: "transparent", _hover:"#2F0553", _selected: "#2F0553" }}>
                    <Link unstyled href="#all">
                        All
                    </Link>
                </Tabs.Trigger>
                {projectCategory.map((projCat, index) => (
                    <Tabs.Trigger key={index} value={projCat.subSlug} asChild className="px-10 py-6 duration-[0.4s]" bg={{ base: "transparent", _hover:"#2F0553", _selected: "#2F0553" }}>
                        <Link unstyled href={"#" + projCat.subSlug} style={{ fontSize: '1rem' }}>
                            {/* {projCat.icon.html} */}
                            {projCat.name}
                        </Link>
                    </Tabs.Trigger>
                ))}
            </Tabs.List>
        )
    }
}

export default ProjectCategory