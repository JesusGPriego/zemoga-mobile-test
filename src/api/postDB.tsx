import axios from 'axios';
import { API_URL } from '@env';
// asdf
export const postDB = axios.create({
  baseURL: API_URL,
});
