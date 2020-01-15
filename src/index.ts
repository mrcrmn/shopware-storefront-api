import { createClient } from './utils';
import ActionManager from './action';

export default class Storefront {
    url: string;
    actions: ActionManager;

    constructor(url: string, key?: string) {
        this.url = url;
        this.actions = new ActionManager(createClient(url, key));
    }

    get product() {
        return {
            all: this.actions.get('product'),
            get: this.actions.get('product/:product')
        }
    }
}

const api = new Storefront('https://shopwaredemo.de');

api.product.all()
    .then(data => console.log(data))
    .catch(err => console.log(err.response.status))
