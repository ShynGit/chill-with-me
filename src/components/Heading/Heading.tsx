import { Navbar } from "../Navbar/Navbar";
import { WebVolume } from "./WebVolume";

export const Heading = () => {
    return (
        <div className="bg-black/30 h-12 flex justify-center items-center sm:justify-between sm:px-5">
            <WebVolume />
            <Navbar />
        </div>
    );
};
