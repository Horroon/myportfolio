import React from 'react';

interface PictureSectionInterface {
    ProfileImage: string,
    heading: string,
    description: string,
}

export const PictureSection: React.FC<PictureSectionInterface> = (props): JSX.Element => {
    const {ProfileImage, heading, description} = props;
    return <div style={{ color: 'white', width: '100%' }}>
        <div className="pfl-bg-dv" id="pfl-bg-dv">
            <div className="covwe-inn">
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-lg-2 w3-container  w3-animate-left prf-contnr">
                        <div className="pf-img">
                            <img src={ProfileImage} className="prfl-phto" />
                        </div>
                    </div>
                    <div className="col-lg-8 w3-container w3-animate-top">
                        <div className="prf-tx">
                            <div>
                                <h3>{heading}</h3>
                            </div>
                            <div>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default PictureSection