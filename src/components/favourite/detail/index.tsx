import React from 'react';
import Profile from '../../../assets/acct.webp'
import { useSelector } from 'react-redux'

import './style.scss'

interface ItemFace {
    img: string,
    title: string,
    releaseYr: string,
    desc: string
}

interface ReducerFace {
    FavoriteReducer: {
        selectedItem: ItemFace
    }
}

export const Detail: React.FC = (props): JSX.Element => {
    const item = useSelector<ReducerFace, ItemFace>(store => store.FavoriteReducer.selectedItem);

    return <div>
        <div className="container">
            <div className="cntnr-chld-dv">
                <div className="row">
                    <div className="col-lg-4 padding-zero">
                        <div className="img-dv">
                            <img src={item.img} className="abt-me-img" />
                        </div>
                    </div>

                    <div className="col-lg-8 padding-zero">
                        <div className="abtme-mn-name-dv">
                            <h1>{item.title}</h1>
                        </div>
                        <div className="abtme-jb-ttl-dv">
                            <h3>Release Year: {item.releaseYr}</h3>
                        </div>
                        <div className="abtme-dscrptn" dangerouslySetInnerHTML={{__html:`${item.desc}`}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}
