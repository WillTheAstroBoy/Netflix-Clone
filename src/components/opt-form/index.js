import React from "react";
import {Container, Input, Break, Btn, Text} from "./styles/opt-form";

export default function OptForm({children, ...restProps}){
     return <Container {...restProps}>{children}</Container>
}

OptForm.Text = function OptFormText({ children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

OptForm.Input = function OptFormInput({ ...restProps }){
    return <Input {...restProps} />
}

OptForm.Btn = function OptFormBtn({ children, ...restProps}){
    return <Btn {...restProps}>{children}</Btn>
}

OptForm.Break = function OptFormBreak({...restProps}){
    return <Break {...restProps} />
}



