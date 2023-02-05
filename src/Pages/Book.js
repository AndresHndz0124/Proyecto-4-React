import React from "react";
import Header from "./Header";
import Footer_Page from "./footer";
import Main_booking from "../components/Main_booking";

function Booking() {
    return (
        <React.Fragment>
            <Header />
            <Main_booking/>
            <Footer_Page />
        </React.Fragment>
    )
}
export default Booking;