import React from 'react';

type LinkCardProps = {
    link?: string,
    name?: string,
    className?: string,
    children?:any,
};

function LinkCard( { name, link, className, children, } : LinkCardProps) {
    return (<a className={`flex col-span-full sm:col-span-1 items-center justify-center text-center min-w-fit min-h-[60px] px-5 rounded-lg bg-black/[0.08] hover:bg-black/[0.15] transition ease-in-out delay-[80] ${className}`} 
            href={link}
            title={name}
            rel="noopener noreferrer"
            target="_blank"
            >
        { children }
        </a>);
}

export default LinkCard;