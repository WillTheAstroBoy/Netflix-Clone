import React from "react";
import { Footer } from "../components";

export function FooterContainer(){
    return (
        <Footer>
            <Footer.Text>Questions? Call 000-800-040-1843</Footer.Text>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link to="#">FAQ</Footer.Link>
                    <Footer.Link to="#">Investor Relations</Footer.Link>
                    <Footer.Link to="#">Privacy</Footer.Link>
                    <Footer.Link to="#">Speed Test</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link to="#">Help center</Footer.Link>
                    <Footer.Link to="#">jobs</Footer.Link>
                    <Footer.Link to="#">cookie preferences</Footer.Link>
                    <Footer.Link to="#">legal notices</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link to="#">account</Footer.Link>
                    <Footer.Link to="#">ways to watch</Footer.Link>
                    <Footer.Link to="#">corporate information</Footer.Link>
                    <Footer.Link to="#">netflix originals</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link to="#">media center</Footer.Link>
                    <Footer.Link to="#">terms of use</Footer.Link>
                    <Footer.Link to="#">contact us</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.SmallText>Netflix India</Footer.SmallText>
        </Footer>
    )
}