"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createZoraInstance = void 0;
//ZoraFactor.ts
var ethers_1 = require("ethers");
var ZoraNFTCreatorV1Test_json_1 = __importDefault(require("@zoralabs/nft-drop-contracts/dist/artifacts/ZoraNFTCreatorV1.t.sol/ZoraNFTCreatorV1Test.json"));
var createZoraInstance = function (provider, zoraNFTCreatorV1Address) {
    var signer = provider.getSigner();
    var zoraInstance = new ethers_1.Contract(zoraNFTCreatorV1Address, ZoraNFTCreatorV1Test_json_1.default.abi, signer);
    return zoraInstance;
};
exports.createZoraInstance = createZoraInstance;
