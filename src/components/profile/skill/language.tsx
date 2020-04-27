import React from 'react';

interface ItemFace {
    lName: string,
    progress: number
}
const Language: React.FC<ItemFace> = (props): JSX.Element => {

    return <div className="col-lg-6">
        <div className="row">
            <div className="col-lg-6">
                <div>
                    <p>{props.lName}</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="progress">
                    <div className="progress-bar" style={{ width: `${props.progress}%` }} role="progressbar" aria-valuenow={props.progress} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
            </div>
        </div>
    </div>
}

export default Language