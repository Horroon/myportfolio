import React from 'react';
import { Link } from 'react-router-dom'
const Buttons = (): JSX.Element => {
    return <div className="col-lg-12 btn-mn-dv">
        <button type="button" className="btn btn-secondary btn-sctm-style"><Link to="/" className="rmw-dflt-lnk-prpty">Home</Link></button>
        <button type="button" className="btn btn-secondary btn-sctm-style">Profile</button>
        <button type="button" className="btn btn-secondary btn-sctm-style" ><Link to="/favorite" className="rmw-dflt-lnk-prpty">Favorites</Link></button>
        <button type="button" className="btn btn-secondary btn-sctm-style">Services</button>
    </div>
}

export default Buttons