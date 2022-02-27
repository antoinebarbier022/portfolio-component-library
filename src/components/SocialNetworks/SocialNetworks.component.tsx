// Social Networks
import React from 'react';
import { PlateformType } from '../LinksPlateforms/LinksPlateforms.component';

import {
  faFacebookF as FacebookIcon,
  faInstagram as InstagramIcon,
  faTwitch as TwitchIcon,
  faSnapchat as SnapchatIcon,
  faLinkedin as LinkedinIcon,
  faTelegram as TelegramIcon,
  faReddit as RedditIcon,
  faTwitter as TwitterIcon,
  faTiktok as TikTokIcon,
  faSlack as SlackIcon,
  faGooglePlus as GooglePlusIcon,
  faDribbble as DribbbleIcon,
  faPinterest as PinterestIcon,
  faYoutube as YoutubeIcon,
  faSoundcloud as SoundcloudIcon,
  faMedium as MediumIcon,
  faWhatsapp as WhatsAppIcon,
  faTumblr as TumblrIcon,
  faSkype as SkypeIcon,
  faVimeo as VimeoIcon,
  faDailymotion as DailymotionIcon,
  faDiscord as DiscordIcon,
  faViber as ViberIcon,
  faLine as LineIcon,
  faFlickr as FlickrIcon
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';



type SocialNetworksProps = {
    data?: Array<{name: PlateformType, link: string}>,
    className?: string

};

function SocialNetworks( { data, className } : SocialNetworksProps) {
    const PlatformeIcon = new Map<PlateformType, IconProp>([
        ["Facebook", FacebookIcon ],
        ["Instagram", InstagramIcon ],
        ["Twitch", TwitchIcon ],
        ["Snapchat", SnapchatIcon ],
        ["Linkedin", LinkedinIcon ],
        ["Telegram", TelegramIcon ],
        ["Reddit", RedditIcon ],
        ["Twitter", TwitterIcon ],
        ["Tiktok", TikTokIcon ],
        ["Slack", SlackIcon ],
        ["GooglePlus", GooglePlusIcon ],
        ["Dribbble", DribbbleIcon ],
        ["Pinterest", PinterestIcon ],
        ["Youtube", YoutubeIcon ],
        ["Soundcloud", SoundcloudIcon ],
        ["Medium", MediumIcon ],
        ["WhatsApp", WhatsAppIcon ],
        ["Tumblr", TumblrIcon ],
        ["Skype", SkypeIcon ],
        ["Vimeo", VimeoIcon ],
        ["Dailymotion", DailymotionIcon ],
        ["Discord", DiscordIcon ],
        ["Viber", ViberIcon ],
        ["Line", LineIcon ],
        ["Flickr", FlickrIcon ],
      ]);

    if (data === undefined || (data?.length === 0)) {
        return (<></>);
    }
    return ( <div className={`flex flex-wrap gap-10 justify-center m-3 ${className}`}>
    {
      data !== undefined &&
        data.map( (value, index) =>
        PlatformeIcon.get(value.name) &&
        <a  href={value.link} 
            key={index} 
            title={value.name}
            target="_blank" 
            className=' opacity-60 hover:opacity-100 transition ease-in-out delay-100'
            rel='noopener noreferrer'>

          <FontAwesomeIcon icon={PlatformeIcon.get(value.name)!} size="2x" fixedWidth/>
        </a>)
    }
  </div> );
}

export default SocialNetworks;