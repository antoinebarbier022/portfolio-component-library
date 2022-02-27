import React from "react";

type TitleProps ={
    children: string,
    className?: string
};

function Title({ children, className }: TitleProps) {
    return ( 
        <h1 className={`text-2xl font-bold uppercase ${className}`}>
            { children }
        </h1> 
    );
}

export default Title;