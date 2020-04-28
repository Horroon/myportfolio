import React from 'react';
import { PhotoFace } from './interfaces';

const PhotoItem: React.FC<PhotoFace> = (props): JSX.Element => {
    return <div className="col-lg-3 phto-clm">
        <div className="container">
            <img src={props.url} alt="Avatar" className="image photo" style={{ width: "100%" }} />
            <div className="glrymiddle">
                <div className="text">{props.captionText}</div>
            </div>
        </div>
    </div>
}

export default PhotoItem