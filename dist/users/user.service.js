"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./user.model");
const sequelize_1 = require("@nestjs/sequelize");
const microservices_1 = require("@nestjs/microservices");
const create_user_event_1 = require("./create-user.event");
let UserService = class UserService {
    constructor(userModel, communicationClient, analyticsClient) {
        this.userModel = userModel;
        this.communicationClient = communicationClient;
        this.analyticsClient = analyticsClient;
    }
    create(createUserDto) {
        this.communicationClient.emit('user_created', new create_user_event_1.CreateUserEvent("the user has been created"));
        this.analyticsClient.emit('user_created', new create_user_event_1.CreateUserEvent("user has been saved in analytics data"));
        return this.userModel.create({
            username: createUserDto.username,
            password: createUserDto.password,
            email: createUserDto.email,
            age: createUserDto.age,
            role: createUserDto.role,
        });
    }
    async findAll() {
        return this.userModel.findAll();
    }
    getUserByName(username) {
        const user = this.userModel.findOne({
            where: {
                username,
            },
        });
        return user;
    }
    async remove(id) {
        const user = await this.userModel.findOne({
            where: {
                id,
            },
        });
        await user.destroy();
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __param(1, (0, common_1.Inject)('COMMUNICATION')),
    __param(2, (0, common_1.Inject)('ANALYTICS')),
    __metadata("design:paramtypes", [Object, microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map