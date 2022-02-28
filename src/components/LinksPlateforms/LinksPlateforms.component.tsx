import './LinksPlateforms.style.css';
// Music Plateforms
import AppleMusic from '../../assets/apple-music.svg';
import CinqEuros from '../../assets/5euros.svg';
import AmazonMusic from '../../assets/amazon-music.svg';
import Soundcloud from '../../assets/soundcloud.svg';
import Tiktok from '../../assets/tiktok.svg';
import Facebook from '../../assets/facebook.svg';
import Linkedin from '../../assets/linkedin.svg';
import Dribbble from '../../assets/dribbble.svg';
import Fiver from '../../assets/fiver.svg';
import Twitter from '../../assets/twitter.svg';
import Twitch from '../../assets/twitch.svg';
import malt from '../../assets/malt.png';
import gitlab from '../../assets/gitlab.png';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import itunes from '../../assets/itunes-store.png';
import bandcamp from '../../assets/bandcamp.png';
import spotify from '../../assets/spotify.png';
import deezer from '../../assets/deezer.png';
import youtube from '../../assets/youtube.png';

import LinkCard from '../Link/Link.component';
import React from 'react';

export type PlateformType = "Facebook" | "Instagram" | "Twitch" | "Snapchat" | "Linkedin" | 
                            "Telegram" | "Reddit" | "Twitter" | "Tiktok" | "Slack" |
                            "GooglePlus" | "Dribbble" | "Pinterest" | "Youtube" | "Soundcloud" |
                            "Medium" | "WhatsApp" | "Tumblr" | "Skype" | "Vimeo" | 
                            "Dailymotion" | "Discord" | "Viber" | "Line" | "Flickr" |
                            "5euros.com" | "Deezer" | "Spotify" | "Apple Music" | "Amazon Music" |
                            "Bandcamp" | "Itunes Store" | "Gitlab" | "Github" | "Malt" |
                            "Fiver";


type LinksPlateformsProps = {
    data: Array<{ name: PlateformType, link: string }> | undefined,
    className?: string,
};

function LinksPlateforms( { className, data, } : LinksPlateformsProps) {

    const PlatformeImage = new Map<PlateformType, any>([
      ["Spotify", <img src={spotify} width={130} height={40} alt="logo spotify "></img> ],
      ["Deezer", <img src={deezer} width={130} height={40} alt='logo deezer' ></img> ],
      ["Tiktok", <img src={Tiktok} width={130} height={40} alt='logo tiktok'/>],
      ["5euros.com", <img src={CinqEuros} width={130} height={30} alt='logo 5euros.com'/> ],
      ["Apple Music", <img src={AppleMusic} alt='logo apple music'/> ],
      ["Facebook", <img src={Facebook}  width={130} height={40} alt='logo facebook'/> ],
      ["Instagram", <img src={instagram} width={130} alt="logo Instagram "></img> ],
      ["Amazon Music", <img src={AmazonMusic} width={130} height={40}  alt='logo amazon music'/> ],
      ["Itunes Store", <img src={itunes} width={130} alt="logo Itunes "></img> ],
      ["Soundcloud", <img src={Soundcloud} width={130} height={40}  alt='logo soundcloud'/>],
      ["Linkedin", <img src={Linkedin} width={120} height={40}  alt='logo linkedin'/>],
      ["Dribbble", <img src={Dribbble} width={120} height={40}  alt='logo dribbble'/>],
      ["Fiver", <img src={Fiver} width={120} height={30}  alt='logo fiver'/>],
      ["Twitter", <img src={Twitter} width={120} height={40}  alt='logo twitter'/>],
      ["Twitch", <img src={Twitch} width={120} height={30}  alt='logo Twitch'/>],
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
          {  PlatformeImage.get(value.name) }
        </LinkCard>
        )
    }
</div> );
}

export default LinksPlateforms;