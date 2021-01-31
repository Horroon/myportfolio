import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {store} from '../../models/index';
import logo from '../../assets/p-site-logo.png'
import './style.scss';
import {SideNav as OverLay} from '../sidenav'

export const Header = (props) => {

    const {news, uicomponents,SideNav:{isOpen, component}, headerInformation:{headerclasses} } = props
    //const {isOpen} = sidenav
    console.log('isOpen in header ', props)
    return <nav className={`navbar navbar-expand-lg navbar-dark ${headerclasses}`}>
       <OverLay props={{isOpen, component, store}} />
        <div className="nv-bdy">
            <div className="nv-brnd-dv">
                <Link className="navbar-brand brnd-txt-size uppercase" to="/"><img src={logo} className="hdr-lgo" onClick={()=>{
                     store.dispatch.SideNav.open({isOpen: true})
                    }} /> Information Technology</Link>
            </div>
            {/* <div className="marq-parent-dv" dangerouslySetInnerHTML={{__html:`<marquee class="marqueeStyle uppercase">${news}</marquee>`}}></div> */}
            <div className="nv-uitm-dv">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ul-dv ui-item-dv">
                        {
                            uicomponents.map((item, index) => <li className="nav-item hvr-cls hdr-lst-itm" key={index}>
                                <Link className="nav-link hdr-cstm-dv uppercase" to={item.link}>{item.text}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    </nav>
}
const mapStateToProps = ((state)=>state)
export default connect(mapStateToProps)(Header)