import classNames from "classnames";
import React from "react";

type AvatarProps = {
    variant?: "square" | "rounded" | "custom";
    size?: string,
    className?: string
};

function Avatar({ variant = "square", size, className }: AvatarProps) {
    return ( <>
        <figure className={className}>
            <img src={"https://picsum.photos/seed/picsum/400/300"} 
                alt={"data.image.alt"} 
                className={classNames(`min-w-[200px] h-[200px] mx-auto border-4 border-white/10 ${size}`,{
                    'rounded-xl aspect-square': variant === "square",
                    'rounded-full aspect-square': variant === "rounded",
                    'rounded-xl ': variant === "custom",
                }
                )}/>
        </figure>
    </> );
}

export default Avatar;