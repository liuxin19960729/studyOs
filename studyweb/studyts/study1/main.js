"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var t2_1 = require("./t2");
var Testa = /** @class */ (function (_super) {
    __extends(Testa, _super);
    function Testa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Testa.prototype.a = function () {
        return "实现了";
    };
    return Testa;
}(t2_1.T));
var t = new Testa();
console.log(t.a());
console.log(t.b());
