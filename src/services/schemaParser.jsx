import React, { useMemo } from 'react';
import {
    Home,
    Favourite,
    MainProfile,
    GalleryMainComponent,
    Footer,
    Header,
    Contact,
    AboutMe,
    Detail,
    P_Slider,
    AboutMain,
    Picture,
    AcountInfo,
} from '../components/index';



 export const SchemaParser = ({schema})=>{
    const components = {
        HOME: _=><Home  />,
        FAVOURITE:_=><Favourite />,
        PROFILE:_=><MainProfile />,
        HEADER:_=><Header {...schema.item} />,
        FOOTER:_=><Footer />,
        GALLERY:_=><GalleryMainComponent />,
        ABOUTME: _=><AboutMe />,
        CONTACT: _=><Contact />,
        DETAIL: _=><Detail />,
        PSLIDER: _=><P_Slider />,
        ABOUTSECTION:_=><AboutMain />,
        PICTURES:_=><Picture />,
        SIMPLEINFO:_=><AcountInfo />
    }
     const Screen = components[schema.component];
     return <Screen />
 }