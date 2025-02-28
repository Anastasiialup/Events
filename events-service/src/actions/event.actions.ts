import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Event } from '../entities/event.entity';
import { EventInput } from 'src/inputs/event.input';
import { UpdateEventInput } from 'src/inputs/update-event.input';

@Injectable()
export class EventActions {
  constructor(
    @InjectModel(Event.name)
    private readonly EventModel: Model<Event>,
  ) {}

  async findAllEvents() {
    try {
      const eventQuery = await this.EventModel
        .aggregate([
          {
            $facet: {
              events: [
                {
                  $lookup: {
                    as: 'event',
                    from: 'events',
                    localField: 'event',
                    foreignField: '_id',
                  },
                },
              ],
              count: [
                {
                  $lookup: {
                    as: 'event',
                    from: 'events',
                    localField: 'event',
                    foreignField: '_id',
                  },
                },
                {
                  $group: {
                    _id: null,
                    count: { $sum: 1 },
                  },
                },
              ],
            },
          },
        ])
        .exec();

      const {
        events,
        count,
      } = eventQuery[0] as unknown as { events: Event[]; count: number };

      return {
        events,
        count: count[0]?.count || 0,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: 'Cannot find all events',
          name: 'findAllEvents',
          originalError: error,
        },
        'findAllEvents',
      );
    }
  }

  async createEvent(createEventInput: EventInput) {
    try {
      const event = new this.EventModel({
        ...createEventInput,
      });

      return (await event.save());
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: 'Cannot create event',
          name: 'createEvent',
          originalError: error,
          params: { createEventInput },
        },
        'createEvent',
      );
    }
  }

  async findEventById(id: string) {
    try {
      const event = await this.EventModel
        .findOne({ _id: id })
        .exec();

      return event;
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: `Cannot find event by id ${id}`,
          name: 'findEventById',
          originalError: error,
          params: { id },
        },
        'findEventById',
      );
    }
  }

  async updateEventById(id: string, updateEventInput: UpdateEventInput) {
    try {
      const event = this.EventModel.findOneAndUpdate(
        { _id: id },
        updateEventInput,
        { new: true }
      ).exec();

      return event;
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: `Cannot find and update the event ${id}`,
          name: 'updateEventById',
          originalError: error,
          params: { id, updateEventInput },
        },
        'updateEventById',
      );
    }
  }

  async removeEventById(id: string) {
    try {
      const event = this.EventModel.findOneAndDelete(
        { _id: id },
      )

      return event;
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: `Cannot find and delete the event ${id}`,
          name: 'removeEventById',
          originalError: error,
          params: { id },
        },
        'removeEventById',
      );
    }
  }
}
