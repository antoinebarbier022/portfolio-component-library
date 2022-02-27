import React from "react";
import { ReactNode } from "react";


type CardProps = {
    background?: string,
    opacity?: string,
    children: ReactNode,
    className?: string
};

function Card({background = "bg-black", opacity = "bg-opacity-30", children, className }: CardProps) {
    return (<div className={`container w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%] m-auto ${background} ${opacity} rounded-2xl px-6 sm:px-10 pt-6 pb-4 shadow-xl shadow-black/5 ${className}`}>
        { children }
    </div> );
}

export default Card;