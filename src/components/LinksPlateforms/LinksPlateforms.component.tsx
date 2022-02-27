import './LinksPlateforms.style.css';

// Music Plateforms
import { ReactComponent as AppleMusic } from '../../assets/plateforms/apple-music.svg';
import { ReactComponent as CinqEuros } from '../../assets/plateforms/5euro.svg';
import { ReactComponent as AmazonMusic} from '../../assets/plateforms/amazon-music.svg';
import { ReactComponent as Soundcloud} from '../../assets/plateforms/soundcloud.svg';
import { ReactComponent as Tiktok} from '../../assets/plateforms/tiktok.svg';
import { ReactComponent as Facebook} from '../../assets/plateforms/facebook.svg';
import { ReactComponent as Linkedin} from '../../assets/plateforms/linkedin.svg';
import { ReactComponent as Dribbble} from '../../assets/plateforms/dribbble.svg';
import { ReactComponent as Fiver} from '../../assets/plateforms/fiver.svg';
import { ReactComponent as Twitter} from '../../assets/plateforms/twitter.svg';
import { ReactComponent as Twitch} from '../../assets/plateforms/twitch.svg';
import malt from '../../assets/plateforms/malt.png';
import gitlab from '../../assets/plateforms/gitlab.png';
import github from '../../assets/plateforms/github.png';
import instagram from '../../assets/plateforms/instagram.png';
import itunes from '../../assets/plateforms/itunes-store.png';
import bandcamp from '../../assets/plateforms/bandcamp.png';
import spotify from '../../assets/plateforms/spotify.png';
import deezer from '../../assets/plateforms/deezer.png';
import youtube from '../../assets/plateforms/youtube.png';

import { ReactNode } from "react";
import LinkCard from '../LinkCard/Link.component';
import React from 'react';

export type PlateformType = "Facebook" | "Instagram" | "Twitch" | "Snapchat" | "Linkedin" | 
                            "Telegram" | "Reddit" | "Twitter" | "Tiktok" | "Slack" |
                            "GooglePlus" | "Dribbble" | "Pinterest" | "Youtube" | "Soundcloud" |
                            "Medium" | "WhatsApp" | "Tumblr" | "Skype" | "Vimeo" | 
                            "Dailymotion" | "Discord" | "Viber" | "Line" | "Flickr" |
                            "5euro.com" | "Deezer" | "Spotify" | "Apple Music" | "Amazon Music" |
                            "Bandcamp" | "Itunes Store" | "Gitlab" | "Github" | "Malt" |
                            "Fiver";


type LinksPlateformsProps = {
    className?: string,
    data: Array<{name: PlateformType, link: string}> | undefined,
};

function LinksPlateforms( { className, data, } : LinksPlateformsProps) {

    const PlatformeImage = new Map<PlateformType, ReactNode>([
      ["Spotify", <img src={spotify} width={130}  alt="logo spotify "></img> ],
      ["Deezer", <img src={deezer} width={130}  alt='logo deezer' ></img> ],
      ["Tiktok", <Tiktok width={150} height={40}/>],
      ["5euro.com", <CinqEuros height={40}/> ],
      ["Apple Music", <AppleMusic /> ],
      ["Facebook", <Facebook  width={130} height={40} /> ],
      ["Instagram", <img src={instagram} width={130} alt="logo Instagram "></img> ],
      ["Amazon Music", <AmazonMusic width={130} height={40}/> ],
      ["Itunes Store", <img src={itunes} width={130} alt="logo Itunes "></img> ],
      ["Soundcloud", <Soundcloud width={130} height={40}/>],
      ["Linkedin", <Linkedin width={120} height={40}/>],
      ["Dribbble", <Dribbble width={120} height={40}/>],
      ["Fiver", <Fiver width={120} height={30}/>],
      ["Twitter", <Twitter width={120} height={40}/>],
      ["Twitch", <Twitch width={120} height={30}/>],
      ["Malt", <img src={malt} width={130} alt="logo Malt "></img>],
      ["Gitlab", <img src={gitlab} width={130} alt="logo Gitlab "></img>],
      ["Github", <img src={github} width={130} alt="logo Github "></img>],
      ["Youtube", <img src={youtube} width={130} alt="logo Youtube "></img> ],
      ["Bandcamp", <img src={bandcamp} width={130} alt="logo Bandcamp "></img> ],
    ]);

    const styleGrid = (data?.length === 1 || data?.length === 3) ? "grid-cols-1": "grid-cols-2";

    if (data === undefined || (data?.length === 0)) {
        return (<></>);
    }
    return (<div className={`section-plateforms container rounded-xl grid gap-2 ${styleGrid} ${className}`}>
    {
      data !== undefined &&
      data.map( (value, index) => 
      PlatformeImage.get(value.name) &&
        <LinkCard name={value.name} link={value.link} key={index}>
          { PlatformeImage.get(value.name) }
        </LinkCard>
        )
    }
</div> );
}

export default LinksPlateforms;