import React from "react";
import { Text, Flex, useTooltip } from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip";
import { format } from 'date-fns';

function Certification({ certification }) {
    const tooltip = useTooltip();
    const tooltipOpen = () => tooltip.setOpen(!tooltip.open);

    return (
        <div className="flex flex-col gap-10 primary-flex w-full justify-center">
            <Flex wrap="wrap" className="flex-row gap-10 justify-center">
                {certification.map((cert, index) => (
                    <Tooltip className="duration-[0.4s]" value={tooltip} content={<Text className="p-4">Issued by: <span className="font-bold">{cert.organization}</span> <br/> Date of Achievement: <span className="font-bold">{format(new Date(cert.date), 'd MMMM yyyy')}</span></Text>} positioning={{ placement: "bottom-center" }} openDelay={100} closeDelay={100} contentProps={{ css: { "--tooltip-bg": "rgba(125, 18, 255, 0.4)", "color": "rgba(255, 255, 255, 0.9)" } }}>
                        <Flex className="sm:w-[30%] max-sm:w-[50%]">
                            <img src={cert.badge.url} alt="Certification badge" 
                                className="2xl:grayscale 2xl:hover:grayscale-0 duration-[0.4s]" 
                                style={{ width: '100%', backgroundColor: 'transparent' }}
                                onClick={tooltipOpen} />
                        </Flex>
                    </Tooltip>
                ))}
            </Flex>
        </div>
    )
}

export default Certification