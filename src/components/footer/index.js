import React from 'react';
import GiveColumn from './itemColumn'
import './style.scss'




export const Footer = (props) => {
   const {Items, owner:{year,name}} = props
    return <footer className="page-footer font-small dark pt-4 ftr-cstm-style">
        <div className="row ftr-rw-1">
            {Items.map(item => <GiveColumn iconClass={item.iconClass} title={item.title} desc={item.desc} />)}
        </div>
        <div className="footer-copyright text-center py-3">© {year}:
        <a className="address-link" href="#"> {name}</a>
        </div>
    </footer >
}
