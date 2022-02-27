import classNames from "classnames";
import React, { useState } from "react";


function ItemExperience() {
    const [expand, setExpand] = useState(false);
    return (
            <a onClick={() => setExpand(!expand)} 
                className={classNames("cursor-pointer  transition-[height] ease-in-out delay-500 flex rounded-xl bg-black/20 overflow-hidden"
            )}>
                <div className="px-4 py-2">
                    <div className="flex gap-3 items-center">
                        
                        <span className="text-sm">2014-2015</span>
                        <h4>Ingénieur d'affaire</h4>
                        
                    </div>
                    <p className={classNames("text-ellipsis opacity-70 text-sm text-justify", {
                        'h-[95px] ':!expand,
                        'h-auto':expand,
                    })}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum omnis vero debitis sed amet dolorem, quidem dicta quas eos, fugiat qui minima vitae quaerat distinctio eligendi corporis corrupti? Fugiat?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum omnis vero debitis sed amet dolorem, quidem dicta quas eos, fugiat qui minima vitae quaerat distinctio eligendi corporis corrupti? Fugiat?

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum omnis vero debitis sed amet dolorem, quidem dicta quas eos, fugiat qui minima vitae quaerat distinctio eligendi corporis corrupti? Fugiat?
                    
                    </p>
                </div>
                    <div className="bg-black min-w-[150px] rounded-r-lg">
                </div>
             </a>
     
    );
};

function SectionExperience() {
    return ( <section className="flex flex-col gap-2">
        <h3>Mes expériences</h3>
        <div className="flex flex-col gap-4">
            <ItemExperience></ItemExperience>
            <ItemExperience></ItemExperience>
            <ItemExperience></ItemExperience>
        </div>

    </section> );
};

export default SectionExperience;