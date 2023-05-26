"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserValidatorPipe = void 0;
const common_1 = require("@nestjs/common");
const schema_dto_1 = require("./schema.dto");
class CreateUserValidatorPipe {
    transform(value) {
        const result = schema_dto_1.UserSchema.validate(value);
        if (result.error) {
            const errorMessages = result.error.details.map((d) => d.message).join();
            throw new common_1.BadRequestException(errorMessages);
        }
        return value;
    }
}
exports.CreateUserValidatorPipe = CreateUserValidatorPipe;
//# sourceMappingURL=validation.pipe.js.map