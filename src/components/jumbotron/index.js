import React from "react";
import { Item, Inner, Container, Pan, Title, SubTitle, Image} from "./style/jumbotron";

export default function Jumbotron({direction, children, ...restProps}){
    return (
        <Item>
            <Inner direction={direction} {...restProps} >{children}</Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}){
    return <Container {...restProps} >{children}</Container>
}

Jumbotron.Pan = function JumbotronPan({ children, ...restProps}){
    return <Pan  {...restProps}>{children}</Pan>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}){
    return <Title {...restProps} >{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}){
    return <SubTitle {...restProps} >{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage({ src, ...restProps }){
    return <Image src={src} {...restProps} />
}