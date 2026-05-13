import HeaderDB from './header_DB/data.json';
import FootorDB from './footer_DB/data.json';
import ProfileDB from './profile_DB/data.json';
import HomeDB from './home_DB/data.json';

// Sync loaders — used by the existing schema-based routing (no API call)
export const LoadHeaderData  = () => HeaderDB;
export const LoadFooterData  = () => FootorDB;
export const LoadProfileData = () => ProfileDB;
export const LoadHomeData    = () => HomeDB;

// Async loaders — used when REACT_APP_API_URL is configured.
// Each function tries the backend first and falls back to local JSON.
export { getHomeContent, getHeaderContent, getFooterContent, getProfileContent } from '../api/content';