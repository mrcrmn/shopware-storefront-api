import { Method, AxiosInstance } from "axios";

type Action<Req, Res> = (identifier?: string, params?: Req) => Promise<Res>

export function action<Req = any, Res = any>(client: AxiosInstance, method: Method, endpoint: string): Action<Req, Res> {
    return async (identifier?: string, params?: Req): Promise<Res> => {

        if (identifier) {
            endpoint = endpoint.replace(`:${identifier}`, '');
        }

        return new Promise<Res>((resolve, reject) => {
            client.request<Res>({
                method: method,
                url: endpoint,
                ...(method.toUpperCase() === 'GET'
                    ? { params: params }
                    : { data: params })
            })
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        });
    }
}

export default class ActionManager {
    client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    all<Req, Res>(endpoint: string): Action<Req, Res> {
        return action<Req, Res>(this.client, 'GET', endpoint);
    }
}