import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.model';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateToken(payload: User): string;
}
