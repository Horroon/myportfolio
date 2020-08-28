import React from 'react';
import {MakeRow} from './row';
import {ColumnFace} from '../interfaces';
import { RowFace } from "../interfaces";

export const SmallCarousel: React.FC<RowFace> = ({MainTitle,BigObject}) => {

    let splitionArray = (BigObject.length / 4).toString().split('.');
    let no_rows = splitionArray.length > 1 ? splitionArray.length : 1
    let rows = []
    for (let i = 0; i < no_rows; i++) {
        rows.push(i+4)
    }

    return <div className="container text-center my-3">
        <div id={`recipeCarousel${MainTitle}`} className="carousel slide w-100" data-ride={`carousel${MainTitle}`}>
        <h3 className="fvrt-itm-ttl">{MainTitle}</h3>
            <div className="carousel-inner w-100" role="listbox">
                {rows.map((rw, i) => {
                    
                    return <MakeRow active={i === 0 ? "active" : ""} object={BigObject.slice(i, rw)} key={i} />
                  
                })}
            </div>
            <a className="carousel-control-prev crsl-cntrl-pdng" href={`#recipeCarousel${MainTitle}`} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next crsl-cntrl-pdng" href={`#recipeCarousel${MainTitle}`} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
    }