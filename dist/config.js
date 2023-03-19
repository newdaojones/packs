"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiKey = void 0;
// src/config.ts
function getApiKey() {
    var apiKey = process.env.REACT_APP_ALCHEMY_API_KEY;
    if (!apiKey) {
        throw new Error('Missing API key: Please set REACT_APP_ALCHEMY_API_KEY in the .env file');
    }
    return apiKey;
}
exports.getApiKey = getApiKey;
