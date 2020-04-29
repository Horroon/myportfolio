import React from 'react';

interface ColumnFace {
    img: string,
    title: string
}
const Tile: React.FC<ColumnFace> = (props): JSX.Element => {
    return <div className="col-lg-2 til-prnt-cntr">
        <div className="container">
            <img src={props.img} alt="Avatar" className="image til-img" draggable={false} />
            <div className="middle">
                <div className="frvt-cptn-text"><p>{props.title}</p></div>
            </div>
        </div>
    </div>
}

export default Tile