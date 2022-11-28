import * as React from "react";
import { Navbar } from "../Navbar/Navbar";
import { GlobalVolume } from "./GlobalVolume";

export const Heading = () => {
    return (
        <div className="bg-black/30 h-12 flex justify-center items-center sm:justify-between sm:px-5">
            <GlobalVolume />
            <Navbar />
        </div>
    );
};
