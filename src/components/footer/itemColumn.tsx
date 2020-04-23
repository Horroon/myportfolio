import React from 'react';
import { itemFace } from './interface'

const GiveColumn: React.FC<itemFace> = (props): JSX.Element => {
    return <div className="col-lg-3">
        <div>
            <i className={`${props.iconClass} ftr-icn-cls`} />
            <span className="ftr-titl-cls">{props.title}</span>
            <div className="ftr-pr-dv">
                <p>{props.desc}</p>
            </div>
        </div>
    </div>
}

export default GiveColumn