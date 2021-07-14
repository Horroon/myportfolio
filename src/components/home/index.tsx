import React from 'react';
import SchemaParser from '../../services/schemaParser';
import {HomeCarousel as BigCarousel} from './bigcarousel';
import {ScrollController} from '../../utilities-methods'
import './style.scss';

interface HomeFace {
    items: any,
    component:string
}
export const Home:React.FC<HomeFace> = (props) => {
    const {items} = props
    ScrollController();
    return <SchemaParser schemas={items} />
}
export default Home