import { useSelector, useDispatch } from "react-redux";
import { PLAY_SOUND, selectSoundState } from "../../features/sound/soundSlice";
import "./style.css";
export const PlayControl = () => {
    const dispatch = useDispatch();
    const sound = useSelector(selectSoundState);

    return (
        <div className="flex justify-between items-center py-20">
            <div></div>
            <div
                className={`${
                    sound.play ? "play" : "stop"
                } hover:opacity-90 pb hover:cursor-pointer w-20 h-20`}
                onClick={() => dispatch(PLAY_SOUND())}
            ></div>
            <div></div>
        </div>
    );
};
