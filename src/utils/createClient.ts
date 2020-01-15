import axios, { AxiosRequestConfig } from 'axios';
import { Client } from '../../types';
import { AUTH_HEADER_NAME, SALES_CHANNEL_PATH, API_VERSION } from '../constants';

export default function(url: string, key?: string): Client {
    const instance = axios.create({
        baseURL: `${url}/${SALES_CHANNEL_PATH}/${API_VERSION}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    instance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
        if (key) {
            config.headers[AUTH_HEADER_NAME] = key;
        }

        return config;
    });

    return instance;
}