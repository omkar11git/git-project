"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./user.model");
const microservices_1 = require("@nestjs/microservices");
let UserModule = UserModule_1 = class UserModule {
};
UserModule = UserModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [microservices_1.ClientsModule.register([
                {
                    name: 'COMMUNICATION',
                    transport: microservices_1.Transport.TCP,
                }, {
                    name: 'ANALYTICS',
                    transport: microservices_1.Transport.TCP,
                    options: { port: 3002 },
                },
            ]),
            sequelize_1.SequelizeModule.forFeature([user_model_1.User])],
        controllers: [],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService, UserModule_1],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map