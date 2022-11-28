import * as React from "react";

interface ButtonProps {
    title: string;
    onClick: (value: any) => void;
    className?: string;
}

export const Button = ({ title, onClick, className }: ButtonProps) => {
    return (
        <div
            className={`${className} text-center transition-colors duration-300 hover:bg-white hover:text-black hover:cursor-pointer px-3.5 py-1 text-xs uppercase border-2 border-white text-white rounded-[4px]`}
            onClick={onClick}
        >
            {title}
        </div>
    );
};
