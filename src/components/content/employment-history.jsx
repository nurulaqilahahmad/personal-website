import React from "react";
import { Text, HStack } from "@chakra-ui/react";
import { format } from 'date-fns';
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "../ui/accordion"

function EmploymentHistory({ employmentHistory }) {
    return (
        <div className="flex flex-col gap-10 primary-flex w-full">
            <AccordionRoot collapsible variant="subtle" colorPalette="purple" defaultValue={["Millennium Radius"]}>
                {employmentHistory.map((employment, index) => (
                    <AccordionItem value={employment.companyName} key={index} id={employment.id} className="my-2 px-4 py-5 duration-[0.4s] hover:bg-[#2F0553]">
                        <AccordionItemTrigger className="px-2 duration-[0.4s]">
                            <Text className="text-wrap font-bold">
                                <span className="text-xl">{employment.position} @ <a href={employment.link} className="link">{employment.companyName}</a></span>
                                <br />
                                <span className="text-lg">{employment.startDate ? format(new Date(employment.startDate), 'MMMM yyyy') : ''} - {employment.endDate ? format(new Date(employment.endDate), 'MMMM yyyy') : 'Present'}</span>
                            </Text>
                        </AccordionItemTrigger>
                        <AccordionItemContent className="duration-[0.4s]">
                            <ul className="list-marker">
                                {employment.workDescription.map((workDesc, index) => (
                                    <li key={index}>{workDesc.explanation}</li>
                                ))}
                            </ul>
                        </AccordionItemContent>
                    </AccordionItem>
                ))}
            </AccordionRoot>
        </div>
    )
}

export default EmploymentHistory