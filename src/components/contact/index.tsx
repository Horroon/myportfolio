import React from "react";
import FormInput from './inputField';

import './style.scss'
const ContactMain: React.FC = (): JSX.Element => {
    return <div>
        <div className="container-fluid" style={{ padding: '4%' }}>
            <div style={{ width: '70%', background: 'white', margin: 'auto', minHeight: '50vh', padding: 10, borderRadius: 5 }}>
                <div className="row">
                    <div className="col-lg-12 main-titl-dv">
                        <div>
                            <h3>Contact Me</h3>
                            <span>Drop Your Message</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6 frm-pdng">
                                <FormInput />
                            </div>
                            <div className="col-lg-6 frm-pdng">
                                <FormInput />
                            </div>
                            <div className="col-lg-6 frm-pdng">
                                <FormInput />
                            </div>
                            <div className="col-lg-6 frm-pdng">
                                <FormInput />
                            </div>
                            <div className="col-lg-12 btn-clm">
                                <button className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <div>
                                <h3>Reach Me</h3>
                            </div>
                        </div>
                        <div>
                            <i className="fa fa-phone" /> <span>+923495049558 (8AM - 4PM)</span>
                        </div>
                        <div>
                            <i className="fa fa-map-marker" /><span>Sadiqabad Statelite Town, Rawalpind, Pakitan</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ContactMain