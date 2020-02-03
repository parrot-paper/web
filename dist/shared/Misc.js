"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramMissingError = 'One or more of the required parameters was missing.';
exports.pErr = (err) => {
    if (err) {
        console.log(err);
    }
};
exports.getRandomInt = () => {
    return Math.floor(Math.random() * 1000000000000);
};
