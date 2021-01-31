import React, { ImgHTMLAttributes } from 'react';
import img1 from '../../assets/img1.jpg'
import Scene1 from '../../assets/sceneries/v1.webp';
import Scene2 from '../../assets/sceneries/v2_weather.webp';
import Scene3 from '../../assets/sceneries/prty.webp';
import Scene4 from '../../assets/sceneries/grdtn.webp';

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
            return <div className="col-lg-3 phto-itm-1 phto-itm w3-container w3-center w3-animate-bottom">
                <div className="photo-img-dv">
                    <img src={item.img} className="pic-dv" draggable={false} />
                </div>
                <div>
                    <p>{item.desc}</p>
                </div>
                <div>
                    <button className="btn btn-secondary btn-sctm-style">View</button>
                </div>
            </div>
        })}

    </div>
}

export default Photo