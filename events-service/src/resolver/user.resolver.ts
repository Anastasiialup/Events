import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from '../service/user.service';
import { GetAllUsers } from '../basics/types/user.types';
import { User } from 'src/entities/user.entity';
import { UserInput } from 'src/inputs/user.input';
import { UpdateUserInput } from 'src/inputs/update-user.input';

export const returnUser = () => User;

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => GetAllUsers)
  getAllUsers() {
    return this.userService.findAll();
  }

  @Mutation(returnUser)
  createUser(
    @Args('createUserInput')
      createUserInput: UserInput,
  ) {
    return this.userService.create(createUserInput);
  }

  @Mutation(returnUser)
  updateUser(
    @Args('id') id: string,
    @Args('updateUserInput')
      updateUserInput: UpdateUserInput,
  ) {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation(returnUser)
  removeUser(
    @Args('id', { type: () => String })
      id: string
  ) {
    return this.userService.remove(id);
  }
}
