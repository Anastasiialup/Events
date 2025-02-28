import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../entities/user.entity';
import { UserInput } from 'src/inputs/user.input';
import { UpdateUserInput } from 'src/inputs/update-user.input';

@Injectable()
export class UserActions {
  constructor(
    @InjectModel(User.name)
    private readonly UserModel: Model<User>,
  ) {}

  async findAllUsers() {
    try {
      const userQuery = await this.UserModel
        .aggregate([
          {
            $facet: {
              users: [
                {
                  $lookup: {
                    as: 'user',
                    from: 'users',
                    localField: 'user',
                    foreignField: '_id',
                  },
                },
              ],
              count: [
                {
                  $lookup: {
                    as: 'user',
                    from: 'users',
                    localField: 'user',
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
        users,
        count,
      } = userQuery[0] as unknown as { users: User[]; count: number };

      return {
        users,
        count: count[0]?.count || 0,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: 'Cannot find all users',
          name: 'findAllUsers',
          originalError: error,
        },
        'findAllUsers',
      );
    }
  }

  async createUser(createUserInput: UserInput) {
    try {
      const user = new this.UserModel({
        ...createUserInput,
      });

      return (await user.save());
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: 'Cannot create user',
          name: 'createUser',
          originalError: error,
          params: { createUserInput },
        },
        'createUser',
      );
    }
  }

  async findUserById(id: string) {
    try {
      const user = await this.UserModel
        .findOne({ _id: id })
        .exec();

      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: `Cannot find user by id ${id}`,
          name: 'findUserById',
          originalError: error,
          params: { id },
        },
        'findUserById',
      );
    }
  }

  async updateUserById(id: string, updateUserInput: UpdateUserInput) {
    try {
      const user = this.UserModel.findOneAndUpdate(
        { _id: id },
        updateUserInput,
        { new: true }
      ).exec();

      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: `Cannot find and update the user ${id}`,
          name: 'updateUserById',
          originalError: error,
          params: { id, updateUserInput },
        },
        'updateUserById',
      );
    }
  }

  async removeUserById(id: string) {
    try {
      const user = this.UserModel.findOneAndDelete(
        { _id: id },
      )

      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: `Cannot find and delete the user ${id}`,
          name: 'removeUserById',
          originalError: error,
          params: { id },
        },
        'removeUserById',
      );
    }
  }
}
