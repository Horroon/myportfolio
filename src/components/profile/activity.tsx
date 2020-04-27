import React from 'react';
import Hobby from './activityFolder/hobbies';
import Reference from './activityFolder/education';
import Address from './address';

const Activities: React.FC = (): JSX.Element => {
    return <div className="row hb-rf-adrs-prnt-dv">
        <div className="col-lg-12">
            <Hobby />
        </div>
        <div className="col-lg-12">
            <Reference />
        </div>
        
        <div className="col-lg-12">
            <Address />
        </div>
    </div>
}

export default Activities