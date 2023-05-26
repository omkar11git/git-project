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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const common_2 = require("@nestjs/common");
const auth_service_1 = require("./auth/auth.service");
const user_dto_1 = require("./dto/user.dto");
const user_service_1 = require("./users/user.service");
const permission_guard_1 = require("./auth/permission.guard");
const permissions_decorator_1 = require("./auth/permissions.decorator");
const validation_pipe_1 = require("./dto/validation.pipe");
let AppController = class AppController {
    constructor(userService, authservice) {
        this.userService = userService;
        this.authservice = authservice;
    }
    create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    findAll() {
        return this.userService.findAll();
    }
    remove(id) {
        return this.userService.remove(id);
    }
    login(req) {
        return this.authservice.generateToken(req.user);
    }
    androidDeveloperData(req) {
        return req.user;
    }
    webDeveloperData(req) {
        return req.user;
    }
};
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_1.Body)(new validation_pipe_1.CreateUserValidatorPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "remove", null);
__decorate([
    (0, common_2.Post)('/login'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("local")),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Get)("/android-developer"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt"), permission_guard_1.PermissionsGuard),
    (0, permissions_decorator_1.Permissions)("android_developer"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "androidDeveloperData", null);
__decorate([
    (0, common_1.Get)("/web-developer"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt"), permission_guard_1.PermissionsGuard),
    (0, permissions_decorator_1.Permissions)("web_developer"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "webDeveloperData", null);
AppController = __decorate([
    (0, common_1.Controller)("app"),
    __metadata("design:paramtypes", [user_service_1.UserService, auth_service_1.AuthService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map