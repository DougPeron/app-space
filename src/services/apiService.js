import {get} from './httpService';


const BACK_END_URL = 'https://api.spacexdata.com/v4/rockets';

export async function apiGetBackend() {
  const getBackend = await get(BACK_END_URL);
  console.log(getBackend)
  return getBackend;
}