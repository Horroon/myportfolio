import React from 'react';
import {ScrollController} from '../../utilities-methods';
import serviceslogo from '../../assets/picture-dgtl-pc-removebg-preview.png';
import webdev from '../../assets/web-dev.jpg';
import mobileapp from '../../assets/mobile-app.jpg';
import serverdev from '../../assets/server-dev.jpg';
import bugpic from '../../assets/bug-pic.jpg';
import './style.scss';
import SchemaParser from '../../services/schemaParser';

const Services = ({items})=>{
    ScrollController();
    return <div className="services-container">
        <SchemaParser schemas={items} />
    </div>
}

export {Services}