"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum() {
    var vals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vals[_i] = arguments[_i];
    }
    return vals.reduce(function (total, val) { return total += val; });
}
exports.sum = sum;
//# sourceMappingURL=calc.js.map