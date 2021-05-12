import React from "react";
import { 
    Container, 
    Frame, 
    Title, 
    Input, 
    Button, 
    SmallText, 
    Text, 
    Link,
    Error
 } from "./style/form";

 export default function Form({children, ...restProps}){
     return (
         <Container {...restProps} >{children}</Container>
     )
 }

 Form.Frame = function FormFrame({children, ...restProps}){
    return (
        <Frame {...restProps}>{children}</Frame>
    )
}

 Form.Title = function FormTitle({children, ...restProps}){
     return (
         <Title {...restProps}>{children}</Title>
     )
 }

 Form.Input = function FormInput({children, ...restProps}){
    return (
        <Input {...restProps}>{children}</Input>
    )
}

Form.Button = function FormButton({children, ...restProps}){
    return (
        <Button {...restProps}>{children}</Button>
    )
}

Form.SmallText = function FormSmallText({children, ...restProps}){
    return (
        <SmallText {...restProps}>{children}</SmallText>
    )
}

Form.Text = function FormText({children, ...restProps}){
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Form.Error = function FormError({children, ...restProps}){
    return <Error {...restProps} >{children}</Error>
}

Form.Link = function FormLink({ to, children, ...restProps}){
    return (
        <Link to={to} {...restProps}>{children}</Link>
    )
}