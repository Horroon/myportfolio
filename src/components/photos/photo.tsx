import React, { ImgHTMLAttributes } from 'react';
import img1 from '../../assets/img1.jpg'
import Scene1 from '../../assets/sceneries/v1.jpg';
import Scene2 from '../../assets/sceneries/v2_weather.jpg';
import Scene3 from '../../assets/sceneries/prty.jpg';
import Scene4 from '../../assets/sceneries/grdtn.jpg';

interface photoFace {
    img: string,
    desc: string
}

const photos: Array<photoFace> = [
    { img: Scene1, desc: "My Village Beauty" },
    { img: Scene2, desc: "Village Weather" },
    { img: Scene3, desc: "Office Party" },
    { img: Scene4, desc: "Graduation Day" }]

const Photo: React.FC = (): JSX.Element => {

    return <div className="row phto-mn-dv">
        {photos.map((item) => {
            return <div className="col-lg-3 phto-itm-1 phto-itm">
                <div className="photo-img-dv">
                    <img src={item.img} className="pic-dv" />
                </div>
                <div>
                    <p>{item.desc}</p>
                </div>
                <div>
                    <button className="btn btn-primary btn-cstm-cls">View</button>
                </div>
            </div>
        })}

    </div>
}

export default Photo