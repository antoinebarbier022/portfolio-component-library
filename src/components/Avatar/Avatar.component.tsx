import classNames from "classnames";
import React from "react";

type AvatarProps = {
    variant: "square" | "rounded";
    size?: string,
    className?: string
};

function Avatar({ variant = "square", size, className }: AvatarProps) {
    return ( <>
        <figure className={className}>
            <img src={"https://picsum.photos/seed/picsum/200"} 
                alt={"data.image.alt"} 
                className={classNames(`w-[200px] aspect-square mx-auto  border-4 border-white/10 ${size}`,{
                    'rounded-lg': variant === "square",
                    'rounded-full': variant === "rounded",

                }
                )}/>
        </figure>
    </> );
}

export default Avatar;