import React from "react";
import { Jumbotron } from "../components";
import faqsData from "../fixtures/jumbo.json";

export function JumbotronContainer(){

    const jumbotronElementsHtml = faqsData.map(item =>(
        <Jumbotron direction={item.direction} key={item.id} >
            <Jumbotron.Pan>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pan>
            <Jumbotron.Pan>
                <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pan>
        </Jumbotron>
    ))
    
    console.log(jumbotronElementsHtml)

    return (
        <Jumbotron.Container>
            {jumbotronElementsHtml}
        </Jumbotron.Container>
    )
}