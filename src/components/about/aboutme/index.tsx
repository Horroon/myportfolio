import React from 'react';
import Profile from '../../../assets/acct.webp'
import styles from './style.module.scss';

export const AboutMe: React.FC = (): JSX.Element => {
    return <div>
        <div className={styles.container}>
            <div className={styles['cntnr-chld-dv']}>
                <div className="row">
                    <div className={`col-lg-4 ${styles["padding-zero"]}`}>
                        <div className={styles["img-dv"]}>
                            <img src={Profile} className={styles["abt-me-img"]} />
                        </div>
                    </div>

                    <div className="col-lg-8 padding-zero">
                        <div className={styles["abtme-mn-name-dv"]}>
                            <h1>Haroon Rasheed</h1>
                        </div>
                        <div className={styles["abtme-jb-ttl-dv"]}>
                            <h3>Software Engineer</h3>
                        </div>
                        <div className={styles["abtme-dscrptn"]}>
                            <p>Hello, I'm a fullstack software engineer working over different projects in different technologies. IT is a my favorite Job and I really enjoy coding and problem solving in my life. Challenges give me new soul of living whether they are in life or in industries. I never disappoint from failure but I always get good lessons. </p>
                        </div>
                        <div className={styles["abt-me-flw-icn"]}>
                            <div>
                                <h3>Follow On</h3>
                            </div>

                            <div>
                                <div style={{ display: 'flex' }}>
                                    <div><a href="https://web.facebook.com/haroonrasheed.valient" className="fa fa-facebook" target="_black"></a></div>
                                    <div><a href="https://twitter.com/Horroon" className="fa fa-twitter" target="_black"> </a></div>
                                    <div> <a href="https://www.instagram.com/horroona/" className="fa fa-instagram" target="_black"></a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
