import React from 'react';
import Items from './items-list';
import './style.scss';
import Profile from '../../assets/p-site-logo.png';

export const SideNav = ({props:{isOpen, component, store}})=>{
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
        <Items props ={{component, store}} />
        <footer>
            <div className="footer-copyright text-center py-3 sidnv-cprt">
                © 2021:
                <p className="address-link"> Haroon Rasheed</p>
            </div>
        </footer>
</div>   
}