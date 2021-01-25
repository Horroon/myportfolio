import React from 'react';
import {store} from '../../models/index';
import Items from './items-list';
import './style.scss';
import Profile from '../../assets/account_p.webp';

export const SideNav = ({isOpen:{isOpen}})=>{
 return <div id="mySidenav" className={`${isOpen?"sidenavopen":"sidenavclose"} sidenav`}>
        <div className="sidenavprofiledv">
            <a href="#" className="closebtn" onClick={()=>store.dispatch.SideNav.close()}>&times;</a>
            <div>
                <div>
                    <img src={Profile} alt={"Not found"} draggable={false} />
                </div>
                <h5>Haroon Rasheed</h5>
            </div>
        </div>
        <Items />
</div>   
}