"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissions = void 0;
const common_1 = require("@nestjs/common");
const Permissions = (roles) => (0, common_1.SetMetadata)('roles', roles);
exports.Permissions = Permissions;
//# sourceMappingURL=permissions.decorator.js.map