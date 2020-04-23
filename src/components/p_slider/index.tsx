import React from 'react';
import Scene1 from '../../assets/s1.jpg';
import Scene2 from '../../assets/s2.jpg';
import Scene3 from '../../assets/s3.jpg';
import Scene4 from '../../assets/s4.jpg';
import './style.scss'

const P_Slider = () => {
  const imgs = [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/270px-Los_Angeles_with_Mount_Baldy.jpg" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/270px-Los_Angeles_with_Mount_Baldy.jpg" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/270px-Los_Angeles_with_Mount_Baldy.jpg" },
  ]
  return <div id="demo" className="carousel slide" data-ride="carousel">

    <ul className="carousel-indicators crsl-dot">
      <li data-target="#demo" data-slide-to="0" className="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
      <li data-target="#demo" data-slide-to="3"></li>
    </ul>

    <div className="carousel-inner crsl-itm">
      <div className="carousel-item active">
        <img className="crsl-itm-img" src={Scene1} alt="Dhussi, Mianwali, Punjab" draggable={false} />
      </div>
      <div className="carousel-item">
        <img className="crsl-itm-img" src={Scene2} alt="Dhussi, Mianwali, Punjab" draggable={false} />
      </div>
      <div className="carousel-item">
        <img className="crsl-itm-img" src={Scene3} alt="Dhussi, Mianwali, Punjab" draggable={false} />
      </div>
      <div className="carousel-item">
        <img className="crsl-itm-img" src={Scene4} alt="Dhussi, Mianwali, Punjab" draggable={false} />
      </div>
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