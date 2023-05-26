"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const Joi = require("joi");
exports.UserSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
    age: Joi.number().required(),
    role: Joi.string().required(),
}).options({
    abortEarly: false,
});
//# sourceMappingURL=schema.dto.js.map