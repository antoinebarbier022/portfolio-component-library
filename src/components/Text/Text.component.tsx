import React from "react";

type TextProps ={
    children: any,
    className?: string
};

function Text({ children, className }: TextProps) {
    return ( 
        <p className={` font-light text-justify ${className}`}>
            { children }
        </p> 
    );
}

export default Text;