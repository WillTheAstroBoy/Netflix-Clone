import React from "react";
import {Container, Row, Column, Break, Text, Link, SmallText} from "./style/footer";


export default function Footer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Footer.Row = function FooterRow({children, ...restProps}){
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...restProps}){
    return <Column {...restProps}>{children}</Column>
}

Footer.Text = function FooterText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Footer.Link = function FooterLink({ to, children, ...restProps}){
    return <Link to={to} {...restProps}>{children}</Link>
}

Footer.SmallText = function FooterSmallText({children, ...restProps}){
    return <SmallText {...restProps}>{children}</SmallText>
}

Footer.Break = function FooterBreak({children, ...restProps}){
    return <Break {...restProps}>{children}</Break>
}