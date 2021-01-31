import { HeaderClasses } from '../constants/headers-classes';
const handleHeaderWithScroll = (store)=>{
    if(document.documentElement.scrollTop > 100){
        store.dispatch.headerInformation.updateheaderclasses({headerclasses: HeaderClasses.coloredHeader})
    }else{
        store.dispatch.headerInformation.updateheaderclasses({headerclasses: HeaderClasses.stickytransparentHeader})
    }
}

export {handleHeaderWithScroll}