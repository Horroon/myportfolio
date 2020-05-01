import React from 'react';
import TilesRow from './makefavoriteItem/makeTilesRow';
import './style.scss'



import LMB from '../../assets/books/LMB.jpg'
import tariq from '../../assets/books/tariqbz.jpg'
import quaid from '../../assets/books/quaid.jpg'

//movies
import Dangal from '../../assets/movies/dangal.jpg';
import Idiot from '../../assets/movies/idiot.jpg';
import richardparker from '../../assets/movies/richardparker.jpg';
//end movies

//games
import CMNDO from '../../assets/games/commando2.jpg';
import NFS from '../../assets/games/NFS.jpg';
import IGI from '../../assets/games/IGI.jpg';
//games end

interface ColumnFace {
    img: string,
    title: string
}

interface RowFace {
    MainTitle: string,
    BigObject: Array<ColumnFace>,
}

const Books: Array<ColumnFace> = [{ title: "Muhammad's Life", img: LMB },{ title: "Tariq Bin Zayad", img: tariq },{ title: "Quaid e Azam", img: quaid }]
const Games: Array<ColumnFace> = [{ title: "IGI", img: IGI },{ title: "Commando 2", img: CMNDO },{ title: "Need for speed", img: NFS },]
const Movies: Array<ColumnFace> = [{ title: "3 Idiots", img: Idiot },{ title: "Dangal", img: Dangal },{ title: "Richard Parker", img: richardparker },]

const MainItems: Array<RowFace> = [{ BigObject: Books, MainTitle: "Favorite Books" }, { BigObject: Movies, MainTitle: "Favorite Movies" }, { BigObject: Games, MainTitle: "Favorite Games" }]

const Favourite = () => {
    return <div className="fvrt-bdy-dv">
        {
            MainItems.map((Item,i) =><TilesRow mainTitle={Item.MainTitle} items={Item.BigObject} key={i} id={i}/>)
        }
    </div>
}

export default Favourite