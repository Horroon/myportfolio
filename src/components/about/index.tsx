import React from 'react';
import { ItemFace } from './interface'
import Item from './item';
import './style.scss';

const Items: Array<ItemFace> = [
    { title: "About", iconClass: "fa fa-users", desc: "Social connection is important as it improves our physical, emotional, and mental health." },
    { title: "Mail", iconClass: "fa fa-envelope", desc: "Take my affection at the outset of the email.You know, reading is one of the best habits of the life." },
    { title: "Contact", iconClass: "fa fa-address-book", desc: "If you live to be 100, I hope I live to be 100 minus 1 day, so I never have to live without you." },
    { title: "Gallery", iconClass: "fa fa-camera-retro", desc: "Photographs play an important role, they connect to past, they remind of people, places, and stories" },
]
const AboutMain = (): JSX.Element => {
    return <div className="row hm-rw-2">
        {Items.map((item, i) => <Item title={item.title} desc={item.desc} iconClass={item.iconClass} key={i} />)}
    </div>
}

export default AboutMain