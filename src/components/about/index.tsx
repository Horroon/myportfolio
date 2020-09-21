import React, { useEffect } from 'react';
import { ItemFace } from './interface';
import {store} from '../../models/index';
import Item from './item';
import styles from './style.module.scss';

const Items: Array<ItemFace> = [
    { title: "About Me", iconClass: "fa fa-users", desc: "Social connection is important as it improves our physical, emotional, and mental health.", pathurl: '/aboutme' },
    { title: "Profile", iconClass: "fa fa-user", desc: "Take my affection at the outset of the email.You know, reading is one of the best habits of the life.",pathurl:'/myprofile' },
    { title: "Contact", iconClass: "fa fa-address-book", desc: "If you live to be 100, I hope I live to be 100 minus 1 day, so I never have to live without you.", pathurl: '/contactme' },
    { title: "Gallery", iconClass: "fa fa-camera-retro", desc: "Photographs play an important role, they connect to past, they remind of people, places, and stories", pathurl: '/gallery' },
]// { title: "Mail", iconClass: "fa fa-envelope", desc: "Take my affection at the outset of the email.You know, reading is one of the best habits of the life.",pathurl:'/' },
export const AboutMain = (): JSX.Element => {
    useEffect(()=>{
        store.dispatch.loginInformation.updatelogin({email:"abc@gmail.com", tokenId: "34kldjaflk9348578934"})
    },[])
    return <div className={`row ${styles["hm-rw-2"]}`}>
        {Items.map((item, i) => <Item title={item.title} desc={item.desc} iconClass={item.iconClass} key={i} pathurl={item.pathurl} />)}
    </div>
}
