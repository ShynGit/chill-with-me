import { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";

export const WebVolume = () => {
    const [volume, setVolume] = useState(50);
    const prevVolume = useRef(0);

    const handleClick = () => {
        if (volume > 0) {
            prevVolume.current = volume;
            setVolume(0);
        } else setVolume(prevVolume.current);
    };

    return (
        <div className="hidden sm:flex sm:gap-3 sm:items-center">
            <div className="">
                <input
                    type="range"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
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
