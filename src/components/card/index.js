import React, { useState, useContext } from "react";
import { FeatureContext } from "../../context/feature";
import { 
    Container,
    Group, 
    Title, 
    Entities, 
    Item, 
    Image, 
    Meta, 
    SubTitle, 
    Text,
    Feature,
    FeatureTitle,
    FeatureClose,
    FeatureText,
    Maturity,
    Content
} from "./style/card";

export default function Card({ children, ...restProps}){
    const [showFeature, setShowFeature ] = useState(false);
    const [itemFeature, setItemFeature ] = useState({});
    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps} >{children}</Container>
        </FeatureContext.Provider>
        
    )
}

Card.Group = function CardGroup({ children, ...restProps}){
    return (
        <Group {...restProps} >{children}</Group>
    )
}

Card.Title = function CardTitle({ children, ...restProps}){
    return (
        <Title {...restProps} >{children}</Title>
    )
}

Card.SubTitle = function CardSubTitle({ children, ...restProps}){
    return (
        <SubTitle {...restProps} >{children}</SubTitle>
    )
}

Card.Text = function CardText({ children, ...restProps}){
    return (
        <Text {...restProps} >{children}</Text>
    )
}

Card.Meta = function CardMeta({ children, ...restProps}){
    return (
        <Meta {...restProps} >{children}</Meta>
    )
}

Card.Entities = function CardEntities({ children, ...restProps}){
    return (
        <Entities {...restProps} >{children}</Entities>
    )
}

Card.Item = function CardItem({ item, children, ...restProps}){
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);
    return (
        <Item
            onClick={()=> {
                setItemFeature(item);
                setShowFeature(true);
            }}
            {...restProps} 
        >
            {children}
        </Item>
    )
}

Card.Image = function CardImage({src, ...restProps}){
    return (
        <Image src={src} {...restProps} />
    )
}

Card.Feature = function CardFeature({ children, category, ...restProps }){
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);
    return showFeature ? (
        <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} >
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={()=> setShowFeature(false)} >
                    <img src="/images/icons/close.png" alt="close" />
                </FeatureClose>
                <Group padding="0" margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemFeature.maturity} >{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0) + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>
                {children}
            </Content>
        </Feature>
    )  : null;
}

