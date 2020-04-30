import React from 'react';
import { ItemFace } from './interface';
import { Link } from 'react-router-dom'


const Item: React.FC<ItemFace> = (props): JSX.Element => {

    return <div className="col-lg-4 abt-me-mn-dv">
        <div>
            <h4 className="uppercase">{props.title}</h4>
        </div>
        <div className="abt-icn-mn-dv">
            <Link to={props.pathurl} className="rmw-dflt-lnk-prpty">
                <i className={`${props.iconClass} abt-me-lg-icn`} />
            </Link>
        </div>
        <div>
            <p>
                {props.desc}
            </p>
        </div>
        <div>
            <Link to={props.pathurl} className="rmw-dflt-lnk-prpty">
                <button className="btn btn-primary btn-cstm-cls">View</button>
            </Link>
        </div>
    </div>
}

export default Item