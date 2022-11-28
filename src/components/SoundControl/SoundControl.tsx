import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CHANGE_SOUND_VOLUME,
    selectSoundState,
} from "../../features/sound/soundSlice";
import "./sound.css";
import icon from "../../assets/images/icon.png";

import { Sound } from "../../features/sound/soundSlice";

export const SoundControl = ({ sound }: Sound) => {
    const soundSlice = useSelector(selectSoundState);
    const dispatch = useDispatch();

    useEffect(() => {
        let ele: any = document.getElementById(sound.name);
        ele.volume = sound.volume * soundSlice.volume;
    }, [sound.volume, soundSlice.volume]);

    useEffect(() => {
        const ele: any = document.getElementById(sound.name);
        if (soundSlice.play) ele.play();
        else ele.pause();
    }, [soundSlice.play]);

    return (
        <div className="flex flex-col justify-center items-center gap-6">
            <div className="w-[100px] h-[100px] relative">
                <div
                    className="w-[100px] h-[100px] absolute"
                    style={{
                        backgroundImage: `url(${icon})`,
                        backgroundPosition: sound.iconPositionOutline,
                    }}
                ></div>
                <div
                    className="w-[100px] h-[100px] absolute"
                    style={{
                        backgroundImage: `url(${icon})`,
                        backgroundPosition: sound.iconPositionFill,
                        opacity: sound.volume,
                    }}
                ></div>
            </div>
            <audio loop preload="auto" id={sound.name}>
                <source src={sound.src} type="audio/mpeg" />
            </audio>
            <div className="font-semibold text-lg sm:text-xl">{sound.name}</div>
            <input
                className="sound-volume"
                step={0.01}
                type="range"
                min={0}
                max={1}
                value={sound.volume}
                onChange={(e) =>
                    dispatch(
                        CHANGE_SOUND_VOLUME({
                            id: sound.id,
                            volume: Number(e.target.value),
                        })
                    )
                }
            />
        </div>
    );
};
