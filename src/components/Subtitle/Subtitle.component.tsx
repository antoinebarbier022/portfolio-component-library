import React from "react";

type SubtitleProps ={
    children: string,
    className?: string
};

function Subtitle({ children, className }: SubtitleProps) {
    return ( 
        <h2 className={`text-md font-mono ${className}`}>
        { children }
    </h2> 
    );
}

export default Subtitle;