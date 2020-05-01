import React from 'react';
import { Link } from 'react-router-dom'

interface ColumnFace {
    img: string,
    title: string
}
const Tile: React.FC<ColumnFace> = (props): JSX.Element => {
    return <div className="col-lg-2 til-prnt-cntr">
        <Link to="/detail">
            <div className="container">
                <img src={props.img} alt="Avatar" className="image til-img" draggable={false} />
                <div className="middle">
                    <div className="frvt-cptn-text"><p>{props.title}</p></div>
                </div>
            </div>
        </Link>
    </div>
}

export default Tile