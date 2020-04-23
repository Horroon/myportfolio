import React from 'react';
import img1 from '../../assets/img1.jpg'

const Photo: React.FC = (): JSX.Element => {
    return <div className="row phto-mn-dv">
        {[1, 2, 3, 4].map((item: any) => {
            return <div className="col-lg-3 phto-itm-1 phto-itm">
                <div className="photo-img-dv">
                    <img src={img1} />
                </div>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <button className="btn btn-primary btn-cstm-cls">View</button>
                </div>
            </div>
        })}

    </div>
}

export default Photo