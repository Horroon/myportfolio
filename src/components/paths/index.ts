import {LoadProfileData} from '../../database'

interface PathInterface {
    path: string,
    schema: Object
}

export const PATHS:PathInterface[] =[
    {path:'/', schema:{component:"HOME"}},
    {path:'/services',schema:{component:"SERVICES"}},
    {path:'/myprofile', schema: LoadProfileData() },
    {path:'/gallery', schema: {component:"GALLERY" }},
    {path:'/contactme', schema: {component: "CONTACT"}},
    {path:'/aboutme', schema: {component: "ABOUTME"}},
    {path:'/detail', schema: {component:"DETAIL"}}
];