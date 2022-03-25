import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();
const MainAxios = axios.create({
  baseURL: 'https://api.unsplash.com',
});
MainAxios.defaults.headers.common[
  'Authorization'
] = `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`;
MainAxios.defaults.headers.common['Accept'] = 'application/json';

export default MainAxios;
