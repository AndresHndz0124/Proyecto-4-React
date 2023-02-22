import React from "react";
import Header from "./Header";
import Footer_Page from "./footer";
import ContactForm from "../components/forms";
import Main_prop from "../components/Main";

function Ourmenu() {
    return (
        <React.Fragment>
            <Header />
            <Main_prop/>
            <Footer_Page />
        </React.Fragment>
    )
}
export default Ourmenu;
