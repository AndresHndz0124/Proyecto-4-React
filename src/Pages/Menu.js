import React from "react";
import Header from "./Header";
import FooterPage from "./footer";
import ContactForm from "../components/forms";
import Main_prop from "../components/Main";

function Ourmenu() {
    return (
        <React.Fragment>
            <Header />
            <Main_prop/>
            <FooterPage />
        </React.Fragment>
    )
}
export default Ourmenu;
