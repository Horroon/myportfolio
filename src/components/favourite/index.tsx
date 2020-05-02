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
    title: string,
    desc:string,
    releaseYr:string
}

interface RowFace {
    MainTitle: string,
    BigObject: Array<ColumnFace>,
}

const Books: Array<ColumnFace> = [{ title: "Muhammad's Life", img: LMB,desc:"Description", releaseYr: '2019' },{ title: "Tariq Bin Zayad", img: tariq, desc:"lsjdlfksjkd lkasdfj", releaseYr:"2015" },{ title: "Quaid e Azam", img: quaid, desc:"lsjdlfksjkd lkasdfj", releaseYr:"2015" }]
const Games: Array<ColumnFace> = [{ title: "IGI", img: IGI, desc:"lsjdlfksjkd lkasdfj", releaseYr:"2015" },{ title: "Commando 2", img: CMNDO, desc:"lsjdlfksjkd lkasdfj", releaseYr:"2015" },{ title: "Need for speed", img: NFS, desc:"lsjdlfksjkd lkasdfj", releaseYr:"2015" },{ title: "Age Of Empire", img: AOE, desc:"lsjdlfksjkd lkasdfj", releaseYr:"2015" },]
const Movies: Array<ColumnFace> = [{ title: "3 Idiots", img: Idiot, desc:"lsjdlfksjkd lkasdfj", releaseYr:"2015" },{ title: "Dangal", img: Dangal, desc:"lsjdlfksjkd lkasdfj", releaseYr:"2015" },{ title: "Richard Parker", img: richardparker, desc:"lsjdlfksjkd lkasdfj", releaseYr:"2015" },{ title: "Titanic", img: Titanic, desc:"lsjdlfksjkd lkasdfj", releaseYr:"2015" },]

const MainItems: Array<RowFace> = [{ BigObject: Books, MainTitle: "Favorite Books" }, { BigObject: Movies, MainTitle: "Favorite Movies" }, { BigObject: Games, MainTitle: "Favorite Games" }]

const Favourite = () => {
    return <div className="fvrt-bdy-dv">
        {
            MainItems.map((Item,i) =><TilesRow mainTitle={Item.MainTitle} items={Item.BigObject} key={i} id={i}/>)
        }
    </div>
}

export default Favourite