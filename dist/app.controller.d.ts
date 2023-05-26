import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './users/user.model';
import { UserService } from './users/user.service';
export declare class AppController {
    private readonly userService;
    private readonly authservice;
    constructor(userService: UserService, authservice: AuthService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    remove(id: string): Promise<void>;
    login(req: any): string;
    androidDeveloperData(req: any): string;
    webDeveloperData(req: any): string;
}
