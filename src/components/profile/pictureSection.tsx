import React from 'react';
import Profile from '../../assets/acct.jpg';
const PictureSection: React.FC = (): JSX.Element => {
    return <div style={{ color: 'white', width: '100%' }}>
        <div className="row pfl-bg-dv">
            <div className="col-lg-2">
                <div className="pf-img">
                    <img src={Profile} className="prfl-phto" />
                </div>
            </div>
            <div className="col-lg-8">
                <div className="prf-tx">
                    <div>
                        <h3>Haroon Rasheed / Developer For React Technologies</h3>
                    </div>
                    <div>
                        <p>
                            Working over mini projects with MTBC and other react native projects for different plateform such as Mobile(android,ios) and Web Application in reactjs. Working in GraphQL and Prisma Api server in Node.js
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default PictureSection