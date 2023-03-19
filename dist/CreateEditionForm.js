"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEditionForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// src/CreateEditionForm.tsx
var react_1 = require("react");
var CreateEditionForm = function (_a) {
    var onSubmit = _a.onSubmit;
    var _b = (0, react_1.useState)(''), name = _b[0], setName = _b[1];
    var _c = (0, react_1.useState)(''), symbol = _c[0], setSymbol = _c[1];
    // Add more state variables for other form fields as needed
    var handleSubmit = function (e) {
        e.preventDefault();
        onSubmit({
            name: name,
            symbol: symbol,
            // Pass the values of other form fields as needed
        });
    };
    return ((0, jsx_runtime_1.jsxs)("form", __assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "name" }, { children: "Name:" })), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "name", value: name, onChange: function (e) { return setName(e.target.value); } }), (0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "symbol" }, { children: "Symbol:" })), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "symbol", value: symbol, onChange: function (e) { return setSymbol(e.target.value); } }), (0, jsx_runtime_1.jsx)("button", __assign({ type: "submit" }, { children: "Create Edition" }))] })));
};
exports.CreateEditionForm = CreateEditionForm;
