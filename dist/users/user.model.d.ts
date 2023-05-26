import { Model } from 'sequelize-typescript';
export declare class User extends Model {
    username: string;
    password: string;
    email: string;
    age: number;
    role: string;
}
