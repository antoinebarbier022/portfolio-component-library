import React, { useState } from "react";
import BasicTabs from "../../components/BasicTabs/BasicTabs.component";
import Card from "../../components/Card/Card.component";
import Contact from "../../components/Contact/Contact.component";
import Footer from "../../components/Footer/Footer.component";
import LinksPlateforms from "../../components/LinksPlateforms/LinksPlateforms.component";
import Subtitle from "../../components/Subtitle/Subtitle.component";
import Text from "../../components/Text/Text.component";
import Title from "../../components/Title/Title.component";
import YoutubeSlide from "../../components/YoutubeSlide/YoutubeSlide.component";

import { Button } from "@mui/material";
import classNames from "classnames";


import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';


const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
  };
  
  const Tab = styled(TabUnstyled)`
    color: white;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    padding: 4px 16px;
    margin: 6px 6px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: ${blue[400]};
    }
  
    &:focus {
      color: #fff;
      border-radius: 3px;
      outline: 2px solid ${blue[200]};
      outline-offset: 2px;
    }
  
    &.${tabUnstyledClasses.selected} {
      background-color: ${blue[50]};
      color: ${blue[600]};
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  
  const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
  `;
  
  const TabsList = styled(TabsListUnstyled)`
    min-width: 320px;
    background-color: ${blue[500]};
    border-radius: 8px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
  `;


function ExempleB() {

    const [test, setTest] = useState(0);

    const styles = {
        "&.MuiButton-root": {
          color: "white"
        },
        "&.MuiButton-text": {
          color: "grey"
        },
        "&.MuiButton-contained": {
          color: "yellow"
        },
        "&.MuiButton-outlined": {
          color: "brown"
        }
      };

    return (<Card className="text-white">
        <div className="w-full flex flex-col gap-6">

            <div>
                <Title>Antoine Barbier</Title>
                <Subtitle>Developpeur web</Subtitle>
            </div>

       
            <TabsUnstyled defaultValue={0} className="min-h-[300px]">
      <TabsList>
        <Tab>Description</Tab>
        <Tab>Mes projets</Tab>
        <Tab>Me contacter</Tab>
      </TabsList>
      <TabPanel value={0}><Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod repudiandae quis 
                    assumenda temporibus ut tempora nam, consectetur illo dolorum odit eos officia amet, 
                    officiis voluptatibus nostrum animi eum molestias.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod repudiandae quis 
                    assumenda temporibus ut tempora nam, consectetur illo dolorum odit eos officia amet, 
                    officiis voluptatibus nostrum animi eum molestias.
                </Text></TabPanel>
      <TabPanel value={1}>
          <YoutubeSlide 
                    chanelId="UCrICUI4NCuw-P1VrK4vL_dg" 
                    title={true}
                     />
                    </TabPanel>
      <TabPanel value={2}><Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod repudiandae quis 
                    assumenda temporibus ut tempora nam, consectetur illo dolorum odit eos officia amet, 
                    officiis voluptatibus nostrum animi eum molestias.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod repudiandae quis 
                    assumenda temporibus ut tempora nam, consectetur illo dolorum odit eos officia amet, 
                    officiis voluptatibus nostrum animi eum molestias.
                </Text></TabPanel>
    </TabsUnstyled>
       
            <div className="flex flex-col gap-2 min-h-[230px]">
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod repudiandae quis 
                    assumenda temporibus ut tempora nam, consectetur illo dolorum odit eos officia amet, 
                    officiis voluptatibus nostrum animi eum molestias.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod repudiandae quis 
                    assumenda temporibus ut tempora nam, consectetur illo dolorum odit eos officia amet, 
                    officiis voluptatibus nostrum animi eum molestias.
                </Text>
           
                <YoutubeSlide 
                    chanelId="UCrICUI4NCuw-P1VrK4vL_dg" 
                    title={true}
                    />

                <Contact location="Montpellier" email="antoine.barbier@icloud.com"
                        />

            </div>

            <LinksPlateforms data={[
                        {name:"Youtube", link:"https://www.youtube.com/channel/UCrICUI4NCuw-P1VrK4vL_dg"},
                        {name:"Malt", link:"https://www.malt.fr/profile/mathisbarbier"},
                        ]}/>
                
       
  
            <Footer/>
        </div>
        
    </Card> );
}

export default ExempleB;