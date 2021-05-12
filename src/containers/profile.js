import React from "react";
import { Profile, Header } from "../components";

export function SelectProfileContainer({user, setProfile,  ...restProps}){
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo 
                        to="/" 
                        src="./images/misc/logo.svg" 
                        alt="netflix logo" 
                    />
                </Header.Frame>
            </Header>
            <Profile>
                <Profile.Title>Who's watching?</Profile.Title>
                <Profile.List>
                    <Profile.User onClick={()=> setProfile(user)} >
                        <Profile.Picture src={user.photoURL} />
                        <Profile.Name>{user.displayName}</Profile.Name>
                    </Profile.User>
                </Profile.List>
            </Profile>
        </>
    )
}