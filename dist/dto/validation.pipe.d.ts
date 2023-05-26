import { PipeTransform } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
export declare class CreateUserValidatorPipe implements PipeTransform<CreateUserDto> {
    transform(value: CreateUserDto): CreateUserDto;
}
