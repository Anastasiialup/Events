import { InputType, PartialType } from '@nestjs/graphql';
import { UserInput } from 'src/inputs/user.input';

@InputType('UpdateUserInput')
export class UpdateUserInput extends PartialType(UserInput) {}
