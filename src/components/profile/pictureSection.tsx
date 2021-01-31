import React from 'react';
import Profile from '../../assets/acct.webp';
const PictureSection: React.FC = (): JSX.Element => {
    return <div style={{ color: 'white', width: '100%' }}>
        <div className="pfl-bg-dv" id="pfl-bg-dv">
            <div className="covwe-inn">
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-lg-2 w3-container  w3-animate-left prf-contnr">
                        <div className="pf-img">
                            <img src={Profile} className="prfl-phto" />
                        </div>
                    </div>
                    <div className="col-lg-8 w3-container w3-animate-top">
                        <div className="prf-tx">
                            <div>
                                <h3>Haroon Rasheed / Developer For React Technologies</h3>
                            </div>
                            <div>
                                <p>
                                I am a 24 year old software engineer with 2 year in house experience as FrontEnd Developer with working experience on backend as Node.js developer. I have developed Single Page Applications from scratch as well worked with medium level teams for a range of clients. For my side projects I have worked with React Native, Angular and Vanilla JS . I am currently working with MTBC Islamabad. I feel excited to work with fast paced progressive teams achieving something great.   </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default PictureSection