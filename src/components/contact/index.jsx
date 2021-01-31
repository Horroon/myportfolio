import React, { useState, useReducer, useEffect } from "react";
import { toast } from 'react-toastify'
import {store} from '../../models/index';
import {handleHeaderWithScroll} from '../../utilities-methods/index';
import './style.scss'

const InitialState= { fname: '', lname: '', email: '', message: '' }

const reducer = (state = InitialState, action) => {
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
export const Contact = () => {
    
    const keepEyeOnScroll = ()=> handleHeaderWithScroll(store)
    useEffect(()=>{
        keepEyeOnScroll(store)
        window.addEventListener('scroll',keepEyeOnScroll)
       return ()=>{
        window.removeEventListener('scroll', keepEyeOnScroll)
    }
    },[])

    return <div className="contact-main">
            <div className="contme-hding w3-animate-right">
                <p>
                    <h4>Contact me</h4>
                    <h5>I will appreciate your valuable opinions and your time for contacting to discuss any question you feel harder to understand me.</h5>
                </p>
            </div>
            <p className="row addrss-mn-dv">
              <div className="col-lg-6 col-sm-12 w3-animate-left">
                  {
                      [
                          {name:"Address", detail:"Satellite Town 6th Road, Rawalpindi.", icon:"fa fa-map-marker"},
                          {name:"Phone", detail:"+92-349-5049558", icon:"fa fa-phone"},
                          {name:"Email", detail:"horroona@gmail.com", icon:"fa fa-envelope"}
                      ].map(item=> (<div className="location-hd">
                                    <h4>
                                        <i className={item.icon} />
                                    </h4>
                                    <p>
                                        <h3>{item.name}</h3>
                                        <h4>{item.detail}</h4>
                                    </p>
                                </div>)
                            )
                  }
                </div>
                <div className="col-lg-6 col-sm-12">Forms</div>
            </p>
    </div >
}
