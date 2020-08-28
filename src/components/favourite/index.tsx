import React from 'react';
import {SmallCarousel} from './makefavoriteItem/list';
import './style.scss';

import {RowFace} from './interfaces';

import {Books} from './db/book';
import {Games} from './db/game';
import {Movies} from './db/movie';



const MainItems: Array<RowFace> = [{id:"23lkdfj", BigObject: Books, MainTitle: "Favorite Books" }, { id:"234kkdfs", BigObject: Movies, MainTitle: "Favorite Movies" }, {id:"2334dfs", BigObject: Games, MainTitle: "Favorite Games" }]

const Favourite = () => {
    return <div className="fvrt-bdy-dv">
        {
            MainItems.map((Item, i) => <SmallCarousel MainTitle={Item.MainTitle} BigObject={Item.BigObject} key={Item.id} />)
        }
    </div>
}

export default Favourite