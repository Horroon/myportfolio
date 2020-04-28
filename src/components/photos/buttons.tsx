import React from 'react';
import { Link } from 'react-router-dom'

interface buttonFace {
    link: string,
    text: string
}

const buttons: Array<buttonFace> = [{ link: "/", text: "Home" }, { link: "/myprofile", text: "Profile" }, { link: "/favorite", text: "Favorite" }]; //{ link: "/services", text: "Services" }

const Buttons = (): JSX.Element => {
    return <div className="col-lg-12 btn-mn-dv">
        {
            buttons.map((button, i) => <Link to={button.link} className="rmw-dflt-lnk-prpty" key={i}><button type="button" className="btn btn-secondary btn-sctm-style">{button.text}</button></Link>)
        }
    </div>
}

export default Buttons