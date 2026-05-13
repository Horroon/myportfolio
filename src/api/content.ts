import { apiFetch } from './client';
import HeaderDB from '../database/header_DB/data.json';
import FooterDB from '../database/footer_DB/data.json';
import ProfileDB from '../database/profile_DB/data.json';
import HomeDB from '../database/home_DB/data.json';

const API_URL = process.env.REACT_APP_API_URL;

async function withFallback<T>(endpoint: string, fallback: T): Promise<T> {
  if (!API_URL) return fallback;
  try {
    return await apiFetch<T>(endpoint);
  } catch {
    console.warn(`[Content API] Falling back to local data for: ${endpoint}`);
    return fallback;
  }
}

export const getHomeContent   = () => withFallback('/api/content/home',    HomeDB   as any);
export const getHeaderContent = () => withFallback('/api/content/header',  HeaderDB as any);
export const getFooterContent = () => withFallback('/api/content/footer',  FooterDB as any);
export const getProfileContent= () => withFallback('/api/content/profile', ProfileDB as any);
