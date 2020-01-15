import { Client } from "../../types";

export default class Resource<R> {
    client: Client;
    resourceName: string;

    constructor(client: Client, resourceName: string) {
        this.client = client;
        this.resourceName = resourceName;
    }

    async all(): Promise<Array<R>> {
        return new Promise<Array<R>>(async (resolve, reject) => {
            try {
                const { data } = await this.client.get<Array<R>>(`${this.resourceName}`);
    
                resolve(data);
            } catch(error) {
                reject(error);
            }
        });
    }

    async get(identifier: string): Promise<R> {
        return new Promise<R>(async (resolve, reject) => {
            try {
                const { data } = await this.client.get<R>(`${this.resourceName}/${identifier}`);
    
                resolve(data);
            } catch(error) {
                reject(error);
            }
        });
    }
}