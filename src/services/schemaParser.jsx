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
    Detail
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
        DETAIL: _=><Detail />
    }
     const Screen = components[schema.component];
     return <Screen />
 }