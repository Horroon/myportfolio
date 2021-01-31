import React,{useEffect} from 'react';
import PictureSection from './pictureSection';
import Activity from './activity';
import Skill from './skill/index';
import {store} from '../../models/index';
import { HeaderClasses } from '../../constants/headers-classes';
import {handleHeaderWithScroll} from '../../utilities-methods'

import './style.scss'

export const MainProfile: React.FC = (): JSX.Element => {
    const keepEyeOnScroll = ()=> handleHeaderWithScroll(store)
    useEffect(()=>{
        store.dispatch.headerInformation.updateheaderclasses({headerclasses: HeaderClasses.stickytransparentHeader})
        window.addEventListener('scroll',keepEyeOnScroll)
       return ()=>window.removeEventListener('scroll', keepEyeOnScroll)
    },[])
    return <div>
        <div className="row pf-rw-1">
            <PictureSection />
        </div>
        <div className="row pf-rw-2">
            <div className="col-lg-4 prf-hb-prnt-clm">
                <Activity />
            </div>
            <div className="col-lg-8 prf-skl-prnt-clm">
                <Skill />
            </div>
        </div>
    </div>
}

export default MainProfile 