import React from 'react';
import Language from './language';
import { LanguageFace } from './interfaces'
import TableRow from './givetableRow';

import './style.scss';


interface LinkFace {
    icon: string,
    link: string
}

interface TableFace {
    head: {c1: string, c2: string},
    value: {c1: string, c2: string}
}
const SocialButton: React.FC<LinkFace> = (props): JSX.Element => {
    return <div>
        <a href={props.link} target="__black"> <i className={`fa fa-${props.icon}`} /></a>
    </div>
}

const SocialButtonsList: Array<LinkFace> = [{ link: "https://web.facebook.com/haroonrasheed.valient", icon: "facebook" }, { link: "https://twitter.com/Horroon", icon: "twitter" }, { link: "https://www.instagram.com/horroona/", icon: "instagram" }]

interface SkillsFace {
    languages: Array<LanguageFace>,
    heading: string,
    background: Array<TableFace>
}
export const Skills: React.FC<SkillsFace> = (props): JSX.Element => {
    const {languages, heading, background} = props;
    return <div className="skl-prnt-dv">
        <div>
            <h3>{heading}</h3>
        </div>
        <div>
            <div className="row skls-rw-pdng" >
                {
                    languages.map((language, i) => <Language lName={language.lName} progress={language.progress} key={'p-l-key-' + i} />)
                }
            </div>
            <div className="row skls-rw-pdng">
                <div className="col-lg-5">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <a href="#pfl-bg-dv"><button className="btn"><i className="fa fa-paper-plane" />Hire Me</button></a>
                        </div>
                        <div>
                            <button className="btn"><i className="fa fa-download" />Download Resume</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {
                            SocialButtonsList.map((button,i) => <SocialButton link={button.link} icon={button.icon} key={'p-btn-key-' + i} />)
                        }
                    </div>
                </div>
            </div>
            <div className="row rmr-mrgn">
                <div className="col-lg-12 rmr-pdng">
                    <table className="table table-bordered">
                        {
                            background.map((value,i) => <TableRow head={value.head} value={value.value} key={'p-d-key-'+i} />)
                        }
                    </table>
                </div>
            </div>
        </div>
    </div>
}

export default Skills