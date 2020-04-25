import React from 'react';
import TilesRow from './makefavoriteItem/makeTilesRow';
import './style.scss'
import LMB from '../../assets/books/LMB.jpg'
import G1 from '../../assets/games/torrent.jpg';
import SuperHero from '../../assets/games/superhero.jpg';
import Fun from '../../assets/games/fun.jpg';
import Fantasy from '../../assets/movies/fantasy.jpg'

interface ColumnFace {
    img: string,
    title: string
}

interface RowFace {
    MainTitle: string,
    BigObject: Array<ColumnFace>,
}

const Books: Array<ColumnFace> = [{ title: "Life Of Muhammad(S.W.A)", img: LMB }, { title: "Life Of Muhammad(S.W.A)", img: LMB }, { title: "Life Of Muhammad(S.W.A)", img: LMB }, { title: "Life Of Muhammad(S.W.A)", img: LMB }, { title: "Book", img: LMB }, { title: "Book", img: LMB }, { title: "Book", img: LMB }, { title: "Book", img: LMB }]
const Games: Array<ColumnFace> = [{ title: "Best Game", img: G1 }, { title: "Super Hero", img: SuperHero }, { title: "Fun Game", img: Fun }, { title: "Best Game", img: G1 }, { title: "Super Hero", img: SuperHero }, { title: "Fun Game", img: Fun },]
const Movies: Array<ColumnFace> = [{ title: "Fantasy Movie", img: Fantasy }, { title: "Super Hero", img: SuperHero }, { title: "Fun Game", img: Fun }, { title: "Fun Game", img: Fun }, { title: "Fun Game", img: Fun }, { title: "Fun Game", img: Fun }, { title: "Fantasy Movie", img: Fantasy }, { title: "Super Hero", img: SuperHero }, { title: "Fun Game", img: Fun }, { title: "Fun Game", img: Fun }, { title: "Fun Game", img: Fun }, { title: "Fun Game", img: Fun }]

const MainItems: Array<RowFace> = [{ BigObject: Books, MainTitle: "Favorite Books" }, { BigObject: Movies, MainTitle: "Favorite Movies" }, { BigObject: Games, MainTitle: "Favorite Games" }]

const Favourite = () => {
    return <div className="fvrt-bdy-dv">
        {
            MainItems.map((Item,i) =><TilesRow mainTitle={Item.MainTitle} items={Item.BigObject} key={i} id={i}/>)
        }
    </div>
}

export default Favourite