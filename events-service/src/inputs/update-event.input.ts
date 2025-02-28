import { InputType, PartialType } from '@nestjs/graphql';
import { EventInput } from 'src/inputs/event.input';

@InputType('UpdateEventInput')
export class UpdateEventInput extends PartialType(EventInput) {}
