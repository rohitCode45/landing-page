import React from 'react'
import MiddlePart from './MiddlePart'
import StartPart from './StartPart';
import techLogoBig from './../Constants/Logos/tech-big.png'
import acomSm from "./../Constants/Logos/acom-sm.png"
import packsmall from './../Constants/Logos/pack-sm.png'
import ecommBig from './../Constants/Logos/ecomrce-big.png'
import fmcgBig from './../Constants/Logos/Fmcg-big.png'
import packBig from './../Constants/Logos/pack-big.png';
import agriBig from "./../Constants/Logos/Agri-big.png"

function Section() {
  return (
   <div>
    <StartPart position='start'/>
    <MiddlePart left={{type:"ICON", content:techLogoBig}} right={{type:"TEXT", id:'tech',headText:'Unleashing the strength of ', spanText:'Technology',smIcon:acomSm, details:'We believe in innovation and excellence hence , our approach in the field of technology is focused to relish incredible customer experience and stabilising business models for tomorrow.'}} />

    <MiddlePart left={{type:"TEXT", id:'accom',headText:'', spanText:'Making accommodations easier',spanColor:'linear-gradient(90deg, #FFE259 0%, #FFA751 100%);',smIcon:acomSm, details:'We believe in innovation and excellence hence , our approach in the field of technology is focused to relish incredible customer experience and stabilising business models for tomorrow.'}} right={{type:'ICON', content:''}} />

    <MiddlePart left={{type:"ICON", content:packBig}} right={{type:"TEXT", id:'pack',headText:'Packaging industry for business', spanText:'growth',smIcon:packsmall, details:'We provide packaging solutions to help your business flourish with boosted outreach. Ensuring the protection, containment, and communication of packaged projects is our foremost priority.'}} />

    <MiddlePart left={{type:"TEXT", id:'fmgc',headText:'', spanText:'Offering the best with FMCG industry',smIcon:acomSm, details:'Ramaera FMCG industry has commenced an extensive range of FMCG to make your days more than ordinary. We plan to offer you nothing less than the best.'}}  right={{type:'ICON', content:fmcgBig}}/>

    <MiddlePart left={{type:"ICON", content:agriBig}} right={{type:"TEXT", id:'agri',headText:'Agri-business to bestow', spanText:'Nature Love',smIcon:acomSm, details:'We believe in innovation and excellence hence , our approach in the field of technology is focused to relish incredible customer experience and stabilising business models for tomorrow.'}}/>

    <MiddlePart left={{type:"TEXT", id:'ecomm',headText:'Get all your essentials in', spanText:'In One Place',smIcon:acomSm, details:'Ramaera Supermart is an online customer oriented marketplace to motivated to provide everything you need right at one place under the comfort of your homes.'}}  right={{type:'ICON', content:ecommBig}}/>
    <StartPart position='end'/>
   </div>
  )
}

export default Section