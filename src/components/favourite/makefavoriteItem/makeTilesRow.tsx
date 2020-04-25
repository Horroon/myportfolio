import React from 'react';
import Tile from './makeTile';

interface TilesRowFace {
    mainTitle: string,
    items: Array<ItemFace>
}

interface ItemFace {
    img: string,
    title: string
}

const TilesRow: React.FC<TilesRowFace> = (props): JSX.Element => {
    return <div className="rw-cntr-fvrt">
        <div className="row" style={{ margin: 0 }}>
            <div className="tl-mn-hdng">
                <h3 style={{ color: 'white' }}>
                    {props.mainTitle}
                </h3>
            </div>
        </div>
        <div className="row" style={{ margin: 0, display: 'flex' }}>
            {
                props.items.map(item => <Tile img={item.img} title={item.title} />)
            }

        </div>
    </div>
}

export default TilesRow