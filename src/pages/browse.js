import React from "react";
import { BrowseContainer } from "../containers/browse.js";
import useContent from "../hooks/use-content";
import selectionMap from "../utils/selection-map.js";


export default function Browse(){
    const {films} = useContent('films');
    const {series} = useContent('series');
    const slides = selectionMap({ films, series });
    return (
        <BrowseContainer slides={slides} />
    )
}