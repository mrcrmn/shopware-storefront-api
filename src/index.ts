import { Client, ProductResponse } from '../types';

import {
    PRODUCT_RESOURCE_PATH,
    CATEGORY_RESOURCE_PATH
} from './constants';
import { createClient } from './utils';
import Resource from './resources/Resource';
import CategoryResponse from '../types/responses/category';

export default class Storefront {
    url: string;
    client: Client;

    constructor(url: string, key?: string) {
        this.url = url;
        this.client = createClient(url, key);
    }

    getClient(): Client {
        return this.client;
    }

    product(): Resource<ProductResponse> {
        return new Resource<ProductResponse>(this.getClient(), PRODUCT_RESOURCE_PATH);
    }

    category(): Resource<CategoryResponse> {
        return new Resource<CategoryResponse>(this.getClient(), CATEGORY_RESOURCE_PATH);
    }
}