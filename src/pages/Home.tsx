import { Heading } from "../components";
import bgImage from "../assets/images/bg-high-res.jpg";
export const Home = () => {
    return (
        <div
            className="min-h-screen bg-fixed bg-cover"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <Heading />
        </div>
    );
};
