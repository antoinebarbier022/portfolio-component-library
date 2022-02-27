import React from 'react';
import classNames from 'classnames';
import LinkCard from '../Link/Link.component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone as phoneIcon,
    faLocationDot as locationIcon,
    faEnvelope as emailIcon
  } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


type LinkCardProps = {
    email?: string,
    phone?: string,
    location?: string,
    className?: string,
    hidden?: boolean,
};

function Contact( { email, phone, location, hidden, className, } : LinkCardProps) {
    let inline: boolean = [email, phone, location].filter( x => x !== undefined).length === 1;

    const items : Array<{ type: string, name: string | undefined, icon: IconProp, link: string | undefined }> = [
        { type: "location", name: location, icon: locationIcon, link: "https://www.google.com/maps/search/" + location},
        { type: "phone", name: phone, icon: phoneIcon, link: 'tel:' + phone},
        { type: "email", name: email, icon: emailIcon, link: 'mailto:'+ email}  
    ]

    if (hidden || ([email, phone, location].filter( x => x !== undefined).length === 0)) {
        return (<></>);
    }
    return (  <div className={`container flex flex-wrap gap-2 overflow-hidden ${className}`}>
        {
        items.map( (value, index) => 
            value.name &&
                <LinkCard link={value.link} name={value.name} key={index +  " " + value.name} 
                    className={classNames('flex flex-1 px-4 py-2', {
                        'flex-row gap-3': inline,
                        'flex-col gap-2': !inline
                    })}
                >
                    <FontAwesomeIcon icon={value.icon} 
                        size="lg"
                        fixedWidth
                        className={classNames('fill-white', {
                        'mt-2': !inline
                    })}/>
                    <p className="max-w-[250px] sm:max-w-full truncate"> { value.name }</p>
                </LinkCard>
            )
        }
    </div>);
}

export default Contact;