import React from "react";
import rmvbg from "../../../assets/removebgpersonalpic (2).png";
import "./style.scss";

interface HomeCarouselFace {
  heading_html: string;
  img: string;
}
const HomeCarousel: React.FC<HomeCarouselFace> = ({ heading_html, img }) => (
  <div className="big-carousel">
    <div className="big-carousel-div-1">
      <div className="hm-description">
        <p
          className="w3-animate-left"
          dangerouslySetInnerHTML={{ __html: heading_html }}
        />
      </div>
      <div className="hm-bg-dp">
        <img src={rmvbg} className="w3-animate-zoom" />
      </div>
    </div>
  </div>
);

export { HomeCarousel };
