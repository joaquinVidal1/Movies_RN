import axios from 'axios';
import {API_URL} from '../../env';

export const instance = axios.create({baseURL: API_URL});
export const tokenValue =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmRjZGQzZWU5YjAwNjhhOGFmOTAyMzA5M2NiZDZiMSIsInN1YiI6IjY0ZWY4NjQ0Y2FhNTA4MDEyYjA1Y2E1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._ZJTzRooaFetAJFC1FY1MlS5nAndTRbwbwY3byymnko';

instance.interceptors.request.use(config => {
  if (tokenValue !== undefined) {
    config.headers.Authorization = `Bearer ${tokenValue}`;
  }
  return config;
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
