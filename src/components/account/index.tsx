import React from 'react';
import DefaultProfile from '../../assets/defaultProfile.png'
import './style.scss';

const AcountDiv = (): JSX.Element => {
    return <div style={{ textAlign: 'center', color: 'white' }}>
        <div>
            <img className="acct-img-dv" src={DefaultProfile} alt={"Not found"} />
        </div>
        <div className="act-bdy-dv">
            <div>
                <h6 className="acnt-ttl">Haroon Rasheed</h6>
                <span>Developer For React Tecknologies & GraphQL</span>
                <div style={{ paddingTop: '2%' }}>
                    <span>horroona@gmail.com</span>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <div className="accnticn-dv">
                    <a href={"https://web.facebook.com/haroonrasheed.valient"} className="fa fa-facebook" />
                </div>
                <div className="accnticn-dv">
                    <a href={"https://twitter.com/Horroon"} className="fa fa-twitter" />
                </div>
                <div className="accnticn-dv">
                    <a href={"https://web.facebook.com/haroonrasheed.valient"} className="fa fa-instagram" />
                </div>
            </div>
        </div>
    </div>
}

export default AcountDiv