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
    Services,
    PictureSection,
    Activities,
    Skills,
    Hobbies,
    Education,
    Address
} from '../components/index';
import {ContentPage} from '../contentpage/index';


 const SchemaParser = ({schema})=>{
    const components = {
        HOME: _=><Home />,
        FAVOURITE:_=><Favourite />,
        PROFILE:_=><MainProfile {...schema} />,
        HEADER:_=><Header {...schema.item} />,
        FOOTER:_=><Footer {...schema} />,
        GALLERY:_=><GalleryMainComponent />,
        ABOUTME: _=><AboutMe />,
        CONTACT: _=><Contact />,
        DETAIL: _=><Detail />,
        PSLIDER: _=><P_Slider />,
        ABOUTSECTION:_=><AboutMain />,
        PICTURES:_=><Picture />,
        SIMPLEINFO:_=><AcountInfo />,
        SERVICES: _=> <Services />,
        PICTURESECTION: _=> <PictureSection {...schema} />,
        ACTIVITIES: _=> <Activities {...schema}/>,
        SKILLS: _=><Skills {...schema} />,
        HOBBIES: _=> <Hobbies {...schema}/>,
        EDUCATION: _=> <Education {...schema} />,
        ADDRESS: _=> <Address {...schema} />
    }
     const Screen = components[schema.component]
     return ContentPage({Component:Screen})
 }
export default SchemaParser 