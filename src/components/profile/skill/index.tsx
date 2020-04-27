import React from 'react';
import Language from './language';
import { LanguageFace, tableFace } from './interfaces'
import TableRow from './givetableRow';

import './style.scss';

const TableValues: Array<tableFace> = [{ head: { c1: "Position", c2: "Experience" }, value: { c1: "Software Engineer", c2: "1.5" } },
{ head: { c1: "Nationality", c2: "Website" }, value: { c1: "Pakistani", c2: "Pending" } },
{
    head: { c1: "Date Of Birth", c2: "Languages" }, value: {
        c1: "October 06,1995", c2: ` <ul>
<li>Urdu</li>
<li>Punjabi</li>
<li>English</li>
<li>Saraeki</li>
</ul>` }
},
]

const Languages: Array<LanguageFace> = [{ lName: "JavaScript", progress: 80 }, { lName: "Java", progress: 40 }, { lName: "Reactjs", progress: 70 }, { lName: "React Native", progress: 65 }, { lName: "GraphQL", progress: 75 }, { lName: "Apollo Client", progress: 60 }, { lName: "TypeScript", progress: 50 }, { lName: "Flutter", progress: 40 }]

const Main: React.FC = (): JSX.Element => {
    return <div className="skl-prnt-dv">
        <div>
            <h3>Skills</h3>
        </div>
        <div>
            <div className="row skls-rw-pdng" >
                {
                    Languages.map((language, i) => <Language lName={language.lName} progress={language.progress} key={i} />)
                }
            </div>
            <div className="row skls-rw-pdng">
                <div className="col-lg-5">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <button className="btn"><i className="fa fa-home" />Follow Me</button>
                        </div>
                        <div>
                            <button className="btn"><i className="fa fa-home" />Download Resume</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div>
                            <i className="fa fa-facebook" />
                        </div>

                        <div>
                            <i className="fa fa-twitter" />
                        </div>

                        <div>
                            <i className="fa fa-instagram" />
                        </div>

                        <div>
                            <i className="fa fa-pinterest" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <table className="table table-bordered">
                        {
                            TableValues.map((value)=><TableRow head={value.head} value={value.value} />)
                        }
                    </table>
                </div>
            </div>
        </div>
    </div>
}

export default Main