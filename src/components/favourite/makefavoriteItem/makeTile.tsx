import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ActionFace } from '../reducer/interfaces';

interface ColumnFace {
    obj: Obj
}

interface Obj {
    img: string,
    title: string,
    desc: string,
    releaseYr: string
}

const Tile: React.FC<ColumnFace> = (props): JSX.Element => {

    const Dispatch = useDispatch()

    return <div className="col-lg-2 til-prnt-cntr">
        <Link to="/detail" onClick={() => Dispatch({ type: "selectedItem", payload: props.obj })}>
            <div className="container">
                <img src={props.obj.img} alt="Avatar" className="image til-img" draggable={false} />
                <div className="middle">
                    <div className="frvt-cptn-text"><p>{props.obj.title}</p></div>
                </div>
            </div>
        </Link>
    </div>
}

export default Tile