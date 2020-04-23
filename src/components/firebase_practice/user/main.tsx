import React from 'react';
import Users from '../user/showUsers';
import AddUser from '../user/addUser';
import './style.scss'

const Main = (): JSX.Element => {
    return <div>
        <div className="row usr-rw-1">
            <div className="col-lg-6">
                <Users />
            </div>
            <div className="col-lg-6">
                <AddUser />
            </div>
        </div>
    </div>
}

export default Main