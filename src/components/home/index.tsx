import React from 'react';
import PSlider from '../p_slider/index';
import AccountDiv from '../account/index';
import {AboutMain} from '../about/index';
import {Picture} from '../photos/index';

import './style.scss'
export const Home = (): JSX.Element => {
    return <div>
            <div className="row hm-rw-1">
                <div className="col-lg-6 slidr-clm">
                    <PSlider />
                </div>
                <div className="col-lg-6 acnt-clm">
                    <AccountDiv />
                </div>
            </div>
            <div>{/* Row 2 */}
                <AboutMain />
            </div>
            <div>{/* Row 3 */}
                <Picture />
            </div>

    </div>
}

export default Home