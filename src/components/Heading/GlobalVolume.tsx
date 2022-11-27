import { useEffect, useRef, useState } from "react";
import {
    CHANGE_GLOBAL_VOLUME,
    MUTE_SOUND,
    selectSoundState,
} from "../../features/sound/soundSlice";
import { Button } from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import "./heading.css";

export const GlobalVolume = () => {
    const volume = useSelector(selectSoundState).volume;
    const dispatch = useDispatch();
    const prevVolume = useRef(0);

    const handleClick = () => {
        if (volume > 0) {
            prevVolume.current = volume;
            dispatch(MUTE_SOUND());
        } else dispatch(CHANGE_GLOBAL_VOLUME(prevVolume.current));
    };

    return (
        <div className="hidden sm:flex sm:gap-3 sm:items-center">
            <div className="flex">
                <input
                    className="heading-volume"
                    step={0.01}
                    type="range"
                    min={0}
                    max={1}
                    value={volume}
                    onChange={(e) =>
                        dispatch(CHANGE_GLOBAL_VOLUME(Number(e.target.value)))
                    }
                />
            </div>
            <div className="flex">
                <Button
                    className="w-20"
                    title={volume === 0 ? "unmute" : "mute"}
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};
