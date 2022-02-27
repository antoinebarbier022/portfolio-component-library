import classNames from "classnames";
import React from "react";

type FooterProps = {
    copyright?: string,
    author?: boolean,
    children?: any,
    className?: string
};

function Footer({ copyright, author = true, children, className }: FooterProps) {
    return ( 
        <footer className={`flex flex-col ${className}`}>
            { children }
            <div id="copyright" className={`flex flex-col sm:flex-row gap-1 justify-center align-center text-center ${className}`} >
                
                <div className={classNames({'hidden': !copyright})}>
                    <span className={`text-center text-opacity-80`}>{ copyright } © {new Date().getFullYear()} </span>
                    <span className="hidden sm:visible">-</span>
                </div>
                <span className={classNames({'hidden': !author})}>
                    Made with 🚀 by
                    {" "} 
                    <a  href="http://pro.antoinebarbier.fr" 
                        target="_blank" 
                        rel='noopener noreferrer' 
                        className={` font-medium `}>
                            @An_toine
                    </a> 
                </span>
            </div>
      </footer>
    );
}

export default Footer;