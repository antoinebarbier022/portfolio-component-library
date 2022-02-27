import React from "react";
import Card from "../../components/Card/Card.component";
import Contact from "../../components/Contact/Contact.component";
import CustomLinksSection from "../../components/CustomLinksSection/CustomLinksSection.component";
import Footer from "../../components/Footer/Footer.component";
import LinksPlateforms from "../../components/LinksPlateforms/LinksPlateforms.component";
import Avatar from "../../components/Avatar/Avatar.component";
import SocialNetworks from "../../components/SocialNetworks/SocialNetworks.component";
import Subtitle from "../../components/Subtitle/Subtitle.component";
import Text from "../../components/Text/Text.component";
import Title from "../../components/Title/Title.component";
import YoutubeSlide from "../../components/YoutubeSlide/YoutubeSlide.component";




function ExempleA() {

    return (<Card className="text-white">
        <div className="w-full flex flex-col gap-6">
            <div className="flex md:flex-col gap-5 items-center">
                <Avatar variant={"rounded"}/>
                <div className="text-center">
                    <Title>Antoine Barbier</Title>
                    <Subtitle>Developpeur web</Subtitle>
                </div>
   
            </div>
            <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod repudiandae quis 
                    assumenda temporibus ut tempora nam, consectetur illo dolorum odit eos officia amet, 
                    officiis voluptatibus nostrum animi eum molestias.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod repudiandae quis 
                    assumenda temporibus ut tempora nam, consectetur illo dolorum odit eos officia amet, 
                    officiis voluptatibus nostrum animi eum molestias.
                </Text>

                {/*<SectionExperience/>*/}
       
            <div className="flex flex-col gap-2">
                <YoutubeSlide 
                    chanelId="UCrICUI4NCuw-P1VrK4vL_dg" 
                    title={true}
                    />
                <CustomLinksSection />

                <LinksPlateforms data={[
                        { name:"Youtube", link:"https://www.youtube.com/channel/UCrICUI4NCuw-P1VrK4vL_dg" },
                        { name:"Malt", link:"https://www.malt.fr/profile/mathisbarbier" },
                        ]}/>
                <Contact location="Montpellier" email="antoine.barbier@icloud.com"
                        />      
            </div>
            <Footer>
                <SocialNetworks data={[
                    { name:"Youtube", link:"https://www.youtube.com/channel/UCrICUI4NCuw-P1VrK4vL_dg" },
                    { name:"Instagram", link:"https://www.instagram.com/mathisproduction/" },
                    { name:"Tiktok", link:"https://www.tiktok.com/@mathisproduction" }]} 
                />
            </Footer>
        </div>
        
    </Card> );
}

export default ExempleA;