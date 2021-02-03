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
                <div className="shadow-contact">
                    <div className="contme-hding w3-animate-right">
                        <p>
                            <h4>Contact me</h4>
                            <h6>I will appreciate your valuable opinions and your time for contacting to discuss any question you feel harder to understand me.</h6>
                        </p>
                    </div>
                    <p className="row addrss-mn-dv">
              <div className="col-lg-6 col-sm-12 w3-animate-left">
                 <div>
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
                                            <h5>{item.name}</h5>
                                            <h6>{item.detail}</h6>
                                        </p>
                                    </div>)
                                )
                    }
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="contact-form w3-animate-bottom">
                      <form action="" method="">
                            <div>
                                <h3>Send Message</h3>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-12 input-col">
                                 <input type="text" class="form-control" id="staticEmail" placeholder="Full Name" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-12 input-col">
                                    <input type="email" class="form-control" id="inputPassword" placeholder="Email" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-12 input-col">
                                    <textarea type="textarea" rows="3" class="form-control" id="inputPassword" placeholder="Type message..." />
                                </div>
                            </div>
                            <div class="row">
                                <button className="btn btn-md btn-outline-success">Send message</button>
                            </div>
                            
                      </form>
                  </div>
                </div>
            </p>
                </div >
            </div>
}