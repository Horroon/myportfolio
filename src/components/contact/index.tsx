import React, { useState, useReducer } from "react";
import FormInput from './inputField';
import { toast } from 'react-toastify'
import './style.scss'

interface stateFace {
    fname: string,
    lname: string,
    email: string,
    message: string
}

interface ActionFace {
    type: string,
    payload: string
}
const InitialState: stateFace = { fname: '', lname: '', email: '', message: '' }

const reducer = (state = InitialState, action: ActionFace) => {
    switch (action.type) {
        case "fname":
            return { ...state, fname: action.payload }
        case "lname":
            return { ...state, lname: action.payload }
        case "email":
            return { ...state, email: action.payload }
        case "message":
            return { ...state, message: action.payload }
        default:
            return { ...state }

    }
}
export const Contact: React.FC = (): JSX.Element => {
    let [state, setState] = useReducer(reducer, InitialState)

    const sendDate = () => {
        if (state.fname && state.lname && state.email && state.message) toast.success("Thank You")
        else toast.error("Please enter value")
    }
    return <div>
        <div className="container-fluid" style={{ padding: '4%' }}>
            <div className="cntct-mn-dv" >
                <div className="row">
                    <div className="col-lg-12 main-titl-dv">
                        <div style={{ padding: '5%' }}>
                            <div style={{ padding: '2%' }}>
                                <h3 className="uppercase">Contact Me</h3>
                            </div>
                            <div> <h5>Really Appreciate Your Valuable Suggestion</h5></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6 frm-pdng">
                                <FormInput type="text" value={state.fname} placeholder="First Name" getValue={(e: any) => setState({ type: 'fname', payload: e })} />
                            </div>
                            <div className="col-lg-6 frm-pdng">
                                <FormInput type="text" value={state.lname} placeholder="Last Name" getValue={(e: any) => setState({ type: 'lname', payload: e })} />
                            </div>

                            <div className="col-lg-6 frm-pdng">
                                <FormInput type="email" value={state.email} placeholder="Email" getValue={(e: any) => setState({ type: 'email', payload: e })} />

                            </div>
                            <div className="col-lg-12 frm-pdng">
                                <textarea placeholder="Message" value={state.message} rows={3} className="form-control" onChange={(e) => setState({ type: "message", payload: e.target.value })} />
                            </div>
                            <div className="col-lg-12 btn-clm">
                                <button className="btn btn-lg btn-success btn-sbmt" onClick={sendDate}>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <div style={{ padding: 20 }}>
                                <h3>Reach Me</h3>
                            </div>
                        </div>

                        <div style={{ padding: 10, display: 'flex' }}>
                            <i className="fa fa-envelope" /> <h6 style={{ paddingTop: 10 }}>horroona@gmail.com</h6>
                        </div>

                        <div style={{ padding: 10, display: 'flex' }}>
                            <i className="fa fa-phone" /> <h6 style={{ paddingTop: 10 }}>+923495049558 (8AM - 4PM)</h6>
                        </div>
                        <div style={{ padding: 10, display: 'flex' }}>
                            <i className="fa fa-map-marker" /><h6 style={{ paddingTop: 10 }}>Sadiqabad Statelite Town, Rawalpind, Pakitan</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
}
