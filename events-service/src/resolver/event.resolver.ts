import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { EventService } from '../service/event.service';
import { GetAllEvents } from '../basics/types/event.types';
import { Event } from 'src/entities/event.entity';
import { EventInput } from 'src/inputs/event.input';
import { UpdateEventInput } from 'src/inputs/update-event.input';

export const returnEvent = () => Event;

@Resolver()
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Query(() => GetAllEvents)
  getAllEvents() {
    return this.eventService.findAll();
  }

  @Mutation(returnEvent)
  createEvent(
    @Args('createEventInput')
      createEventInput: EventInput,
  ) {
    return this.eventService.create(createEventInput);
  }

  @Mutation(returnEvent)
  updateEvent(
    @Args('id') id: string,
    @Args('updateEventInput')
      updateEventInput: UpdateEventInput,
  ) {
    return this.eventService.update(id, updateEventInput);
  }

  @Mutation(returnEvent)
  removeEvent(
    @Args('id', { type: () => String })
      id: string
  ) {
    return this.eventService.remove(id);
  }
}
