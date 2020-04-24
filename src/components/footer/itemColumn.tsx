import React from 'react';
import { itemFace } from './interface'

const GiveColumn: React.FC<itemFace> = (props): JSX.Element => {
    return <div className="col-lg-3">
        <div>
            <div className="ftr-icn-ttl-dv">
                <i className={`${props.iconClass} ftr-icn-cls`} />
                <span className="ftr-titl-cls">{props.title}</span></div>
            <div className="ftr-pr-dv" dangerouslySetInnerHTML={{
                __html: `<p>${props.desc}</p>`
            }}>
            </div>
        </div>
    </div>
}

export default GiveColumn