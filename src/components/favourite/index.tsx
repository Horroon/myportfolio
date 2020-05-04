import React from 'react';
import TilesRow from './makefavoriteItem/makeTilesRow';
import './style.scss'

import {RowFace} from './interfaces'

import {Books} from './db/book'
import {Games} from './db/game'
import {Movies} from './db/movie'



const MainItems: Array<RowFace> = [{ BigObject: Books, MainTitle: "Favorite Books" }, { BigObject: Movies, MainTitle: "Favorite Movies" }, { BigObject: Games, MainTitle: "Favorite Games" }]

const Favourite = () => {
    return <div className="fvrt-bdy-dv">
        {
            MainItems.map((Item, i) => <TilesRow mainTitle={Item.MainTitle} items={Item.BigObject} key={i} id={i} />)
        }
    </div>
}

export default Favourite