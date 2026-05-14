import React, { useReducer, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScrollController } from "../../utilities-methods/index";
import "./style.scss";

interface ContactState {
    name: string;
    email: string;
    message: string;
}

type ContactAction = { type: "name" | "email" | "message"; payload: string };

const InitialState: ContactState = { name: "", email: "", message: "" };

const reducer = (state: ContactState = InitialState, action: ContactAction): ContactState => {
    switch (action.type) {
        case "name":    return { ...state, name: action.payload };
        case "email":   return { ...state, email: action.payload };
        case "message": return { ...state, message: action.payload };
        default:        return state;
    }
};

export const Contact = () => {
    const [state, dispatch] = useReducer(reducer, InitialState);
    const [sending, setSending] = useState(false);
    ScrollController();

    const validate = (): string | null => {
        if (!state.name.trim())    return "Please enter your name.";
        if (!state.email.trim())   return "Please enter your email.";
        if (!/\S+@\S+\.\S+/.test(state.email)) return "Please enter a valid email.";
        if (!state.message.trim()) return "Please enter a message.";
        return null;
    };

    const handleSend = () => {
        const error = validate();
        if (error) {
            toast.error(error);
            return;
        }

        setSending(true);

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                {
                    from_name:    state.name,
                    from_email:   state.email,
                    message:      state.message,
                    to_email:     process.env.REACT_APP_CONTACT_EMAIL!,
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
            )
            .then(() => {
                toast.success("Message sent! I'll get back to you soon.");
                dispatch({ type: "name",    payload: "" });
                dispatch({ type: "email",   payload: "" });
                dispatch({ type: "message", payload: "" });
            })
            .catch(() => {
                toast.error("Failed to send. Please try again later.");
            })
            .finally(() => setSending(false));
    };

    return (
        <div className="contact-main">
            <ToastContainer position="top-right" autoClose={4000} />
            <div className="shadow-contact">
                <div className="contme-hding w3-animate-right">
                    <p>
                        <h4>Contact Me</h4>
                        <h6>
                            I will appreciate your valuable opinions and your time for
                            contacting to discuss any question you feel harder to understand me.
                        </h6>
                    </p>
                </div>
                <p className="row addrss-mn-dv">
                    <div className="col-lg-6 col-sm-12 w3-animate-left">
                        <div>
                            {[
                                { name: "Address", detail: "Satellite Town 6th Road, Rawalpindi.", icon: "fa fa-map-marker" },
                                { name: "Phone",   detail: "###########",                          icon: "fa fa-phone" },
                                { name: "Email",   detail: "horroona@gmail.com",                   icon: "fa fa-envelope" },
                            ].map((item) => (
                                <div className="location-hd" key={item.name}>
                                    <h4><i className={item.icon} /></h4>
                                    <p>
                                        <h5>{item.name}</h5>
                                        <h6>{item.detail}</h6>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="contact-form w3-animate-bottom">
                            <div>
                                <div><h3>Send Message</h3></div>
                                <div className="form-group row">
                                    <div className="col-sm-12 input-col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Full Name"
                                            value={state.name}
                                            onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12 input-col">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            value={state.email}
                                            onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12 input-col">
                                        <textarea
                                            rows={3}
                                            className="form-control"
                                            placeholder="Type message..."
                                            value={state.message}
                                            onChange={(e) => dispatch({ type: "message", payload: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <button
                                        className="btn btn-md btn-outline-success"
                                        onClick={handleSend}
                                        disabled={sending}
                                    >
                                        {sending ? "Sending..." : "Send message"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </p>
            </div>
        </div>
    );
};
