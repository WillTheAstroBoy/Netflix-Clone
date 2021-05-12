import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";



export function FaqsContainer(){

    const accordionItemsHtml = faqsData.map((item, index) =>(
        <Accordion.Item key={item.id}>
            <Accordion.Header  >{item.header}</Accordion.Header>
            <Accordion.Body >{item.body}</Accordion.Body>
        </Accordion.Item>
    ))
    return (
            < Accordion>
                <Accordion.Title>Frequently Asked Questions</Accordion.Title>
                {accordionItemsHtml}
                <OptForm>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    <OptForm.Break />
                    <OptForm.Input />
                    <OptForm.Btn>try it now</OptForm.Btn>
                </OptForm>
            </Accordion> 
    )
}