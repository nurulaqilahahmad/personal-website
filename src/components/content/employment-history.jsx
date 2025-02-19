import React from "react";
import { Text, HStack } from "@chakra-ui/react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

function EmploymentHistory({ employmentHistory }) {
    return (
        <div className="flex flex-col gap-10 primary-flex w-full">
            {employmentHistory.map((employment, index) => (
                <div className="flex flex-col px-5 gap-4">
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-col gap-2">
                            <Text className="text-xl text-wrap font-bold">{employment.position} @ <a href={employment.link} className="link">{employment.companyName}</a></Text>
                            <Text className="text-nowrap">June 2024 - Present</Text>
                        </div>
                        <VscTriangleUp className="icon-link" />
                    </div>
                    <article className="work-description">
                        <ul className="list-marker">
                            <li>Built responsive and interactive webpages using HTML, Tailwind CSS, TypeScript, and Angular and utilized JSON responses from APIs using Postman to update the webpage content in real-time, improving user interaction and experience.</li>
                            <li>Managed and resolved technical helpdesk tickets to ensure that overall downtime for users is reduced.</li>
                        </ul>
                    </article>
                </div>
            ))}
            <div className="flex flex-col px-5 gap-4">
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-col gap-2">
                        <Text className="text-xl text-wrap font-bold">Software Developer @ <a href="https://www.milradius.com.my/" className="link">Millennium Radius</a></Text>
                        <Text className="text-nowrap">June 2024 - Present</Text>
                    </div>
                    <VscTriangleUp className="icon-link" />
                </div>
                <article className="work-description">
                    <ul className="list-marker">
                        <li>Built responsive and interactive webpages using HTML, Tailwind CSS, TypeScript, and Angular and utilized JSON responses from APIs using Postman to update the webpage content in real-time, improving user interaction and experience.</li>
                        <li>Managed and resolved technical helpdesk tickets to ensure that overall downtime for users is reduced.</li>
                    </ul>
                </article>
            </div>
            <div className="flex flex-col px-5 gap-4">
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-col gap-2">
                        <Text className="text-xl text-wrap font-bold">Website Developer @ <span className="link">Freelance</span></Text>
                        <Text className="text-nowrap">May 2024 - Present</Text>
                    </div>
                    <VscTriangleDown className="icon-link" />
                </div>
                <article className="work-description">
                    <ul className="list-marker">
                        <li>Create mockups and design prototypes using Figma to test the website concept according to the requirements and needs from stakeholders.</li>
                        <li>Build websites using a hosting provider, Content Management System (CMS) and eCommerce to manage the website architecture, content and database.</li>
                    </ul>
                </article>
            </div>
            <div className="flex flex-col px-5 gap-4">
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-col gap-2">
                        <Text className="text-xl text-wrap font-bold">Web Designer @ <a href="https://www.zwayit.biz/index.html" className="link">Z Way IT</a></Text>
                        <Text className="text-nowrap">September 2023 - May 2024</Text>
                    </div>
                    <VscTriangleDown className="icon-link" />
                </div>
                <article className="work-description">
                    <ul className="list-marker">
                        <li>Designed an interactive prototype using Figma to revamp the presentation of in house website; Implemented a brand-new design for the website and improved the web architecture that are based on the requirements.</li>
                        <li>Translated UI/UX design from Figma to clean, efficient and well-documented code to enhance web layout.</li>
                        <li>Provided ongoing website maintenance and updates using Astro, Wordpress, AWS Amazon S3 and Strapi to maintain websites with time-sensitive information. </li>
                    </ul>
                </article>
            </div>
            <div className="flex flex-col px-5 gap-4">
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-col gap-2">
                        <Text className="text-xl text-wrap font-bold">Web Developer Intern @ <a href="https://www.cidbholdings.com.my/" className="link">CIDB Holdings</a></Text>
                        <Text className="text-nowrap">September 2023 - May 2024</Text>
                    </div>
                    <VscTriangleDown className="icon-link" />
                </div>
                <article className="work-description">
                    <ul className="list-marker">
                        <li>Designed an interactive prototype using Figma to revamp the presentation of in house website; Implemented a brand-new design for the website and improved the web architecture that are based on the requirements.</li>
                        <li>Translated UI/UX design from Figma to clean, efficient and well-documented code to enhance web layout.</li>
                        <li>Provided ongoing website maintenance and updates using Astro, Wordpress, AWS Amazon S3 and Strapi to maintain websites with time-sensitive information. </li>
                    </ul>
                </article>
            </div>
        </div>
    )
}

export default EmploymentHistory