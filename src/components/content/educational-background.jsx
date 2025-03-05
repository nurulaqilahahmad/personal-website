import React from "react";
import { Text, Timeline } from "@chakra-ui/react";
import { format } from 'date-fns';
import {
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineRoot,
    TimelineTitle,
} from "../ui/timeline"

function EducationalBackground({ educationalBackground }) {

    return (
        <div className="flex flex-col gap-10 primary-flex w-full justify-center">
            <TimelineRoot size="xl" variant="solid" className="gap-6">
                {educationalBackground.map((education, index) => (
                    <TimelineItem key={index} className="flex max-sm:flex-col ">
                        <TimelineConnector className="mr-6 w-[6rem] h-[6rem]" bg={{ base: "#2F0553" }}>
                            <div className="p-4 w-full">
                                <img src={education.institutionLogo.url} style={{ backgroundColor: 'transparent' }} />
                            </div>
                        </TimelineConnector>
                        <TimelineContent>
                            <div className="flex flex-col gap-6">
                                <Text className="text-wrap font-bold">{education.startDate ? format(new Date(education.startDate), 'MMM yyyy') : ''} - {education.endDate ? format(new Date(education.endDate), 'MMM yyyy') : 'Present'}</Text>
                                <div>
                                    <Text className="font-bold text-lg text-[#7D12FF]"><a href={education.link} className="link" target="_blank">{education.institutionName}</a></Text>
                                    <Text>{education.courseName}</Text>
                                </div>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </TimelineRoot>
        </div>
    )
}

export default EducationalBackground