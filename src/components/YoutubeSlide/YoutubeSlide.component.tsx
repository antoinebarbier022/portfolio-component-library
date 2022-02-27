import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import './YoutubeSlide.style.css';
import useRssFlux from "../../hooks/RssFlux.hook";
import { 
    faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type YoutubeRssProps = {
    chanelId?: string
    playlistId?: string,
    title?: boolean,
    hover?: boolean,
    className?: string,
};

function YoutubeSlide({ playlistId, chanelId, title = false, hover = true, className }: YoutubeRssProps) {
    const url = chanelId ? 
    "https://www.youtube.com/feeds/videos.xml?channel_id=" + chanelId : 
    (playlistId ? "https://www.youtube.com/feeds/videos.xml?playlist_id=" + playlistId : "");
    const items = useRssFlux(url, 40);
    
    
    const splideOptions: any = { 
        type: 'loop',
        focus  : 'center',
        autoWidth: true,
        widthRatio: 16/9,
        pagination: true,
        gap    : '2rem',
    };

    if (items?.length === 0) {
        return (<></>);
    }
    return ( 
    <div className={`flex flex-col gap-2 section-plateforms container rounded-xl mb-6 ${className}`}>
        <Splide className="slider overflow-hidden" options={splideOptions}>
    {
      items !== undefined &&
      items.map( (value, index) => 
        
            <SplideSlide className="aspect-video w-auto h-[150px] sm:h-[200px] flex flex-col" key={ index }>
                <a  href={value.link}
                    title={value.title}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-full h-full transition ease-in-out delay-500 ">
                        
                <figure className=" h-full w-full">
                    <img  src={value.thumbnail} 
                                alt={value.title} 
                                className="w-full h-full object-cover m-auto rounded-xl"/>
             
                    <FontAwesomeIcon icon={faYoutube} 
                        id="youtube-icon"
                        size="4x"
                        fixedWidth
                        className={classNames('absolute inset-0 m-auto', {
                            'hidden': !hover
                        })}/>
                    {
                        title && 
                            <span className="pl-4 w-full truncate absolute bottom-0 bg-black/40 backdrop-blur-md rounded-b-xl p-2">
                                { new DOMParser().parseFromString( `<!doctype html><body>${value.title}`, 'text/html').body.textContent }
                            </span>
                    }
                </figure>

                </a>

            </SplideSlide>
      )
    }
    </Splide>
</div> );
}

export default YoutubeSlide;