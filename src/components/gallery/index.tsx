import React from 'react';
import PhotoItem from './photo';
import { PhotoFace } from './interfaces'
import './style.scss';

import G1 from '../../assets/gallery/g1.webp'
import G2 from '../../assets/gallery/g2.webp'
import G3 from '../../assets/gallery/g3.webp'
import G4 from '../../assets/gallery/g4.webp'

const photoes: Array<PhotoFace> = [{ url: G1, captionText: "Lahore" }, { url: G2, captionText: "Sawat" }, { url: G3, captionText: "Kalaam" }, { url: G4, captionText: "Kalaam" },]
const GalleryMainComponent: React.FC = (): JSX.Element => {
    return <div>
        <div className="container-fluid glry-cntnr">
            <div className="glry-ttl-prnt-dv">
                <h3>Gallery</h3>
            </div>
            <div className="row">
                {
                    photoes.map((photo, i) => <PhotoItem url={photo.url} captionText={photo.captionText} key={i} />)
                }

            </div>
        </div>
    </div>
}

export default GalleryMainComponent