import { Injectable } from '@nestjs/common';
import { EventInput } from 'src/inputs/event.input';
import { UpdateEventInput } from 'src/inputs/update-event.input';
import { EventActions } from 'src/actions/event.actions';

@Injectable()
export class EventService {
  constructor(
    private readonly actions: EventActions,
  ) {}

  public async findAll() {
    try {
      return this.actions.findAllEvents();
    } catch {
      return null;
    }
  }

  public async create(createEventInput: EventInput) {
    try {
      return this.actions.createEvent(createEventInput);
    } catch {
      return null;
    }
  }

  async update(id: string, updateEventInput: UpdateEventInput) {
    try {
      return (await this.actions.updateEventById(id, updateEventInput));
    } catch {
      return null;
    }
  }

  public async remove(id: string) {
    try {
      return this.actions.removeEventById(id);
    } catch {
      return null;
    }
  }
}
