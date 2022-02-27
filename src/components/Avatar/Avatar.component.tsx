import classNames from "classnames";
import React from "react";

type AvatarProps = {
    src: any,
    alt?: string,
    variant?: "square" | "rounded" | "custom";
    size?: string,
    className?: string
};

function Avatar({ src, alt= "avatar", variant = "square", size, className }: AvatarProps) {
    return ( <>
        <figure className={className}>
            <img src={src} 
                alt={alt} 
                className={classNames(`avatareheheh min-w-[200px] h-[200px] mx-auto border-4 border-white/10 ${size}`,{
                    'rounded-xl aspect-square': variant === "square",
                    'rounded-full aspect-square': variant === "rounded",
                    'rounded-xl ': variant === "custom",
                }
                )}/>
        </figure>
    </> );
}

export default Avatar;