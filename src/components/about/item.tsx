import React from 'react';
import { ItemFace } from './interface';
import { Link } from 'react-router-dom'
import styles from './style.module.scss';


const Item: React.FC<ItemFace> = (props): JSX.Element => {

    return <div className={`col-lg-3 ${styles["abt-me-mn-dv"]}`}>
        <div>
            <h4 className={styles.uppercase}>{props.title}</h4>
        </div>
        <div className={`${styles["abt-icn-mn-dv"]}`}>
            <Link to={props.pathurl} className={`${styles["rmw-dflt-lnk-prpty"]}`}>
                <i className={`${props.iconClass} ${styles["abt-me-lg-icn"]}`} />
            </Link>
        </div>
        <div>
            <p>
                {props.desc}
            </p>
        </div>
        <div>
            <Link to={props.pathurl} className={`${styles["rmw-dflt-lnk-prpty"]}`}>
                <button className={`btn btn-primary ${styles["btn-cstm-cls"]}`}>View</button>
            </Link>
        </div>
    </div>
}

export default Item