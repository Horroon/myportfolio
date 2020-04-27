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

const HobbiesList: Array<ItemFace> = [{ icon: "fa fa-pencil", text: "writing" }, { icon: "fa fa-male", text: "walking" }, { icon: "fa fa-car", text: "visiting" }, { icon: "fa fa-book", text: "reading" },]
const Hobbies = () => {
    return <div>
        <div className="hb-tl-dv">
            <h3>Hobbies</h3>
        </div>
        <div className="row actvty-itms-row">
            {
                HobbiesList.map((h) => <ActivityItem icon={h.icon} text={h.text} />)
            }
        </div>
    </div>
}

export default Hobbies