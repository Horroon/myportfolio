import React from 'react';
import Scene1 from '../../assets/s1.jpg';
import Scene2 from '../../assets/s2.jpg';
import Scene3 from '../../assets/s3.jpg';
import Scene4 from '../../assets/s4.jpg';
import './style.scss'

const imgs = [
  { url: Scene1 },
  { url: Scene2 },
  { url: Scene3 },
  { url: Scene4 },
]

const P_Slider = () => {
 
  return <div id="demo" className="carousel slide" data-ride="carousel">

    <ul className="carousel-indicators crsl-dot">
      {
        imgs.map((item,i)=><li data-target="#demo" data-slide-to={`${i}`} className={`${i==0&&"active"}`}></li>)
      }
    </ul>

    <div className="carousel-inner crsl-itm">
      {
        imgs.map((item, i) => <div className={`carousel-item ${i == 0 && "active"}`}>
          <img className="crsl-itm-img" src={item.url} alt="Dhussi, Mianwali, Punjab" draggable={false} />
        </div>)
      }
    </div>

    <a className="carousel-control-prev" href="#demo" data-slide="prev">
      <span className="fa fa-chevron-circle-left crsl-icn-sz"></span>
    </a>
    <a className="carousel-control-next" href="#demo" data-slide="next">
      <span className="fa fa-chevron-circle-right crsl-icn-sz"></span>
    </a>

  </div>
}

export default P_Slider