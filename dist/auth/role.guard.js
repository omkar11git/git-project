"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuard = void 0;
class RoleGuard {
    constructor(role) {
        this.rolePassed = role;
    }
    canActivate(context) {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();
        return this.rolePassed == request.user.role;
    }
}
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.guard.js.map