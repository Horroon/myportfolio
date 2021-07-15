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
    SocialInfo,
    Services,
    PictureSection,
    Activities,
    Skills,
    Hobbies,
    Education,
    Address,
    HomeCarousel,
    Button,
    Photo, 
    Container,
    H2,H3,H4,
    ServiceContainer,
    ServiceLogoContainer
} from '../components/index';

 const SchemaParser = ({schema={}, schemas=[]})=>{
    const components = {
        HOME: _=><Home {...schema} />,
        FAVOURITE:_=><Favourite />,
        PROFILE:_=><MainProfile {...schema} />,
        HEADER:_=><Header {...schema.item} />,
        FOOTER:_=><Footer {...schema} />,
        GALLERY:_=><GalleryMainComponent />,
        ABOUTME: _=><AboutMe />,
        CONTACT: _=><Contact />,
        DETAIL: _=><Detail />,
        PSLIDER: _=><P_Slider />,
        ABOUTSECTION:_=><AboutMain {...schema} />,
        PICTURES:_=><Picture {...schema} />,
        SOCIALINFO:_=><SocialInfo />,
        SERVICES: _=> <Services {...schema} />,
        PICTURESECTION: _=> <PictureSection {...schema} />,
        ACTIVITIES: _=> <Activities {...schema}/>,
        SKILLS: _=><Skills {...schema} />,
        HOBBIES: _=> <Hobbies {...schema}/>,
        EDUCATION: _=> <Education {...schema} />,
        ADDRESS: _=> <Address {...schema} />,
        HOMECAROUSEL: _=> <HomeCarousel {...schema} />,
        BUTTON:_ => <Button {...schema} />,
        PHOTO: _=> <Photo {...schema} />,
        SERVICECONTAINER: _=> <ServiceContainer {...schema} />,
        SERVICELOGCONTAINER:_=> <ServiceLogoContainer {...schema} />,
        H4:_=> <H4 {...schema}>{schema.text}</H4>,
        CONTAINER:_=> <Container {...schema}>
            {
                schema.items.map((item,i)=> <SchemaParser schema={item} key={schema.component + i} />)
            }
        </Container>
    }
     const Screen = components[schema.component]
     if(schemas.length){
       return <>
        {
          schemas.map(currentSchema=><SchemaParser schema={currentSchema} />)
        }
       </>
     }
     return <Screen />
 }
export default SchemaParser 