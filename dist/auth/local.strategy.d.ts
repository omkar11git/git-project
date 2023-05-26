import { Strategy } from 'passport-local';
import { UserService } from 'src/users/user.service';
import { User } from 'src/users/user.model';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly userservice;
    constructor(userservice: UserService);
    validate(username: string, password: string): Promise<User>;
}
export {};
