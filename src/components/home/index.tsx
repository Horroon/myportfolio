import React from 'react';
import PSlider from '../p_slider/index';
import AccountDiv from '../account/index';
import About from '../about/index';
import Photos from '../photos/index';

import './style.scss'
const Home = (): JSX.Element => {
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
                <About />
            </div>
            <div>{/* Row 3 */}
                <Photos />
            </div>

    </div>
}

export default Home