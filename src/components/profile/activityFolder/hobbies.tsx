import React from 'react';
import './style.scss'

interface ItemFace {
    icon: string,
    text: string
}

const ActivityItem: React.FC<ItemFace> = (props) => {
    return <div className="col-lg-4 actvty-itm" >
        <div>
            <i className={`${props.icon}`} ></i>
        </div>
        <div>
            <span>{props.text}</span>
        </div>
    </div>
}

const HobbiesList: Array<ItemFace> = [{ icon: "fa fa-pencil", text: "writing" }, { icon: "fa fa-male", text: "walking" }, { icon: "fa fa-car", text: "visiting" }, { icon: "fa fa-book", text: "reading" }, { icon: "fa fa-film", text: "movies" },{ icon: "fa fa-gamepad", text: "Indoor games" },]

interface HobbyFace {
    heading: string,
    hobbiesList: Array<ItemFace>
}
export const Hobbies:React.FC<HobbyFace> = ({heading, hobbiesList}) => {
    return <div>
        <div className="hb-tl-dv">
            <h3>{heading}</h3>
        </div>
        <div className="row actvty-itms-row">
            {
                hobbiesList.map((h) => <ActivityItem icon={h.icon} text={h.text} />)
            }
        </div>
    </div>
}
