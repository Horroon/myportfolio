import React from 'react';
import TilesRow from './makefavoriteItem/makeTilesRow';
import './style.scss'



import LMB from '../../assets/books/LMB.webp'
import tariq from '../../assets/books/tariqbz.webp'
import quaid from '../../assets/books/quaid.webp'

//movies
import Dangal from '../../assets/movies/dangal.webp';
import Idiot from '../../assets/movies/idiot.webp';
import richardparker from '../../assets/movies/richardparker.webp';
import Titanic from '../../assets/movies/titanic.webp';
//end movies

//games
import CMNDO from '../../assets/games/commando2.webp';
import NFS from '../../assets/games/NFS.webp';
import IGI from '../../assets/games/IGI.webp';
import AOE from '../../assets/games/AOE.webp'
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
const Games: Array<ColumnFace> = [{ title: "IGI", img: IGI },{ title: "Commando 2", img: CMNDO },{ title: "Need for speed", img: NFS },{ title: "Age Of Empire", img: AOE },]
const Movies: Array<ColumnFace> = [{ title: "3 Idiots", img: Idiot },{ title: "Dangal", img: Dangal },{ title: "Richard Parker", img: richardparker },{ title: "Titanic", img: Titanic },]

const MainItems: Array<RowFace> = [{ BigObject: Books, MainTitle: "Favorite Books" }, { BigObject: Movies, MainTitle: "Favorite Movies" }, { BigObject: Games, MainTitle: "Favorite Games" }]

const Favourite = () => {
    return <div className="fvrt-bdy-dv">
        {
            MainItems.map((Item,i) =><TilesRow mainTitle={Item.MainTitle} items={Item.BigObject} key={i} id={i}/>)
        }
    </div>
}

export default Favourite