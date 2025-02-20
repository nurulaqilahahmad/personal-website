import React from "react";
import { Text, HStack } from "@chakra-ui/react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { format } from 'date-fns';
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "../ui/accordion"
import { isTemplateExpression } from "typescript";

function EmploymentHistory({ employmentHistory }) {
    return (
        <div className="flex flex-col gap-10 primary-flex w-full">
            <AccordionRoot collapsible variant="subtle" colorPalette="purple" defaultValue={["Millennium Radius"]}>
                {employmentHistory.map((employment, index) => (
                    <AccordionItem value={employment.companyName} key={index} id={employment.id} className="px-4 pt-5 pb-3">
                        <AccordionItemTrigger className="px-2">
                            <Text className="text-wrap font-bold">
                                <span className="text-xl">{employment.position} @ <a href={employment.link} className="link">{employment.companyName}</a></span>
                                <br />
                                <span className="text-lg">{employment.startDate ? format(new Date(employment.startDate), 'MMMM yyyy') : ''} - {employment.endDate ? format(new Date(employment.endDate), 'MMMM yyyy') : 'Present'}</span>
                            </Text>
                        </AccordionItemTrigger>
                        <AccordionItemContent>
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