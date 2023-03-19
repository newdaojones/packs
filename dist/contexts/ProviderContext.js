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
exports.ProviderContextProvider = exports.useProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// ProviderContext.tsx
var react_1 = require("react");
var ProviderContext = (0, react_1.createContext)(null);
var useProvider = function () {
    var context = (0, react_1.useContext)(ProviderContext);
    if (!context) {
        throw new Error('useProvider must be used within a ProviderContextProvider');
    }
    return context;
};
exports.useProvider = useProvider;
var ProviderContextProvider = function (_a) {
    var provider = _a.provider, children = _a.children;
    return (0, jsx_runtime_1.jsx)(ProviderContext.Provider, __assign({ value: provider }, { children: children }));
};
exports.ProviderContextProvider = ProviderContextProvider;
