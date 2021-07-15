import React from "react";

interface ServiceLogoFace{
    img:string,
    desc:string
}
export const ServiceLogoContainer: React.FC<ServiceLogoFace> = ({img, desc}):React.ReactElement => {
  return (
    <div className="service-logo-main">
      <div className="shadow-div">
        <div className="img-detail-tg">
          <p className="w3-animate-top aim-p">
            <h2>
              <img src={img} />
            </h2>
            <h4>
                {desc}
            </h4>
          </p>
        </div>
      </div>
    </div>
  );
};
