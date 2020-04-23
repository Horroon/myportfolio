import React from 'react';
import { ItemFace } from './interface'
import Item from './item';
import './style.scss';

const Items: Array<ItemFace> = [
    { title: "About", iconClass: "fa fa-users", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "Mail", iconClass: "fa fa-envelope", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "Contact", iconClass: "fa fa-address-book", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "Gallery", iconClass: "fa fa-camera-retro", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
]
const AboutMain = (): JSX.Element => {
    return <div className="row hm-rw-2">
        {Items.map((item, i) => <Item title={item.title} desc={item.desc} iconClass={item.iconClass} key={i} />)}
    </div>
}

export default AboutMain