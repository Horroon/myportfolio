import {LoadProfileData, LoadHomeData, LoadServiceData} from '../../database';

interface PathInterface {
    path: string,
    schema: Object
}

export const PATHS:PathInterface[] =[
    {path:'/', schema: LoadHomeData()},
    {path:'/services',schema: LoadServiceData()},
    {path:'/myprofile', schema: LoadProfileData() },
    {path:'/gallery', schema: {component:"GALLERY" }},
    {path:'/contactme', schema: {component: "CONTACT"}},
    {path:'/aboutme', schema: {component: "ABOUTME"}},
    {path:'/detail', schema: {component:"DETAIL"}}
];