import React from "react";
import '../index.css';
import { Text, HStack } from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { HiInboxIn, HiOutlineLocationMarker, HiOutlineMail, HiOutlineUsers } from "react-icons/hi";
import { ContactForm } from "../components/contact-form";

export const Contact = () => {
    const [title] = useTypewriter({
        words: ['Contact Details', 'Get In Touch', 'Let\'s Connect'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    const animatedSections = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animActive");
                } else {
                    entry.target.classList.remove("animActive");
                }
            });
        },
        { threshold: 0.1 }
    );

    animatedSections.forEach((section) => {
        observer.observe(section);
    });

    return (
        <div className="indent">

            <title>Contact | Nurul Aqilah Ahmad</title>

            <Text className="title">{title}<Cursor cursorColor="#7D12FF" /></Text>

            <section className="flex flex-col justify-center items-center text-left pt-10 pb-[5.4rem] gap-10 animate">
                <div className="flex lg:flex-row flex-col gap-10 w-[90%] 2xl:w-[60%]">
                    {/* Contact Form */}
                    <div className="flex flex-col gap-10 primary-flex w-full flex-wrap">
                        <div className="flex flex-col flex-box-primary gap-10 duration-[0.4s] md:min-h-fit p-10 w-full" style={{ flex: '5%' }}>
                            <HiInboxIn className="text-[#7D12FF] text-5xl" />
                            <ContactForm />
                        </div>
                    </div>
                    {/* Additional Details */}
                    <div className="flex flex-col gap-10 primary-flex w-full flex-wrap">
                        <div className="flex flex-col flex-box-primary gap-10 hover:scale-110 duration-[0.4s] md:min-h-fit p-10 w-full primary-hover" style={{ flex: '5%' }}>
                            <HiOutlineLocationMarker className="text-[#7D12FF] text-5xl" />
                            <Text className="">I am based in Sungai Buloh, Selangor.</Text>
                        </div>
                        <div className="flex flex-col flex-box-primary gap-10 hover:scale-110 duration-[0.4s] md:min-h-fit p-10 w-full primary-hover" style={{ flex: '5%' }}>
                            <HiOutlineMail className="text-[#7D12FF] text-5xl" />
                            <Text className="">Advices and motivations are welcomed.</Text>
                            <Text className="">Email me at <a href="mailto:nrlaqilahahmd@gmail.com" className="link">nrlaqilahahmd@gmail.com</a>.</Text>
                        </div>
                        <div className="flex flex-col flex-box-primary gap-10 hover:scale-110 duration-[0.4s] md:min-h-fit p-10 w-full primary-hover" style={{ flex: '5%' }}>
                            <HiOutlineUsers className="text-[#7D12FF] text-5xl" />
                            <Text className="">Let's Connect through my socials:</Text>
                            <Text className=""><a href="https://www.linkedin.com/in/nurul-aqilah-ahmad-604b90216/" target="_blank" className="link">LinkedIn</a></Text>
                            <Text className=""><a href="https://github.com/nurulaqilahahmad" target="_blank" className="link">GitHub</a></Text>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}