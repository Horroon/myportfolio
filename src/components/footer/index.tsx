import React from 'react';
import { itemFace } from './interface'
import GiveColumn from './itemColumn'
import './style.scss'



const Items: Array<itemFace> = [
    {
        iconClass: 'fa fa-map-marker',
        title: 'Venue',
        desc: `My base is at an indoor venue in Dhussi, and I took it outdoors in late august 2015`
    },
    {
        iconClass: 'fa fa-globe',
        title: 'Work Place',
        desc: `<a class=address-link href=https://www.mtbc.com target=_black>Medical Transcripting & Billing Company</a> 6th Road, Rawalpindi, Pakistan`
    },
    {
        iconClass: 'fa fa-cogs',
        title: 'Milieu',
        desc: `Comfortable,restful and pleasent environment always keeps unfault and fit.`},
    {
        iconClass: 'fa fa-share-alt',
        title: 'Follow On',
        desc: `
        <div class="ftr-social-icon-tab">
            <div class=accnticn-dv>
                <a href=https://web.facebook.com/haroonrasheed.valient class="fa fa-facebook" target=_black></a>
            </div>
            <div class=accnticn-dv>
                <a href=https://twitter.com/Horroon class="fa fa-twitter" target=_black> </a>
            </div>
            <div class=accnticn-dv>
                <a href=https://web.facebook.com/haroonrasheed.valient class="fa fa-instagram" target=_black></a> 
            </div> 
        </div>`},

]


const Footer: React.FC = (): JSX.Element => {

    return <footer className="page-footer font-small dark pt-4 ftr-cstm-style">
        <div className="row ftr-rw-1">
            {Items.map(item => <GiveColumn iconClass={item.iconClass} title={item.title} desc={item.desc} />)}
        </div>
        <div className="footer-copyright text-center py-3">© 2020:
        <a className="address-link" href="#"> Haroon Rasheed</a>
        </div>
    </footer >
}

export default Footer