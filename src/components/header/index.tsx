import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {store} from '../../models/index';
import logo from '../../assets/p-site-logo.png';
import './style.scss';

import {SideNav as OverLay} from '../sidenav';

interface UiComponent {
    text: string;
    link: string;
}

interface HeaderProps {
    news: string;
    uicomponents: UiComponent[];
    SideNav: {
        isOpen: boolean;
        component: { path: string };
    };
    headerInformation: {
        headerclasses: string;
    };
}

export const Header = (props: HeaderProps) => {

    const {news, uicomponents,SideNav:{isOpen, component}, headerInformation:{headerclasses} } = props
    //const {isOpen} = sidenav
    return <nav className={`navbar navbar-expand-lg navbar-dark ${headerclasses}`}>
       <OverLay props={{isOpen, component, store}} />
        <div className="nv-bdy">
            <div className="nv-brnd-dv">
                <Link className="navbar-brand brnd-txt-size uppercase" onClick={()=>{
                     store.dispatch.SideNav.open({isOpen: true})
                    }} to="/"><img src={logo} className="hdr-lgo" alt="logo" /> Information Technology</Link>
            </div>
            {/* <div className="marq-parent-dv" dangerouslySetInnerHTML={{__html:`<marquee class="marqueeStyle uppercase">${news}</marquee>`}}></div> */}
            <div className="nv-uitm-dv">
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto ul-dv ui-item-dv">
                        {
                            uicomponents.map((item, index) => <li className="nav-item hvr-cls hdr-lst-itm" key={index}>
                                <Link className="nav-link hdr-cstm-dv uppercase w3-animate-top" to={item.link}>{item.text}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    </nav>
}
const mapStateToProps = ((state: any) => state)
export default connect(mapStateToProps)(Header)
