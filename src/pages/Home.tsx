import { Heading, PlayControl, SoundControl } from "../components";
import bgImage from "../assets/images/bg-high-res.jpg";
import { selectSoundState } from "../features/sound/soundSlice";
import { useSelector } from "react-redux";
import * as React from "react";
export const Home = () => {
    const sound = useSelector(selectSoundState);

    return (
        <div
            className="min-h-screen bg-fixed bg-cover text-white pb-20"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <Heading />
            <div className="w-full text-center sm:pt-16 pt-10 px-8 font-semibold font-mono">
                <h1 className="uppercase sm:text-7xl text-6xl">
                    chill with me
                </h1>
                <p className="mt-3 sm:text-lg text-base">
                    Ambient sounds to wash away distraction.
                </p>
            </div>
            <PlayControl />
            <div className="flex flex-col sm:flex-row flex-wrap gap-24 px-28 justify-center mt-5">
                <SoundControl sound={sound.soundList[0]} />
                <SoundControl sound={sound.soundList[1]} />
                <SoundControl sound={sound.soundList[2]} />
                <SoundControl sound={sound.soundList[3]} />
                <SoundControl sound={sound.soundList[4]} />
            </div>
        </div>
    );
};
