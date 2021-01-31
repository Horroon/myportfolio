import React, {useEffect, useCallback} from 'react';
import SchemaParser from '../../services/schemaParser';
import {store} from '../../models/index';
import {BigCarousel} from './bigcarousel';
import { HeaderClasses } from '../../constants/headers-classes';
import {handleHeaderWithScroll} from '../../utilities-methods'
import './style.scss';

export const Home = (props) => {
    const keepEyeOnScroll = ()=> handleHeaderWithScroll(store)
    useEffect(()=>{
        keepEyeOnScroll(store)
        window.addEventListener('scroll',keepEyeOnScroll)
       return ()=>{
        window.removeEventListener('scroll', keepEyeOnScroll)
    }
    },[])
    return<div>
            <div>
                <BigCarousel />
            </div>
            <div className="row hm-rw-1">
                {/* <div className="col-lg-6 slidr-clm">
                    <SchemaParser schema={{component:"PSLIDER"}} />
                </div>
                <div className="col-lg-6 acnt-clm">
                    <SchemaParser schema={{component: "SIMPLEINFO"}} />
                </div> */}
            </div>
            <div>{/* Row 2 */}
                <SchemaParser schema={{component:"ABOUTSECTION"}} />
            </div>
            <div>{/* Row 3 */}
                <SchemaParser schema={{component:"PICTURES"}} />
            </div>

    </div>
}
export default Home