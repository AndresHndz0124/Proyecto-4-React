import React from "react";
import Header from "./Header";
import Footer_Page from "./footer";
import Mainbooking from "../components/MainBooking";

function Booking() {
    return (
        <React.Fragment>
            <Header />
            <Mainbooking/>
            <Footer_Page />
        </React.Fragment>
    )
}
export default Booking;