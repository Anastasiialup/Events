import { Injectable } from '@nestjs/common';
import { UserActions } from '../actions/user.actions';
import { UserInput } from 'src/inputs/user.input';
import { UpdateUserInput } from 'src/inputs/update-user.input';

@Injectable()
export class UserService {
  constructor(
    private readonly actions: UserActions,
  ) {}

  public async findAll() {
    try {
      return this.actions.findAllUsers();
    } catch {
      return null;
    }
  }

  public async create(createUserInput: UserInput) {
    try {
      return this.actions.createUser(createUserInput);
    } catch {
      return null;
    }
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    try {
      return (await this.actions.updateUserById(id, updateUserInput));
    } catch {
      return null;
    }
  }

  public async remove(id: string) {
    try {
      return this.actions.removeUserById(id);
    } catch {
      return null;
    }
  }
}
