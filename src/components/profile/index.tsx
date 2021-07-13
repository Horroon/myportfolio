import React from 'react';
import {ScrollController} from '../../utilities-methods';

import './style.scss'
import SchemaParser from '../../services/schemaParser';

interface MainProfileInterface {
    items: any[]
}
export const MainProfile: React.FC<MainProfileInterface> = (props): JSX.Element => {
    const {items} = props
    ScrollController();
    return <div>
        <div className="row pf-rw-1">
            <SchemaParser schema={items[0]} />
        </div>
        <div className="row pf-rw-2">
            <div className="col-lg-4 prf-hb-prnt-clm">
                <SchemaParser schema={items[1]} />
            </div>
            <div className="col-lg-8 prf-skl-prnt-clm">
                <SchemaParser schema={items[2]} />
            </div>
        </div>
    </div>
}

export default MainProfile 