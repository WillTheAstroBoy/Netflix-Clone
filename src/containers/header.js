import React from "react";
import {Header} from "../components";

export function HeaderContainer({children}){
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to="/" src="./images/misc/logo.svg" alt="netflix-logo" />
                <Header.ButtonLink to="/signin">Sign in</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}