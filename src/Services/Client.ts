import axios from 'axios';
import { APIConfig } from './APIConfig';

export const Client = axios.create({
  baseURL: APIConfig.BASE_URL,
  timeout: 30000,
});
