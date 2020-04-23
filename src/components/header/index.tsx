import React from 'react'
import { HeaderProps } from './interface';
import logo from '../../assets/logo.png'
import './style.css';

const Header: React.FC<HeaderProps> = (props): JSX.Element => {

    return <nav className="navbar navbar-expand-lg navbar-dark hdr-cstm-mn-dv">
        <div className="nv-bdy">
            <div className="nv-brnd-dv">
                <a className="navbar-brand brnd-txt-size" href="#"><img src={logo} className="hdr-lgo" /> Software Engineer</a>
            </div>
            <div className="nv-uitm-dv">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ul-dv ui-item-dv">
                        {
                            props.uicomponents.map((item, index) => <li className="nav-item hvr-cls hdr-lst-itm" key={index}>
                                <a className="nav-link hdr-cstm-dv" href="#">{item}</a>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    </nav>
}

export default Header