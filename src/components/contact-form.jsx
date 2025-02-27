"use client"
import React, { useRef } from "react";
import './nav.css';
import '../index.css';
import { Button } from "./ui/button"
import { Textarea, Input, Field, FieldErrorText } from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import { Toaster, toaster } from "../components/ui/toaster";

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                emailjs
                    .sendForm('contact_service', 'contact_form', form.current, {
                        publicKey: 'BpkhDzjzQCIaClztr',
                    })
                    .then(
                        () => {
                            resolve();
                            console.log('SUCCESS!');
                            setTimeout(() => {document.getElementById('contact_form').reset();}, 1000);
                        },
                        (error) => {
                            console.log('FAILED...', error.text);
                        },
                    );
            }, 4000)
        });

        toaster.promise(promise, {
            success: {
                title: "Message sent!",
                description: "It has been sent to my inbox.",
            },
            error: {
                title: "Message failed!",
                description: "Something wrong.",
            },
            loading: { title: "Sending...", description: "Please wait" },
        })
    };

    return (
        <form ref={form} onSubmit={sendEmail} id="contact_form">
            <Field.Root colorPalette="purple" className="mt-6 gap-20" >
                <Toaster />
                <Input type="hidden" name="contact_number" value="697483" />
                <div className="w-full">
                    <Field.Label className="px-2">Name</Field.Label>
                    <Input type="text" required placeholder="Enter your name" id="user_name" name="user_name" variant="flushed" className="p-2 h-[3rem] bg-transparent border-b-[0.1rem] border-b-[#7D12FF]" />
                    <FieldErrorText className="px-2">This is a required field!</FieldErrorText>
                </div>
                <div className="w-full">
                    <Field.Label className="px-2">Email</Field.Label>
                    <Input type="email" required placeholder="Enter your email" id="user_email" name="user_email" variant="flushed" className="p-2 h-[3rem] bg-transparent border-b-[0.1rem] border-b-[#7D12FF]" />
                    <FieldErrorText className="px-2">This is a required field!</FieldErrorText>
                </div>
                <div className="w-full">
                    <Field.Label className="px-2">Subject</Field.Label>
                    <Input type="text" required placeholder="Enter the subject" id="subject" name="subject" variant="flushed" className="p-2 h-[3rem] bg-transparent border-b-[0.1rem] border-b-[#7D12FF]" />
                    <FieldErrorText className="px-2">This is a required field!</FieldErrorText>
                </div>
                <div className="w-full">
                    <Field.Label className="px-2">Message</Field.Label>
                    <Textarea required placeholder="Enter your message" id="message" name="message" resize="vertical" autoresize minH="10lh" variant="flushed" className="p-2 h-[3rem] bg-transparent border-b-[0.1rem] border-b-[#7D12FF]" />
                    <FieldErrorText className="px-2">This is a required field!</FieldErrorText>
                </div>
                <div className="flex justify-center">
                    <Input type="submit" className="primary-btn px-3" value="Send" />
                </div>
            </Field.Root>
        </form>
    );
};