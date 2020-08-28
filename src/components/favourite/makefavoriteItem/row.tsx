import React from 'react';
import { useDispatch } from 'react-redux';
import "./style.scss";

import {ColumnFace} from '../interfaces'
interface Face {
    active?: string,
    object: Array<ColumnFace>
}


export const MakeRow: React.FC<Face> = ({active, object}) => {
    

    return <div className={`carousel-item row no-gutters ${active}`}>
        {
            object.map((item:ColumnFace, i) => <div className="col-3 float-left" key={i}>
                <a href="#" data-target="#edit_carousel_img" data-toggle="modal">
                    <img className="img-fluid sm-crsl-pdng zoom" src={item.img} alt="not found" />
                </a>
            </div>)
        }
    </div>
}