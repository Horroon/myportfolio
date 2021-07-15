import React from "react";

interface ServiceContainerFace {
  img: string;
  title: string;
  desc: string;
}
export const ServiceContainer: React.FC<ServiceContainerFace> = ({
  img,
  title,
  desc,
}): React.ReactElement => {
  return (
    <div className="col-lg-4 col-sm-1 w3-animate-bottom">
      <div className="card">
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};
