import {useEffect} from 'react';
import { HeaderClasses } from '../constants/headers-classes';
import {store} from '../models/index';

const handleHeaderWithScroll = (store)=>{
    if(document.documentElement.scrollTop > 100){
        store.dispatch.headerInformation.updateheaderclasses({headerclasses: HeaderClasses.coloredHeader})
    }else{
        store.dispatch.headerInformation.updateheaderclasses({headerclasses: HeaderClasses.stickytransparentHeader})
    }
}

function ScrollController(){
    const keepEyeOnScroll = ()=> handleHeaderWithScroll(store)
    useEffect(()=>{
        keepEyeOnScroll(store)
        window.addEventListener('scroll',keepEyeOnScroll)
       return ()=>window.removeEventListener('scroll', keepEyeOnScroll)
    },[]);
    return true
}

export {handleHeaderWithScroll, ScrollController}