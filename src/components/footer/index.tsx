import React from 'react';
import {itemFace} from './interface'
import GiveColumn from './itemColumn'
import './style.scss'



const Items: Array<itemFace> = [
    {
        iconClass: 'fa fa-map-marker',
        title: 'Footer Icon Title',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`},
    {
        iconClass: 'fa fa-globe',
        title: 'Footer Icon Title',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`},
    {
        iconClass: 'fa fa-cogs',
        title: 'Footer Icon Title',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`},
    {
        iconClass: 'fa fa-share-alt',
        title: 'Footer Icon Title',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`},
]


const Footer: React.FC = (): JSX.Element => {

    return <footer className="page-footer font-small dark pt-4 ftr-cstm-style">
        <div className="row ftr-rw-1">
            {Items.map(item => <GiveColumn iconClass={item.iconClass} title={item.title} desc={item.desc} />)}
        </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
    </footer >
}

export default Footer