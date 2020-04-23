import React from 'react';
import { ItemFace } from './interface'


const Item: React.FC<ItemFace> = (props): JSX.Element => {

    return <div className="col-lg-3 abt-me-mn-dv">
        <div>
            <h4>{props.title}</h4>
        </div>
        <div className="abt-icn-mn-dv">
            <i className={`${props.iconClass} abt-me-lg-icn`} />
        </div>
        <div>
            <p>
                {props.desc}
            </p>
        </div>
        <div>
            <button className="btn btn-primary btn-cstm-cls">View</button>
        </div>
    </div>
}

export default Item