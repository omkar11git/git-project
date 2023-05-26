import { User } from "./user.model";
import { CreateUserDto } from '../dto/user.dto';
import { ClientProxy } from "@nestjs/microservices";
export declare class UserService {
    private readonly userModel;
    private readonly communicationClient;
    private readonly analyticsClient;
    constructor(userModel: typeof User, communicationClient: ClientProxy, analyticsClient: ClientProxy);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    getUserByName(username: String): Promise<User>;
    remove(id: string): Promise<void>;
}
