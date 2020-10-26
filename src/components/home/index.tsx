import React from 'react';
import SchemaParser from '../../services/schemaParser';
import './style.scss';

export const Home = (props:{loginData:''}): JSX.Element => {
    console.log('Props in Home ',props)
    return <div>
            <div className="row hm-rw-1">
                <div className="col-lg-6 slidr-clm">
                    <SchemaParser schema={{component:"PSLIDER"}} />
                </div>
                <div className="col-lg-6 acnt-clm">
                    <SchemaParser schema={{component: "SIMPLEINFO"}} />
                </div>
            </div>
            <div>{/* Row 2 */}
                <SchemaParser schema={{component:"ABOUTSECTION"}} />
            </div>
            <div>{/* Row 3 */}
                <SchemaParser schema={{component:"PICTURES"}} />
            </div>

    </div>
}

export default Home