"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var action_1 = __importDefault(require("./action"));
var Storefront = /** @class */ (function () {
    function Storefront(url, key) {
        this.url = url;
        this.actions = new action_1.default(utils_1.createClient(url, key));
    }
    Object.defineProperty(Storefront.prototype, "product", {
        get: function () {
            return {
                all: this.actions.get('product')
            };
        },
        enumerable: true,
        configurable: true
    });
    return Storefront;
}());
exports.default = Storefront;
var api = new Storefront('https://shopwaredemo.de');
api.product.all()
    .then(function (data) { return console.log(data); })
    .catch(function (err) { return console.log(err.response.status); });
